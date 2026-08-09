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
            <h2>O que a Monky tira do improviso.</h2>
          </div>

          <div className="services-head__note" aria-label="Foco da entrega">
            <span>Estratégia</span>
            <p>
              A entrega precisa resolver uma dor real: menos controle manual,
              mais previsibilidade e uma experiência que o cliente entende rápido.
            </p>
          </div>
        </div>

        <div className="services-layout">
          <aside className="services-summary reveal" aria-label="Como pensamos a entrega">
            <span className="services-summary__eyebrow">Método Monky</span>
            <strong>Dor primeiro, recurso depois.</strong>
            <p>
              O visitante não compra uma lista de tecnologias. Ele compra uma
              operação mais organizada, atendimento mais rápido e menos perda de tempo.
            </p>
            <div className="services-summary__checks">
              <span>Problema visível</span>
              <span>Produto demonstrável</span>
              <span>CTA sem atrito</span>
            </div>
            <a className="services-summary__cta" href="#contato">
              Quero organizar minha operação
            </a>
          </aside>

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
                  {service.outcome && <strong>{service.outcome}</strong>}
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
                  <a href="#contato">Conversar sobre isso</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
