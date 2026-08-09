import { principles } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Principles.css'

export function Principles() {
  return (
    <section className="section section--dark" id="principios">
      <div className="container principles-grid">
        <div className="reveal">
          <SectionLabel tone="dark">03 - Dúvidas comuns</SectionLabel>
          <h2>Menos trava antes da primeira conversa.</h2>
        </div>

        <div className="principles-list">
          {principles.map((principle: NumberedContent) => (
            <article className="principle-item" key={principle.number}>
              <span>{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
          <a className="principles-cta" href="#contato">
            Quero conversar sem compromisso
          </a>
        </div>
      </div>
    </section>
  )
}
