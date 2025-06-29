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

1. In your Supabase project, go to Edge Functions
2. The `send-notification-email` function is already deployed
3. Set up environment variables in Supabase:
   - `SMTP_HOST`: Your SMTP server (default: smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (default: 587)
   - `SMTP_USER`: Your email address
   - `SMTP_PASS`: Your email app password
   - `ADMIN_EMAIL`: Email to receive notifications
   - `SITE_URL`: Your website URL

### For Gmail:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password as `SMTP_PASS`

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
4. Configure email settings in Supabase

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite

## License

Private project for CUORE Beauty.