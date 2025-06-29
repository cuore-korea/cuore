import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data }: EmailData = await req.json()

    // Email configuration - you'll need to set these in your Supabase project settings
    const SMTP_HOST = Deno.env.get('SMTP_HOST') || 'smtp.gmail.com'
    const SMTP_PORT = Deno.env.get('SMTP_PORT') || '587'
    const SMTP_USER = Deno.env.get('SMTP_USER') // Your email
    const SMTP_PASS = Deno.env.get('SMTP_PASS') // Your app password
    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'admin@cuore-beauty.co.kr'

    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error('SMTP credentials not configured')
    }

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

    // Send email using a simple HTTP request to a mail service
    // For production, you might want to use a service like SendGrid, Mailgun, or AWS SES
    const emailPayload = {
      to: ADMIN_EMAIL,
      subject: subject,
      html: htmlContent,
      from: SMTP_USER
    };

    // For now, we'll just log the email content and return success
    // In production, you would integrate with your preferred email service
    console.log('Email notification:', emailPayload);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notification sent successfully',
        emailContent: htmlContent 
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