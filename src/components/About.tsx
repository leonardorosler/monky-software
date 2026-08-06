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
          <SectionLabel>05 — Sobre a Monky</SectionLabel>
          <h2>
            A Monky Software transforma necessidades reais de pequenos negócios
            em produtos digitais simples, profissionais e úteis.
          </h2>
          <p>
            Cada projeto começa pelo entendimento do negócio. A tecnologia vem
            depois, como ferramenta para organizar processos, melhorar
            experiências e criar novas possibilidades.
          </p>
        </div>
      </div>
    </section>
  )
}
