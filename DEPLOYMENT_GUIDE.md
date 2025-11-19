# Deployment Guide for Inspire Health Osteo Website

## Prerequisites

1. **GitHub Account**: Sign up at [github.com](https://github.com) if you don't have one
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (you can use GitHub to sign in)

## Step 1: Configure Git (One-time setup)

If you haven't configured Git on this computer, run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email (the email should match your GitHub account).

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `inspire-health-osteo` (or any name you prefer)
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 3: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Commit your code (if you haven't already)
git add .
git commit -m "Initial commit: Inspire Health Osteo website"

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository (`inspire-health-osteo`)
4. Vercel will automatically detect:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **"Deploy"**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? inspire-health-osteo
# - Directory? ./
# - Override settings? No
```

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `www.inspirehealthosteo.com`)
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected:
- **Every push to `main` branch** = Automatic production deployment
- **Pull requests** = Preview deployments for testing

## Environment Variables

If you need environment variables later:
1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Troubleshooting

### Build Errors
- Make sure all dependencies are in `package.json`
- Check that `next build` runs successfully locally first

### Git Issues
- If you get authentication errors, use GitHub Personal Access Token instead of password
- Generate token: GitHub → Settings → Developer settings → Personal access tokens

## Next Steps

After deployment:
1. Test your live site
2. Share the Vercel URL with your team
3. Set up custom domain if needed
4. Configure analytics (optional)

