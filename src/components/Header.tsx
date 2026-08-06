import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <img src="/logo-navbar.png" alt="" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="site-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="menu-toggle__label">
          {isOpen ? 'Fechar menu' : 'Abrir menu'}
        </span>
        <span aria-hidden="true" className="menu-mark">
          {isOpen ? 'x' : '+'}
        </span>
      </button>

      <nav
        id="site-navigation"
        className={`site-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-start" href="#contato" onClick={closeMenu}>
          Iniciar um projeto ↗
        </a>
      </nav>
    </header>
  )
}
