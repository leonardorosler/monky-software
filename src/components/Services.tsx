import { services } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Services.css'

export function Services() {
  return (
    <section className="section section--dark" id="servicos">
      <div className="container">
        <div className="section-intro section-intro--split reveal">
          <SectionLabel tone="dark">02 — O que construímos</SectionLabel>
          <h2>Do primeiro contato à solução funcionando.</h2>
        </div>

        <div className="service-lines">
          {services.map((service: NumberedContent) => (
            <article className="service-line" key={service.number}>
              <span>{service.number}</span>
              <div className="service-line__main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              {service.items && (
                <ul className="service-line__items" aria-label="Entregáveis">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <small aria-hidden="true">↘</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
