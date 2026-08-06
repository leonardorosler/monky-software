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
            <SectionLabel tone="dark">02 — O que construímos</SectionLabel>
            <h2>Produtos digitais com cara de negócio sério.</h2>
          </div>

          <div className="services-head__note" aria-label="Foco da entrega">
            <span>Estratégia</span>
            <p>
              Unimos posicionamento, interface e desenvolvimento para criar experiências
              que explicam valor rápido e deixam o próximo passo evidente.
            </p>
          </div>
        </div>

        <div className="services-layout">
          <aside className="services-summary reveal" aria-label="Como pensamos a entrega">
            <span className="services-summary__eyebrow">Método Monky</span>
            <strong>Clareza antes de tela bonita.</strong>
            <p>
              Cada projeto nasce com uma pergunta simples: o que o usuário precisa
              entender, confiar ou fazer nos primeiros segundos?
            </p>
            <div className="services-summary__checks">
              <span>Mensagem direta</span>
              <span>Hierarquia visual</span>
              <span>Mobile first</span>
            </div>
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
                {service.metric && <span className="service-card__metric">{service.metric}</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
