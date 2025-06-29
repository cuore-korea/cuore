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

## Email Notifications

The system includes automatic email notifications for:
- New contact messages
- New consultation bookings

### Setting up Email Notifications

The email function supports multiple email service providers. Choose one of the following options:

#### Option 1: Resend (Recommended)
Resend is a modern email API that's reliable and easy to set up.

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. In your Supabase project, go to **Edge Functions** → **send-notification-email** → **Settings**
4. Add environment variable:
   - `RESEND_API_KEY`: Your Resend API key

#### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key with mail send permissions
3. In Supabase Edge Function settings, add:
   - `SENDGRID_API_KEY`: Your SendGrid API key

#### Option 3: Mailgun
1. Sign up at [mailgun.com](https://mailgun.com)
2. Get your API key and domain
3. In Supabase Edge Function settings, add:
   - `MAILGUN_API_KEY`: Your Mailgun API key
   - `MAILGUN_DOMAIN`: Your Mailgun domain

#### Option 4: Webhook Service
If you prefer to use a webhook service like Zapier, Make.com, or n8n:
1. Set up a webhook that accepts POST requests with email data
2. In Supabase Edge Function settings, add:
   - `EMAIL_WEBHOOK_URL`: Your webhook URL

### Additional Configuration

Set these optional environment variables in your Supabase Edge Function:
- `ADMIN_EMAIL`: Email address to receive notifications (default: admin@cuore-beauty.co.kr)
- `FROM_EMAIL`: Email address to send from (default: noreply@cuore-beauty.co.kr)
- `SITE_URL`: Your website URL for admin dashboard links

### How to Configure Environment Variables in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Edge Functions** in the sidebar
3. Click on **send-notification-email**
4. Go to the **Settings** tab
5. Add your environment variables in the **Environment Variables** section
6. Save the changes

The function will automatically use the first available email service based on the environment variables you've configured.

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
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite

## License

Private project for CUORE Beauty.