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

### Setting up Email Notifications with Gmail

Since you want to use Gmail, here are the recommended approaches:

#### Option 1: Gmail via Webhook (Recommended)
This is the easiest and most reliable way to integrate Gmail:

1. **Set up Zapier or Make.com:**
   - Create a webhook trigger in Zapier/Make
   - Connect it to Gmail to send emails
   - Copy the webhook URL

2. **Configure in Supabase:**
   - Go to your Supabase project dashboard
   - Navigate to **Edge Functions** → **send-notification-email** → **Settings**
   - Add environment variable:
     - `EMAIL_WEBHOOK_URL`: Your webhook URL from Zapier/Make
     - `ADMIN_EMAIL`: Your Gmail address to receive notifications
     - `FROM_EMAIL`: Your Gmail address to send from

#### Option 2: Use a Dedicated Email Service (Alternative)
Since Gmail SMTP requires complex OAuth2 setup, consider these alternatives:

**Resend (Recommended):**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to Supabase Edge Function settings:
   - `RESEND_API_KEY`: Your Resend API key

**SendGrid:**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Add to Supabase Edge Function settings:
   - `SENDGRID_API_KEY`: Your SendGrid API key

### Why Not Direct Gmail SMTP?

Gmail SMTP requires OAuth2 authentication for security, which is complex to implement in serverless functions. The recommended approaches above are:
- More reliable
- Easier to set up
- Better for production use
- More secure

### How to Configure Environment Variables in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Edge Functions** in the sidebar
3. Click on **send-notification-email**
4. Go to the **Settings** tab
5. Add your environment variables in the **Environment Variables** section
6. Save the changes

### Additional Configuration

Set these optional environment variables in your Supabase Edge Function:
- `ADMIN_EMAIL`: Email address to receive notifications (your Gmail)
- `FROM_EMAIL`: Email address to send from (can be your Gmail or service email)
- `SITE_URL`: Your website URL for admin dashboard links

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