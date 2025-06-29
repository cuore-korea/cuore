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

async function sendEmailWithGmail(to: string, subject: string, html: string, from: string) {
  const gmailUser = Deno.env.get('GMAIL_USER');
  const gmailPassword = Deno.env.get('GMAIL_APP_PASSWORD');
  
  if (!gmailUser || !gmailPassword) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
  }

  // Create the email message in RFC 2822 format
  const boundary = `boundary_${Date.now()}`;
  const emailMessage = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    ``,
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: quoted-printable`,
    ``,
    html,
    ``,
    `--${boundary}--`
  ].join('\r\n');

  // Base64 encode the message
  const encodedMessage = btoa(emailMessage).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // Get OAuth2 access token using Gmail API
  try {
    // First, we need to use the Gmail API with proper authentication
    // For simplicity, we'll use a webhook approach or recommend using a dedicated email service
    
    // Since Gmail SMTP requires OAuth2 for security, we'll recommend using Gmail API
    // or switching to a dedicated email service provider
    
    throw new Error(
      'Gmail SMTP requires OAuth2 authentication which is complex to implement in Edge Functions. ' +
      'Please consider using one of these alternatives:\n\n' +
      '1. Gmail API with service account (recommended)\n' +
      '2. Resend.com (modern email API)\n' +
      '3. SendGrid (reliable email service)\n' +
      '4. Mailgun (developer-friendly)\n\n' +
      'For Gmail specifically, you would need to set up a Google Cloud service account and use the Gmail API.'
    );
    
  } catch (error) {
    console.error('Gmail SMTP error:', error);
    throw error;
  }
}

async function sendEmail(to: string, subject: string, html: string, from: string) {
  // Check for email service configurations in order of preference
  
  // Option 1: Gmail SMTP (requires special setup)
  const gmailUser = Deno.env.get('GMAIL_USER');
  const gmailPassword = Deno.env.get('GMAIL_APP_PASSWORD');
  if (gmailUser && gmailPassword) {
    return await sendEmailWithGmail(to, subject, html, from);
  }
  
  // Option 2: Use Resend API (recommended - modern and reliable)
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  if (resendApiKey) {
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
        const errorText = await response.text();
        throw new Error(`Resend failed: ${response.statusText} - ${errorText}`);
      }

      return { success: true, method: 'resend' };
    } catch (error) {
      console.error('Resend error:', error);
      throw error;
    }
  }

  // Option 3: Use SendGrid API
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

  // Option 4: Use Mailgun API
  const mailgunApiKey = Deno.env.get('MAILGUN_API_KEY');
  const mailgunDomain = Deno.env.get('MAILGUN_DOMAIN');
  if (mailgunApiKey && mailgunDomain) {
    try {
      const formData = new FormData();
      formData.append('from', from);
      formData.append('to', to);
      formData.append('subject', subject);
      formData.append('html', html);

      const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`api:${mailgunApiKey}`)}`,
        },
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Mailgun failed: ${response.statusText} - ${errorText}`);
      }

      return { success: true, method: 'mailgun' };
    } catch (error) {
      console.error('Mailgun error:', error);
      throw error;
    }
  }

  // Option 5: Use a webhook service (can integrate with Gmail via Zapier/Make)
  const webhookUrl = Deno.env.get('EMAIL_WEBHOOK_URL');
  if (webhookUrl) {
    try {
      const message = {
        from: from,
        to: to,
        subject: subject,
        html: html
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
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

  // If no email service is configured, provide helpful error message
  const availableServices = [
    'GMAIL_USER + GMAIL_APP_PASSWORD (requires special setup)',
    'RESEND_API_KEY (recommended)',
    'SENDGRID_API_KEY',
    'MAILGUN_API_KEY + MAILGUN_DOMAIN',
    'EMAIL_WEBHOOK_URL (can connect to Gmail via Zapier/Make)'
  ];

  throw new Error(
    `No email service configured. Please set up one of the following environment variables in your Supabase Edge Function settings:\n\n` +
    availableServices.map(service => `• ${service}`).join('\n') +
    `\n\nFor Gmail integration, we recommend using a webhook service like Zapier or Make.com to connect to your Gmail account, ` +
    `or switching to a dedicated email service like Resend or SendGrid for better reliability.`
  );
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data }: EmailData = await req.json()

    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'admin@cuore-beauty.co.kr'
    const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'noreply@cuore-beauty.co.kr'

    // Create email content based on type
    let subject = '';
    let htmlContent = '';

    if (type === 'contact') {
      subject = `[CUORE] 새로운 문의: ${data.name}님으로부터`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e11d48, #ec4899); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">CUORE 새로운 문의</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin-bottom: 20px;">문의 정보</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">이름:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">이메일:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.email}</td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">전화번호:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.phone}</td>
                </tr>
                ` : ''}
                ${data.service_type ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">관심 서비스:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.service_type}</td>
                </tr>
                ` : ''}
              </table>
              
              ${data.message ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #374151; margin-bottom: 10px;">메시지:</h3>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; color: #1f2937; line-height: 1.6;">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}/admin" 
                   style="background: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
                  관리자 대시보드에서 확인하기
                </a>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
            <p>이 이메일은 CUORE 웹사이트에서 자동으로 발송되었습니다.</p>
          </div>
        </div>
      `;
    } else if (type === 'consultation') {
      subject = `[CUORE] 새로운 상담 예약: ${data.name}님`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e11d48, #ec4899); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">CUORE 새로운 상담 예약</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin-bottom: 20px;">예약 정보</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">이름:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">전화번호:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">이메일:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">서비스:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.service_type}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">희망 날짜:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.preferred_date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">희망 시간:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${data.preferred_time}</td>
                </tr>
              </table>
              
              ${data.message ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #374151; margin-bottom: 10px;">추가 메시지:</h3>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; color: #1f2937; line-height: 1.6;">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="${Deno.env.get('SITE_URL') || 'http://localhost:5173'}/admin" 
                   style="background: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
                  관리자 대시보드에서 확인하기
                </a>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
            <p>이 이메일은 CUORE 웹사이트에서 자동으로 발송되었습니다.</p>
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
        method: result.method
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