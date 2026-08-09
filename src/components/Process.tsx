import { processSteps } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Process.css'

export function Process() {
  return (
    <section className="section section--light" id="processo">
      <div className="container process-grid">
        <div className="process-sticky reveal">
          <SectionLabel>04 - Processo</SectionLabel>
          <h2>Um caminho simples para sair do improviso.</h2>
          <p>
            Primeiro clareza. Depois construção. Sem transformar a ideia em um
            projeto infinito.
          </p>
          <a className="process-cta" href="#contato">
            Começar com diagnóstico gratuito
          </a>
        </div>

        <div className="process-steps">
          {processSteps.map((step: NumberedContent) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
