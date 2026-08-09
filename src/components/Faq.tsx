import { SectionLabel } from './SectionLabel'
import './Faq.css'

const faqs = [
  {
    question: 'Não sei se preciso de site, landing page ou sistema. E agora?',
    answer:
      'Tudo bem. A conversa serve para entender o objetivo e indicar o caminho mais simples para começar.',
  },
  {
    question: 'Dá para começar pequeno?',
    answer:
      'Sim. O ideal é começar pelo que gera impacto mais rápido e evoluir conforme o negócio responde.',
  },
  {
    question: 'Isso serve para qualquer tipo de negócio?',
    answer:
      'Serve para empresas que precisam vender melhor, organizar processos ou transformar uma ideia em ferramenta digital.',
  },
  {
    question: 'Como sei se vale investir nisso agora?',
    answer:
      'A primeira conversa ajuda a separar se o momento pede um site, uma página de venda, um sistema ou uma melhoria menor.',
  },
  {
    question: 'O contato vira orçamento na hora?',
    answer:
      'Primeiro entendemos o cenário. Depois indicamos um caminho enxuto, sem empurrar algo maior do que precisa.',
  },
]

export function Faq() {
  return (
    <section className="section section--light faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-heading reveal">
          <SectionLabel>06 - Perguntas frequentes</SectionLabel>
          <h2>Antes de chamar, talvez isso responda.</h2>
          <p>
            O objetivo é sair da dúvida com um próximo passo simples, sem pressão
            e sem projeto maior do que precisa.
          </p>
          <a className="faq-cta" href="#contato">
            Tirar minha dúvida no WhatsApp
          </a>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
