# Fix GitHub Authentication Error

You're getting a 403 error because GitHub no longer accepts passwords. Here are your options:

## Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "Inspire Website"
   - Select scope: **repo** (check the box)
   - Click "Generate token"
   - **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

2. **Use the token when pushing:**
   ```bash
   git push -u origin main
   ```
   - Username: `darcywoodie-sketch`
   - Password: **Paste your token** (not your GitHub password)

## Option 2: Use GitHub Desktop (Easiest)

1. Download: https://desktop.github.com/
2. Sign in with your GitHub account
3. File → Add Local Repository → Select your project folder
4. Click "Publish repository" button

## Option 3: Use SSH (More secure, but requires setup)

If you want to set up SSH keys instead, let me know and I can guide you through that.


