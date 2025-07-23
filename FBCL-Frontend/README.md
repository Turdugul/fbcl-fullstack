# FBCL Frontend - Friends of the Bay Community Library

A modern, responsive, and accessible frontend for the Friends of the Bay Community Library website. Built with React 18, Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Accessibility Compliant** - WCAG 2.1 AA standards with proper ARIA roles, focus management, and keyboard navigation
- **Modern Animations** - Smooth page transitions and scroll-triggered animations using Framer Motion
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Performance Optimized** - Fast loading times with Next.js optimizations

### Pages & Components
- **Home Page** - Hero section, stats, about section, featured events, testimonials
- **About Page** - Mission statement, timeline, impact stats
- **Events Page** - Upcoming and past events with filtering
- **Testimonials Page** - Community stories with ratings and avatars
- **Trustees Page** - Board member profiles and governance information
- **Volunteer Page** - Volunteer opportunities, roles, and application process
- **Hire Us Page** - Space rental information and booking system
- **Contact Page** - Contact form, map, and contact information

### Global Components
- **Header** - Responsive navigation with hamburger menu
- **Footer** - Contact info, social links, and quick navigation
- **Layout System** - Consistent spacing and typography
- **Reusable Components** - Buttons, cards, forms, and modals

## 🛠️ Tech Stack

- **React 18** - Latest React features and concurrent rendering
- **Next.js 14** - App Router for modern React development
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful, customizable icons
- **Headless UI** - Accessible UI components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FBCL-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
FBCL-Frontend/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── events/            # Events page
│   ├── testimonials/      # Testimonials page
│   ├── trustees/          # Trustees page
│   ├── volunteer/         # Volunteer page
│   ├── hire-us/           # Hire Us page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   └── layout/           # Layout components (Header, Footer)
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Yellow (#eab308) - Accent color
- **Accent**: Purple (#d946ef) - Highlight color
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography scaling

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent card design with hover effects
- **Forms**: Accessible form components with validation
- **Navigation**: Responsive navigation with mobile menu

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliance** - Color contrast, focus indicators
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and roles
- **Skip Links** - Quick navigation for assistive technology
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy and landmarks

## 📱 Responsive Design

- **Mobile First** - Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts** - Grid and flexbox for responsive layouts
- **Touch Friendly** - Appropriate touch targets and spacing

## 🚀 Performance

- **Next.js Optimizations** - Automatic code splitting and optimization
- **Image Optimization** - Next.js Image component with lazy loading
- **Font Optimization** - Google Fonts with display=swap
- **Bundle Analysis** - Optimized bundle sizes
- **Lighthouse Score** - Targeting 90+ performance score

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking and IntelliSense
- **Prettier** - Code formatting (via ESLint)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please contact:
- Email: info@fbcl.org
- Phone: (555) 123-4567

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Connect to Vercel** - Link your GitHub repository
2. **Automatic Deployment** - Deploys on every push to main
3. **Environment Variables** - Configure any necessary environment variables
4. **Custom Domain** - Add your custom domain in Vercel settings

### Build Commands
```bash
npm run build    # Build the application
npm run start    # Start the production server
```

## 📊 Analytics & SEO

- **Meta Tags** - Comprehensive meta tags for SEO
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## 🔮 Future Enhancements

- **CMS Integration** - Content management system for easy updates
- **Blog Section** - Library news and updates
- **Online Catalog** - Book search and availability
- **Event Registration** - Online event signup system
- **Donation Platform** - Online donation processing
- **Newsletter Integration** - Email marketing platform
- **Analytics Dashboard** - Visitor and engagement metrics
- **Multi-language Support** - Internationalization (i18n)

---

Built with ❤️ for the Bay Community Library 