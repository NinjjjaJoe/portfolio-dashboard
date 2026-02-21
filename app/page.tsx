'use client'

import { ExternalLink, Github, Shield, Wallet, Activity, Users, Heart, TestTube } from 'lucide-react'
import styles from './page.module.css'

interface Project {
  id: string
  title: string
  description: string
  icon: any
  tags: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 'medichain-ai',
    title: 'MediChain AI',
    description: 'AI-Powered Diagnostic Models on the Edge. Token-gated marketplace for FDA-cleared AI diagnostic models with HIPAA compliance.',
    icon: Heart,
    tags: ['Healthcare', 'AI', 'ERC-1155', 'IPFS'],
    features: [
      'ERC-1155 NFT marketplace for AI models',
      'Pay-per-inference with InferToken',
      'Edge deployment for HIPAA compliance',
      'FDA clearance tracking on-chain',
      'Local model execution (no PHI upload)'
    ],
    liveUrl: 'https://medichain-ai.vercel.app',
    githubUrl: 'https://github.com/kingz/medichain-ai',
    tech: ['Solidity', 'React', 'Wagmi', 'IPFS', 'Base L2']
  },
  {
    id: 'payroll-dapp',
    title: 'Crypto Payroll Manager',
    description: 'Simple, fast dApp for paying employees in cryptocurrency on Base L2 with scheduled payments.',
    icon: Wallet,
    tags: ['DeFi', 'Payroll', 'Base L2'],
    features: [
      'Multi-token support (ETH, USDC, USDT)',
      'Scheduled payments (weekly/biweekly/monthly)',
      'Batch payment processing',
      'Gas-efficient on Base L2',
      'Visual payment status indicators'
    ],
    liveUrl: 'https://crypto-payroll.vercel.app',
    githubUrl: 'https://github.com/kingz/payroll-dapp',
    tech: ['Solidity', 'Hardhat', 'React', 'RainbowKit', 'Base']
  },
  {
    id: 'insurance-platform',
    title: 'Decentralized Insurance',
    description: 'Stripe-inspired decentralized insurance platform with community-driven pools and transparent claims management.',
    icon: Shield,
    tags: ['Insurance', 'DeFi', 'DAO'],
    features: [
      'Create and join insurance pools',
      'Multi-assessor claim approval',
      'Role-based access control',
      'Beautiful Stripe-inspired UI',
      'Transparent claim processing'
    ],
    liveUrl: 'https://decentral-insurance.vercel.app',
    githubUrl: 'https://github.com/kingz/insurance-platform',
    tech: ['Solidity', 'OpenZeppelin', 'TypeScript', 'Wagmi', 'Ethereum']
  },
  {
    id: 'trialchain',
    title: 'TrialChain',
    description: 'Clinical trial data management on blockchain with patient consent tracking and immutable audit trails.',
    icon: TestTube,
    tags: ['Healthcare', 'Privacy', 'Research'],
    features: [
      'Patient consent management',
      'Immutable audit trails',
      'HIPAA-compliant architecture',
      'Trial data integrity verification',
      'Multi-site collaboration'
    ],
    liveUrl: 'https://trialchain.vercel.app',
    githubUrl: 'https://github.com/kingz/trialchain',
    tech: ['Solidity', 'React', 'Vite', 'Ethers.js', 'IPFS']
  }
]

const expertise = [
  { icon: '✅', text: 'Smart Contract Development (Solidity, Vyper)' },
  { icon: '✅', text: 'Security Audits & Best Practices' },
  { icon: '✅', text: 'Full-Stack dApp Development' },
  { icon: '✅', text: 'Oracle Integration (Chainlink)' },
  { icon: '✅', text: 'Layer 2 Solutions (Base, Arbitrum, Polygon)' },
  { icon: '✅', text: 'DevOps & Infrastructure' }
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1 className={styles.logo}>
              <span className={styles.logoIcon}>🥷</span>
              King Z
            </h1>
            <nav className={styles.nav}>
              <a href="#projects" className={styles.navLink}>Projects</a>
              <a href="#expertise" className={styles.navLink}>Expertise</a>
              <a href="https://github.com/kingz" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <Github size={18} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Activity size={14} />
              <span>Building Web3 Solutions</span>
            </div>
            <h1 className={styles.heroTitle}>
              Bespoke Smart Contract Consulting
            </h1>
            <p className={styles.heroDescription}>
              We build production-ready Web3 applications for real-world problems.
              Each dApp showcases enterprise-grade smart contracts, modern UI/UX,
              and full-stack integration.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className={styles.projects}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    <project.icon size={24} />
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.projectFeatures}>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className={styles.feature}>
                      <span className={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.projectTech}>
                  {project.tech.map((t) => (
                    <code key={t} className={styles.techBadge}>{t}</code>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButtonSecondary}>
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className={styles.expertise}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map((item, idx) => (
              <div key={idx} className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              © 2026 King Z. Built with Next.js & deployed on Vercel.
            </p>
            <div className={styles.footerLinks}>
              <a href="https://github.com/kingz" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com/kingz" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="mailto:contact@kingz.dev">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
