# 🎨 Web3 Portfolio Dashboard

A beautiful, light-themed portfolio dashboard showcasing blockchain projects. Built with Next.js and designed with a clean, modern aesthetic.

## ✨ Features

- 🎨 **Light & Clean Design** - Inspired by modern web design best practices
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 15 for optimal performance
- 🎯 **Project Showcase** - Highlight your dApps with detailed feature lists
- 🔧 **Tech Stack Display** - Show off the technologies you use
- 🌈 **Smooth Animations** - Subtle hover effects and transitions

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or manually:

```bash
npm run build
vercel
```

## 📁 Project Structure

```
portfolio-dashboard/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page component
│   ├── page.module.css  # Page styles
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customization

### Add Your Projects

Edit `app/page.tsx` and update the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    description: 'Brief description',
    icon: YourIcon,
    tags: ['Tag1', 'Tag2'],
    features: [
      'Feature 1',
      'Feature 2'
    ],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    tech: ['Solidity', 'React', 'etc']
  }
]
```

### Update Branding

1. **Change name/logo** in `app/page.tsx`:
```typescript
<h1 className={styles.logo}>
  <span className={styles.logoIcon}>🥷</span>
  Your Name
</h1>
```

2. **Update metadata** in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your description',
}
```

### Customize Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: #6366f1;        /* Main brand color */
  --primary-dark: #4f46e5;   /* Hover state */
  --secondary: #8b5cf6;      /* Accent color */
  --success: #10b981;        /* Success green */
}
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📊 Featured Projects

The dashboard currently showcases:

- **MediChain AI** - Healthcare AI model marketplace
- **Crypto Payroll Manager** - Employee payment dApp
- **Decentralized Insurance** - Community insurance pools
- **TrialChain** - Clinical trial data management

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## 📝 License

MIT

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

---

**Built with ❤️ by King Z**
