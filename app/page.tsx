'use client'

import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import styles from './page.module.css'

interface Project {
  id: string
  title: string
  description: string
  url: string
  githubUrl?: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 'predictchain',
    title: 'PredictChain',
    description: 'The Bloomberg Terminal of Probabilistic Markets - Trade outcomes on crypto, politics, sports, AI with LMSR AMM',
    url: 'https://frontend-seven-opal-71.vercel.app',
    githubUrl: 'https://github.com/NinjjjaJoe/prediction-market-chain',
    tags: ['Prediction Markets', 'DeFi', 'LMSR', 'Oracle']
  },
  {
    id: 'cryptoquest',
    title: 'CryptoQuest',
    description: 'Gamified blockchain learning platform with interactive quests and on-chain achievements',
    url: 'https://frontend-jqq6hy44m-ninjjjajoes-projects.vercel.app',
    tags: ['GameFi', 'Education', 'NFTs']
  },
  {
    id: 'robot-chain-academy',
    title: 'Robot Chain Academy',
    description: 'AI-powered blockchain education platform for developers and enthusiasts',
    url: 'https://frontend-7b091li2v-ninjjjajoes-projects.vercel.app',
    tags: ['AI', 'Education', 'Web3']
  },
  {
    id: 'robot-learning-token',
    title: 'Robot Learning Token',
    description: 'Tokenized learning incentives with AI-driven curriculum and reward mechanisms',
    url: 'https://frontend-3mc5ivjxh-ninjjjajoes-projects.vercel.app',
    tags: ['EdTech', 'Tokens', 'AI']
  },
  {
    id: 'asset-chain',
    title: 'Asset Chain',
    description: 'Real-world asset tokenization platform with compliant on-chain ownership',
    url: 'https://frontend-6b380kowy-ninjjjajoes-projects.vercel.app',
    tags: ['RWA', 'Tokenization', 'DeFi']
  },
  {
    id: 'govchain',
    title: 'GovChain',
    description: 'Transparent governance platform with decentralized voting and proposal systems',
    url: 'https://frontend-aj8r2hut4-ninjjjajoes-projects.vercel.app',
    tags: ['Governance', 'DAO', 'Voting']
  },
  {
    id: 'inter-satellite',
    title: 'Inter-Satellite Data Marketplace',
    description: 'Decentralized marketplace for satellite data with verifiable provenance',
    url: 'https://frontend-gj8pq1f6z-ninjjjajoes-projects.vercel.app',
    tags: ['Space Tech', 'Data', 'Marketplace']
  },
  {
    id: 'medichain-ai',
    title: 'MediChain AI',
    description: 'AI-powered diagnostic models marketplace with FDA-cleared healthcare AI',
    url: 'https://frontend-seven-opal-71.vercel.app',
    githubUrl: 'https://github.com/NinjjjaJoe/medichain-ai',
    tags: ['Healthcare', 'AI', 'NFTs']
  },
  {
    id: 'payroll-dapp',
    title: 'Crypto Payroll Manager',
    description: 'Automated employee payment system on Base L2 with multi-token support',
    url: '#',
    githubUrl: 'https://github.com/NinjjjaJoe/payroll-dapp',
    tags: ['Payroll', 'Base L2', 'DeFi']
  },
  {
    id: 'insurance-platform',
    title: 'Decentralized Insurance',
    description: 'Community-driven insurance pools with transparent claims management',
    url: '#',
    githubUrl: 'https://github.com/NinjjjaJoe/insurance-platform',
    tags: ['Insurance', 'DAO', 'DeFi']
  },
  {
    id: 'trialchain',
    title: 'TrialChain',
    description: 'Clinical trial data management with patient consent and audit trails',
    url: '#',
    githubUrl: 'https://github.com/NinjjjaJoe/trialchain',
    tags: ['Healthcare', 'Privacy', 'Research']
  }
]

const expertise = [
  'Smart Contract Development (Solidity, Vyper)',
  'Security Audits & Best Practices',
  'Full-Stack dApp Development',
  'Oracle Integration (Chainlink)',
  'Layer 2 Solutions (Polygon, Arbitrum)',
  'DevOps & Infrastructure'
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h1 className={styles.logo}>NinjjjaBot</h1>
            <nav className={styles.nav}>
              <a href="#projects" className={styles.navLink}>Projects</a>
              <a href="#expertise" className={styles.navLink}>Expertise</a>
              <a href="https://github.com/NinjjjaJoe" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <Github size={18} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h2 className={styles.heroTitle}>
            Financial infrastructure for the Web3 economy
          </h2>
          <p className={styles.heroDescription}>
            Production-ready blockchain applications built with enterprise-grade smart contracts.
            From your first transaction to your billionth.
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.buttonPrimary}>
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/NinjjjaJoe" target="_blank" rel="noopener noreferrer" className={styles.buttonSecondary}>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Production dApps</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Security audited</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>Live deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Each application showcases enterprise-grade smart contracts, modern UI/UX, and full-stack integration
          </p>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectLinks}>
                    {project.url !== '#' && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className={styles.expertise}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <div className={styles.expertiseGrid}>
            {expertise.map((item, idx) => (
              <div key={idx} className={styles.expertiseCard}>
                <div className={styles.checkmark}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.7 5.3L7.5 14.5L3.3 10.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>© 2026 NinjjjaBot. Built with Next.js & deployed on Vercel.</p>
            <div className={styles.footerLinks}>
              <a href="https://github.com/NinjjjaJoe" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:contact@ninjjjabot.com">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
