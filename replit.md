# Birthday & Anniversary Celebration App

## Overview

This is a romantic interactive web application celebrating a 22nd birthday and 4th relationship anniversary. The app features a single-page design with multiple themed sections including a timeline of the relationship, photo gallery, interactive birthday cake, love notes, and countdown timers. Built as a full-stack application with React frontend and Express backend, it uses modern web technologies to create an engaging, personalized celebration experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom romantic color scheme (rose, coral, gold, cream)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: TSX for TypeScript execution in development
- **Build Process**: ESBuild for production bundling
- **File Structure**: Separation of routes, storage layer, and Vite integration
- **API Design**: RESTful API structure with `/api` prefix routing

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Component Architecture
- **Layout**: Single-page application with smooth scrolling navigation
- **Interactive Elements**: 
  - Birthday cake with clickable candles
  - Photo gallery with lightbox functionality
  - Floating hearts animation
  - Love notes with reveal interactions
  - Timeline with animated milestones
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Development Environment
- **Package Management**: npm with lockfile version 3
- **TypeScript Configuration**: Strict mode with ES modules
- **Path Aliases**: Organized imports with `@/` for client, `@shared/` for shared code
- **Development Tools**: Replit-specific plugins for enhanced development experience

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, ESBuild, TypeScript, PostCSS, Autoprefixer
- **Backend**: Express.js, Node.js with ES modules

### UI and Styling
- **Component Library**: Radix UI primitives for accessibility
- **CSS Framework**: Tailwind CSS with custom configuration
- **Icons**: Lucide React, Font Awesome
- **Animations**: Framer Motion for micro-interactions
- **Fonts**: Google Fonts (Playfair Display, Poppins)

### Database and State Management
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with Drizzle Kit for schema management
- **Validation**: Zod for type-safe validation
- **Client State**: TanStack Query for server state synchronization

### Development and Build Tools
- **Development**: TSX for TypeScript execution
- **Code Quality**: TypeScript strict mode
- **Asset Optimization**: Vite plugins for development experience
- **Deployment**: Production build with static file serving

### Third-party Services
- **Image Hosting**: Unsplash for placeholder images
- **Database Hosting**: Neon Database for PostgreSQL
- **Font Delivery**: Google Fonts CDN
- **Icon Library**: Font Awesome CDN

### Specialized Libraries
- **Form Management**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date calculations
- **Utility Libraries**: clsx, class-variance-authority for conditional styling
- **Carousel**: Embla Carousel for image galleries