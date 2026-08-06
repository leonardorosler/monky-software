import { processSteps } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { NumberedContent } from './types'
import './Process.css'

export function Process() {
  return (
    <section className="section section--dark" id="processo">
      <div className="container process-grid">
        <div className="process-sticky reveal">
          <SectionLabel tone="dark">04 — Processo</SectionLabel>
          <h2>Um caminho claro antes de qualquer linha de código.</h2>
          <p>
            A Monky organiza cada etapa para que a solução nasça conectada ao
            problema certo, com prioridade, ritmo e espaço para evoluir.
          </p>
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
