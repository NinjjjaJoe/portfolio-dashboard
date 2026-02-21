# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy

1. Push this repository to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"
5. Done! ✨

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables needed! This is a static site.

---

## Deploy to Other Platforms

### Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Framework:** Next.js

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### DigitalOcean App Platform

1. Create a new app from GitHub
2. Configure:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm start`
   - **HTTP Port:** 3000

---

## Custom Domain

After deploying to Vercel:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL automatically configured ✅

---

## Troubleshooting

### Build Fails

- Check Node.js version (requires v18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Review build logs for specific errors

### Module Not Found

```bash
npm install --legacy-peer-deps
```

### TypeScript Errors

```bash
npm run build -- --no-lint
```

---

## Performance Tips

- Images: Use Next.js Image component for optimization
- Fonts: Preload fonts in `layout.tsx`
- Analytics: Add Vercel Analytics for free

---

**Need help?** Open an issue or check [Next.js deployment docs](https://nextjs.org/docs/deployment).
