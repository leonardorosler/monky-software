import { SectionLabel } from './SectionLabel'
import './About.css'

export function About() {
  return (
    <section className="section section--light about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-logo reveal" aria-hidden="true">
          <img src="/logo-monky.png" alt="" />
        </div>

        <div className="about-copy reveal">
          <SectionLabel>05 - Sobre a Monky</SectionLabel>
          <h2>
            A Monky une estratégia, design e desenvolvimento para criar sistemas
            que entram na rotina do negócio.
          </h2>
          <p>
            O foco não é empilhar funcionalidades. É construir uma experiência
            clara para o dono, para a equipe e para o cliente final, com base
            preparada para evoluir depois da primeira entrega.
          </p>
          <a className="about-cta" href="#contato">
            Falar com a Monky
          </a>
        </div>
      </div>
    </section>
  )
}
