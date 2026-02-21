'use client'

import { ExternalLink, Github } from 'lucide-react'
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
    id: 'medichain-ai',
    title: 'MediChain AI',
    description: 'AI-Powered Diagnostic Models on the Edge - Token-gated marketplace for FDA-cleared AI models',
    url: 'https://frontend-seven-opal-71.vercel.app',
    githubUrl: 'https://github.com/NinjjjaJoe/medichain-ai',
    tags: ['Healthcare', 'AI', 'NFT', 'Base L2']
  },
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Production-ready Web3 application with enterprise-grade smart contracts',
    url: 'https://frontend-jqq6hy44m-ninjjjajoes-projects.vercel.app',
    tags: ['DeFi', 'Web3', 'Solidity']
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Full-stack dApp with modern UI/UX and blockchain integration',
    url: 'https://frontend-7b091li2v-ninjjjajoes-projects.vercel.app',
    tags: ['dApp', 'React', 'Ethereum']
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Decentralized application showcasing smart contract development',
    url: 'https://frontend-3mc5ivjxh-ninjjjajoes-projects.vercel.app',
    tags: ['Smart Contracts', 'Web3']
  },
  {
    id: 'project-4',
    title: 'Project 4',
    description: 'Enterprise blockchain solution with Layer 2 integration',
    url: 'https://frontend-6b380kowy-ninjjjajoes-projects.vercel.app',
    tags: ['L2', 'Scaling', 'DeFi']
  },
  {
    id: 'project-5',
    title: 'Project 5',
    description: 'Web3 platform with advanced oracle integration',
    url: 'https://frontend-aj8r2hut4-ninjjjajoes-projects.vercel.app',
    tags: ['Chainlink', 'Oracles', 'Web3']
  },
  {
    id: 'project-6',
    title: 'Project 6',
    description: 'Decentralized finance application with security audits',
    url: 'https://frontend-gj8pq1f6z-ninjjjajoes-projects.vercel.app',
    tags: ['DeFi', 'Security', 'Audited']
  },
  {
    id: 'payroll-dapp',
    title: 'Crypto Payroll Manager',
    description: 'Employee payment dApp on Base L2 with scheduled payments',
    url: '#',
    githubUrl: 'https://github.com/NinjjjaJoe/payroll-dapp',
    tags: ['Payroll', 'Base L2', 'DeFi']
  },
  {
    id: 'insurance-platform',
    title: 'Decentralized Insurance',
    description: 'Community insurance pools with transparent claims management',
    url: '#',
    githubUrl: 'https://github.com/NinjjjaJoe/insurance-platform',
    tags: ['Insurance', 'DAO', 'Governance']
  },
  {
    id: 'trialchain',
    title: 'TrialChain',
    description: 'Clinical trial data management on blockchain with patient consent',
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
          <h1 className={styles.logo}>Web3 dApp Portfolio | NinjjjaBot</h1>
          <a href="https://github.com/NinjjjaJoe" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <Github size={20} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h2 className={styles.heroTitle}>Bespoke Smart Contract Consulting</h2>
          <p className={styles.heroDescription}>
            We build production-ready Web3 applications for real-world problems.
            Each dApp showcases enterprise-grade smart contracts, modern UI/UX,
            and full-stack integration.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.url !== '#' && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                      <ExternalLink size={16} />
                      View Project
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
      <section className={styles.expertise}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <ul className={styles.expertiseList}>
            {expertise.map((item, idx) => (
              <li key={idx} className={styles.expertiseItem}>
                <span className={styles.checkmark}>✅</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2026 NinjjjaBot. Built with Next.js & deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
