const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailData {
  type: 'contact' | 'consultation';
  data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
    service_type?: string;
    preferred_date?: string;
    preferred_time?: string;
  };
}

async function sendEmailWithResend(to: string, subject: string, html: string, from: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY not configured');
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: from,
        to: [to],
        subject: subject,
        html: html
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Resend API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const result = await response.json();
    return { success: true, method: 'resend', id: result.id };
  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
}

async function sendEmail(to: string, subject: string, html: string, from: string) {
  // Primary method: Resend (recommended)
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  if (resendApiKey) {
    return await sendEmailWithResend(to, subject, html, from);
  }

  // Fallback: Use SendGrid API
  const sendGridApiKey = Deno.env.get('SENDGRID_API_KEY');
  if (sendGridApiKey) {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendGridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: to }],
            subject: subject
          }],
          from: { email: from },
          content: [{
            type: 'text/html',
            value: html
          }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`SendGrid failed: ${response.statusText} - ${errorText}`);
      }

      return { success: true, method: 'sendgrid' };
    } catch (error) {
      console.error('SendGrid error:', error);
      throw error;
    }
  }

  // Fallback: Use webhook service
  const webhookUrl = Deno.env.get('EMAIL_WEBHOOK_URL');
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: from,
          to: to,
          subject: subject,
          html: html
        })
      });
      
      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.statusText}`);
      }
      
      return { success: true, method: 'webhook' };
    } catch (error) {
      console.error('Webhook error:', error);
      throw error;
    }
  }

  // If no email service is configured
  throw new Error(
    'No email service configured. Please set up one of the following environment variables:\n\n' +
    '• RESEND_API_KEY (recommended - sign up at resend.com)\n' +
    '• SENDGRID_API_KEY (alternative)\n' +
    '• EMAIL_WEBHOOK_URL (webhook integration)\n\n' +
    'For Resend setup:\n' +
    '1. Go to https://resend.com and create an account\n' +
    '2. Get your API key from the dashboard\n' +
    '3. Add RESEND_API_KEY to your Supabase Edge Function environment variables'
  );
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data }: EmailData = await req.json()

    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'admin@cuore-beauty.co.kr'
    // Use Resend's pre-verified domain for development when no custom domain is set
    const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'onboarding@resend.dev'

    // Create email content based on type
    let subject = '';
    let htmlContent = '';

    if (type === 'contact') {
      subject = `[CUORE] 새로운 문의: ${data.name}님으로부터`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #e11d48, #ec4899); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">CUORE</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">새로운 문의가 도착했습니다</p>
          </div>
          
          <div style="padding: 40px 30px; background: #f8fafc;">
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
              <h2 style="color: #1f2937; margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">문의 정보</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">이름</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">이메일</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="mailto:${data.email}" style="color: #e11d48; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">전화번호</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="tel:${data.phone}" style="color: #e11d48; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${data.service_type ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">관심 서비스</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <span style="background: #fef2f2; color: #dc2626; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${data.service_type}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #374151;">접수 시간</td>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
                </tr>
              </table>
              
              ${data.message ? `
              <div style="margin-top: 24px;">
                <h3 style="color: #374151; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">메시지</h3>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #e11d48; color: #1f2937; line-height: 1.6; font-size: 15px;">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              <div style="margin-top: 32px; text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}/admin" 
                   style="background: #e11d48; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 500; transition: background-color 0.2s;">
                  관리자 대시보드에서 답변하기
                </a>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 24px; color: #6b7280; font-size: 14px; background: #f1f5f9;">
            <p style="margin: 0;">이 이메일은 CUORE 웹사이트에서 자동으로 발송되었습니다.</p>
            <p style="margin: 8px 0 0 0;">
              <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}" style="color: #e11d48; text-decoration: none;">cuore-beauty.co.kr</a>
            </p>
          </div>
        </div>
      `;
    } else if (type === 'consultation') {
      subject = `[CUORE] 새로운 상담 예약: ${data.name}님 (${data.preferred_date} ${data.preferred_time})`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #e11d48, #ec4899); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">CUORE</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">새로운 상담 예약이 접수되었습니다</p>
          </div>
          
          <div style="padding: 40px 30px; background: #f8fafc;">
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
              <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
                <h2 style="color: #92400e; margin: 0; font-size: 18px; font-weight: 600;">🗓️ ${data.preferred_date} ${data.preferred_time}</h2>
                <p style="color: #b45309; margin: 4px 0 0 0; font-size: 14px;">예약 확정을 위해 고객에게 연락해주세요</p>
              </div>
              
              <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">예약 정보</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">이름</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">전화번호</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="tel:${data.phone}" style="color: #e11d48; text-decoration: none; font-weight: 600;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">이메일</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="mailto:${data.email}" style="color: #e11d48; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">서비스</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <span style="background: #fef2f2; color: #dc2626; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 500;">${data.service_type}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">희망 날짜</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">${data.preferred_date}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">희망 시간</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">${data.preferred_time}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #374151;">접수 시간</td>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
                </tr>
              </table>
              
              ${data.message ? `
              <div style="margin-top: 24px;">
                <h3 style="color: #374151; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">추가 메시지</h3>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #e11d48; color: #1f2937; line-height: 1.6; font-size: 15px;">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              <div style="margin-top: 32px; text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}/admin" 
                   style="background: #e11d48; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 500; margin-right: 12px;">
                  예약 관리하기
                </a>
                <a href="tel:${data.phone}" 
                   style="background: #10b981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 500;">
                  📞 고객에게 전화하기
                </a>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 24px; color: #6b7280; font-size: 14px; background: #f1f5f9;">
            <p style="margin: 0;">이 이메일은 CUORE 웹사이트에서 자동으로 발송되었습니다.</p>
            <p style="margin: 8px 0 0 0;">
              <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}" style="color: #e11d48; text-decoration: none;">cuore-beauty.co.kr</a>
            </p>
          </div>
        </div>
      `;
    }

    // Send the email
    const result = await sendEmail(ADMIN_EMAIL, subject, htmlContent, FROM_EMAIL);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notification sent successfully',
        method: result.method,
        id: result.id || null
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error sending notification:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})