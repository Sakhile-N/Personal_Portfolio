# 🚀 Deployment Instructions for Sakhile's Portfolio

## Quick Deployment with Vercel (Recommended)

### Step 1: Prepare Your Code
1. Make sure all your files are saved
2. Your portfolio is ready to deploy!

### Step 2: Push to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your portfolio
git commit -m "Initial portfolio deployment"

# Create GitHub repository and push
# Go to github.com/new and create "sakhile-portfolio"
git remote add origin https://github.com/YOUR_USERNAME/sakhile-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your "sakhile-portfolio" repository
5. Configure environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: service_934k931
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: template_ym3oxok
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: g7ihxWtvFhoBnUwRe
6. Click "Deploy"

### Step 4: Your Live URLs
- **Automatic URL**: `https://sakhile-portfolio-[random].vercel.app`
- **Custom URL**: You can change this to `sakhile-ntombela.vercel.app`

### Step 5: Custom Domain (Optional)
1. Purchase domain: `sakhilentombela.com` from:
   - Namecheap (~$10/year)
   - GoDaddy (~$12/year)
   - Google Domains (~$12/year)
2. In Vercel dashboard, go to your project → Settings → Domains
3. Add your custom domain and follow DNS instructions

## Alternative: Netlify Deployment

### Quick Netlify Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your portfolio repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site Settings → Environment Variables
7. Deploy!

## Your Portfolio Will Be Live At:
- **Vercel**: `https://sakhile-ntombela.vercel.app`
- **Netlify**: `https://sakhile-ntombela.netlify.app`
- **Custom Domain**: `https://sakhilentombela.com` (if purchased)

## Professional URL Options:
1. **Free Professional**: `sakhile-ntombela.vercel.app`
2. **Premium Professional**: `sakhilentombela.com`
3. **Alternative**: `sakhilentombela.dev`

Your portfolio will be live and accessible worldwide! 🌍✨