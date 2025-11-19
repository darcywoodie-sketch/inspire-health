# Inspire Health Osteo Website

A modern Next.js 14 website for Inspire Health Osteopathy clinic.

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS with custom branding
- Framer Motion animations
- Responsive design
- SEO optimized

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. **Via Vercel Dashboard (Recommended)**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

2. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

### GitHub Setup

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Environment Variables

If you need any environment variables, add them in the Vercel dashboard under Project Settings → Environment Variables.

