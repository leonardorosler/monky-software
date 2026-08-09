import { processSteps } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Process.css'

export function Process() {
  return (
    <section className="section section--dark" id="processo">
      <div className="container process-grid">
        <div className="process-sticky reveal">
          <SectionLabel tone="dark">04 - Processo</SectionLabel>
          <h2>Diagnóstico, protótipo e entrega sem virar um projeto infinito.</h2>
          <p>
            O processo reduz risco: primeiro entendemos a operação, depois
            priorizamos o que gera resultado e só então construímos a versão certa
            para lançar.
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
