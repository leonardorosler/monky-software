import { services } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Services.css'

export function Services() {
  return (
    <section className="section section--dark services-section" id="servicos">
      <div className="container">
        <div className="services-head reveal">
          <div className="services-head__copy">
            <SectionLabel tone="dark">01 - Soluções</SectionLabel>
            <h2>Sites, landing pages e sistemas para negócios.</h2>
          </div>

          <div className="services-head__note" aria-label="Foco da entrega">
            <span>Direto ao ponto</span>
            <p>
              Criamos presença digital, páginas de venda e ferramentas para
              organizar a operação.
            </p>
          </div>
        </div>

        <div className="services-layout">
          <div className="service-cards">
            {services.map((service: NumberedContent) => (
              <article className="service-card" key={service.number}>
                <div className="service-card__top">
                  <span>{service.number}</span>
                  {service.marker && <small>{service.marker}</small>}
                </div>
                <div className="service-card__main">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                {service.items && (
                  <ul className="service-card__items" aria-label="Entregáveis">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="service-card__footer">
                  {service.metric && (
                    <span className="service-card__metric">{service.metric}</span>
                  )}
                  <a href="#contato">Quero isso</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
