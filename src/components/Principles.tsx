import { principles } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Principles.css'

export function Principles() {
  return (
    <section className="section section--light" id="principios">
      <div className="container principles-grid">
        <div className="reveal">
          <SectionLabel>03 — Como pensamos</SectionLabel>
          <h2>Tecnologia só faz sentido quando melhora o trabalho de quem a utiliza.</h2>
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
        </div>
      </div>
    </section>
  )
}
