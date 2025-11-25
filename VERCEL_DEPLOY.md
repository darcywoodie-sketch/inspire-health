# Deploy to Vercel - Quick Guide

Your code is now on GitHub! 🎉

## Deploy to Vercel (Takes 2 minutes)

### Step 1: Sign in to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (easiest option)

### Step 2: Import Your Repository
1. After signing in, click **"Add New Project"**
2. You'll see your GitHub repositories
3. Find **"inspire-health"** (or whatever you named it)
4. Click **"Import"**

### Step 3: Configure (Vercel Auto-Detects Everything!)
- **Framework Preset**: Next.js (auto-detected ✅)
- **Root Directory**: `./` (leave as is)
- **Build Command**: `next build` (auto-detected ✅)
- **Output Directory**: `.next` (auto-detected ✅)
- **Install Command**: `npm install` (auto-detected ✅)

**You don't need to change anything!** Just click **"Deploy"**

### Step 4: Wait for Deployment
- Vercel will build your site (takes 1-2 minutes)
- You'll see the build progress in real-time
- When done, you'll get a live URL like: `https://inspire-health.vercel.app`

### Step 5: Automatic Updates
- Every time you push to GitHub's `main` branch, Vercel automatically redeploys
- Pull requests get preview deployments automatically

## That's it! Your site is live! 🚀

### Optional: Custom Domain
1. In Vercel dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `www.inspirehealthosteo.com`)
3. Follow DNS instructions



