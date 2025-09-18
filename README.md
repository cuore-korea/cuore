# CUORE Beauty Website

A premium Korean beauty website built with React, TypeScript, and Tailwind CSS.

## Features

- **Product Showcase**: Display beauty products with detailed information
- **Contact Forms**: Contact form with client-side validation
- **Consultation Booking**: Appointment booking form
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, sophisticated design with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── ProductsStatic.tsx      # Product showcase
│   ├── About.tsx               # About section
│   ├── Services.tsx            # Services section
│   ├── ContactStatic.tsx       # Contact form
│   ├── ConsultationBookingStatic.tsx # Booking form
│   └── Footer.tsx              # Footer
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles
```

## Features

### Static Product Catalog
- Displays Korean beauty products with images, descriptions, and pricing
- Product categories and benefits
- Responsive grid layout
- Hover effects and animations

### Contact Form
- Client-side form validation
- Success/error messaging
- Responsive design
- Contact information display

### Consultation Booking
- Date and time selection
- Service type selection
- Form validation
- Success confirmation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface
- Optimized images

## Customization

### Adding Products
Edit the `products` array in `src/components/ProductsStatic.tsx` to add or modify products.

### Styling
The project uses Tailwind CSS for styling. Customize colors, spacing, and components by modifying the Tailwind classes.

### Content
Update Korean text and content in the respective component files.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project for CUORE Beauty.