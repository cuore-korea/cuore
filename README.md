# CUORE Beauty Website

A premium Korean beauty website built with React, TypeScript, and Supabase.

## Features

- **Product Catalog**: Display beauty products with detailed information
- **Contact Forms**: Contact messages and consultation booking
- **Admin Dashboard**: Manage messages and appointments
- **Email Notifications**: Automatic email alerts for new submissions
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- Supabase account
- Resend account (for email notifications)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials in `.env`

4. Start the development server:
   ```bash
   npm run dev
   ```

## Admin Access

Visit `/admin` to access the admin dashboard. You'll need to:

1. Create an admin user in Supabase Auth
2. Log in with admin credentials
3. Manage contact messages and consultation bookings

## Email Notifications Setup

The system sends automatic email notifications for new contact messages and consultation bookings using **Resend**.

### Setting up Resend (Recommended)

1. **Create a Resend account:**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Verify your email address

2. **Get your API key:**
   - Go to your Resend dashboard
   - Navigate to **API Keys**
   - Click **Create API Key**
   - Copy the API key (starts with `re_`)

3. **Add domain (optional but recommended):**
   - In Resend dashboard, go to **Domains**
   - Add your domain (e.g., `cuore-beauty.co.kr`)
   - Follow DNS verification steps
   - This allows you to send from `noreply@yourdomain.com`

4. **Configure in Supabase:**
   - Go to your Supabase project dashboard
   - Navigate to **Edge Functions** → **send-notification-email**
   - Click on **Settings** tab
   - Add these environment variables:
     - `RESEND_API_KEY`: Your Resend API key
     - `ADMIN_EMAIL`: Your email address to receive notifications
     - `FROM_EMAIL`: Email to send from (e.g., `noreply@cuore-beauty.co.kr`)
     - `SITE_URL`: Your website URL (e.g., `https://cuore-beauty.co.kr`)

### Environment Variables

Set these in your Supabase Edge Function settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_123abc...` |
| `ADMIN_EMAIL` | Email to receive notifications | `admin@cuore-beauty.co.kr` |
| `FROM_EMAIL` | Email to send from | `noreply@cuore-beauty.co.kr` |
| `SITE_URL` | Your website URL | `https://cuore-beauty.co.kr` |

### How to Configure Environment Variables in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Edge Functions** in the sidebar
3. Click on **send-notification-email**
4. Go to the **Settings** tab
5. Scroll down to **Environment Variables**
6. Click **Add variable** for each one:
   - Name: `RESEND_API_KEY`, Value: `your_api_key_here`
   - Name: `ADMIN_EMAIL`, Value: `your_email@domain.com`
   - Name: `FROM_EMAIL`, Value: `noreply@yourdomain.com`
   - Name: `SITE_URL`, Value: `https://yourdomain.com`
7. Save the changes

### Testing Email Notifications

1. Make sure all environment variables are set
2. Submit a test contact form or consultation booking
3. Check your admin email for notifications
4. Check the Supabase Edge Function logs for any errors

### Alternative Email Services

If you prefer not to use Resend, the function also supports:

- **SendGrid**: Set `SENDGRID_API_KEY`
- **Webhook**: Set `EMAIL_WEBHOOK_URL` (can integrate with Gmail via Zapier/Make)

### Resend Pricing

- **Free tier**: 3,000 emails/month, 100 emails/day
- **Pro tier**: $20/month for 50,000 emails
- Perfect for small to medium businesses

## Database Schema

The application uses three main tables:

- `products`: Product catalog
- `contact_messages`: Contact form submissions
- `consultations`: Consultation booking requests

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform
3. Set up your Supabase environment variables
4. Configure email settings in Supabase Edge Functions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Email**: Resend API
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite

## Troubleshooting

### Email not sending?

1. Check Supabase Edge Function logs
2. Verify all environment variables are set correctly
3. Ensure your Resend API key is valid
4. Check your Resend dashboard for delivery status

### Admin login not working?

1. Create an admin user in Supabase Auth dashboard
2. Make sure the email/password are correct
3. Check browser console for errors

## License

Private project for CUORE Beauty.