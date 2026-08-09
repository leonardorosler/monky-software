import { SectionLabel } from './SectionLabel'
import './About.css'

export function About() {
  return (
    <section className="section section--dark about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-logo reveal" aria-hidden="true">
          <img src="/logo-monky.png" alt="" />
        </div>

        <div className="about-copy reveal">
          <SectionLabel tone="dark">05 - Monky</SectionLabel>
          <h2>
            Software para negócios que cansaram do improviso.
          </h2>
          <p>
            A Monky cria sites, landing pages, sistemas e ferramentas digitais
            para empresas que querem vender melhor, organizar processos e crescer
            com mais controle.
          </p>
          <a className="about-cta" href="#contato">
            Falar com a Monky
          </a>
        </div>
      </div>
    </section>
  )
}
