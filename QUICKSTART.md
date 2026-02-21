# ⚡ Quick Start Guide

Get your portfolio live in 5 minutes!

## 1️⃣ Test Locally (Optional)

```bash
cd /root/clawd/portfolio-dashboard
npm run dev
```

Open http://localhost:3000 to preview.

## 2️⃣ Deploy to Vercel

### Method A: GitHub + Vercel Dashboard (Easiest)

**Step 1: Push to GitHub**
```bash
# Create a new repo on GitHub (github.com/new)
# Name it: portfolio-dashboard or web3-portfolio

# Then connect and push:
cd /root/clawd/portfolio-dashboard
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your portfolio repository
4. Click "Deploy"
5. Wait ~2 minutes ⏱️
6. Done! 🎉

Your site will be live at: `https://your-repo-name.vercel.app`

### Method B: Vercel CLI (Faster)

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd /root/clawd/portfolio-dashboard

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

Follow the prompts - it will auto-detect Next.js and deploy!

## 3️⃣ Customize Your Site

After deployment, update these files:

### `app/page.tsx` - Main content
```typescript
// Update the hero section
<h1 className={styles.heroTitle}>
  Your Custom Title Here
</h1>

// Update projects array
const projects: Project[] = [
  {
    title: 'Your Project',
    liveUrl: 'https://your-actual-url.com',
    githubUrl: 'https://github.com/you/project',
    // ... other fields
  }
]

// Update footer links
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://twitter.com/YOUR_HANDLE">Twitter</a>
```

### `app/globals.css` - Colors
```css
:root {
  --primary: #6366f1;      /* Change to your brand color */
  --secondary: #8b5cf6;    /* Accent color */
}
```

### `app/layout.tsx` - Metadata
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your custom description',
}
```

## 4️⃣ Add Custom Domain (Optional)

**In Vercel Dashboard:**
1. Go to your project → Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Update DNS records as shown
4. Wait for DNS propagation (~5-30 min)
5. SSL auto-configured ✅

**Recommended domain registrars:**
- Namecheap
- Cloudflare Registrar
- Google Domains

## 5️⃣ Update & Redeploy

After making changes:

```bash
cd /root/clawd/portfolio-dashboard

# Edit files...

# Commit changes
git add .
git commit -m "Update portfolio content"
git push

# Vercel auto-deploys on push! 🚀
```

Or with Vercel CLI:
```bash
vercel --prod
```

## 🎨 Customization Ideas

- **Add screenshots:** Place images in `/public` folder, reference in projects
- **Dark mode:** Add theme toggle (will need useState + CSS variables)
- **Analytics:** Enable Vercel Analytics in dashboard (free)
- **Contact form:** Add form with Vercel Forms or Formspree
- **Blog section:** Create `/app/blog` route
- **Case studies:** Detailed project pages at `/app/projects/[slug]`

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Module Not Found
```bash
npm install --legacy-peer-deps
```

### Git Push Rejected
```bash
git pull origin main --rebase
git push
```

## 📊 Analytics Setup

**Vercel Analytics (Free):**
1. Go to project dashboard
2. Click "Analytics" tab
3. Enable analytics
4. Done! Automatic tracking

**Google Analytics:**
Add to `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## ✅ Checklist

- [ ] Deploy to Vercel
- [ ] Update project URLs
- [ ] Add social links
- [ ] Customize colors
- [ ] Add custom domain
- [ ] Enable analytics
- [ ] Share on Twitter/LinkedIn 🎉

---

**Need help?** Check the main README.md or open an issue!

**Built with:** Next.js 15 + TypeScript + Vercel  
**Time to deploy:** ~5 minutes ⚡
