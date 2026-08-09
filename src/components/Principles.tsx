import { principles } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Principles.css'

export function Principles() {
  return (
    <section className="section section--light" id="principios">
      <div className="container principles-grid">
        <div className="reveal">
          <SectionLabel>03 - Por que funciona</SectionLabel>
          <h2>Um bom sistema resolve problemas que aparecem toda semana.</h2>
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
            Quero descobrir o que automatizar primeiro
          </a>
        </div>
      </div>
    </section>
  )
}
