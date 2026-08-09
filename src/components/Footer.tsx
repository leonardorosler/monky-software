import { siteConfig } from '../data.js'
import './Footer.css'

const footerNav = [
  { href: '#servicos', label: 'Soluções' },
  { href: '#projetos', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

const socialLabels = {
  instagram: 'Instagram',
  github: 'GitHub',
  linkedin: 'LinkedIn',
}

export function Footer() {
  const year = new Date().getFullYear()
  const socialLinks = Object.entries(siteConfig.socialLinks).filter(([, href]) =>
    Boolean(href),
  )

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="footer-brand" href="#inicio">
            <img src="/logo-monky.png" alt="" />
            <span>Monky Software</span>
          </a>
          <p>Software feito para operações reais.</p>
        </div>

        <nav aria-label="Navegação reduzida">
          {footerNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <address>
          <span>{siteConfig.location}</span>
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
          {siteConfig.whatsapp && (
            <a href={`https://wa.me/${siteConfig.whatsapp}`}>WhatsApp</a>
          )}
          {socialLinks.map(([key, href]) => (
            <a href={href} key={key} target="_blank" rel="noreferrer">
              {socialLabels[key as keyof typeof socialLabels]}
            </a>
          ))}
        </address>

        <p className="copyright">© {year}</p>
      </div>
    </footer>
  )
}
