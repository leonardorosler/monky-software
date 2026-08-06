import './HomeIntro.css'

export function HomeIntro() {
  return (
    <section className="intro-section" id="inicio" aria-labelledby="intro-title">
      <div className="container intro-shell">
        <div className="intro-copy reveal">
          <p className="intro-index">Monky Software</p>
          <h1 id="intro-title">Software sob medida para negócios reais.</h1>
          <p className="intro-lead">
            Criamos sites, sistemas e experiências digitais para empresas que
            precisam organizar processos, vender com clareza e crescer sem
            improviso.
          </p>

          <div className="intro-actions">
            <a className="button button--light" href="#contato">
              Começar um projeto
            </a>
            <a className="text-link" href="#servicos">
              Ver soluções
            </a>
          </div>
        </div>

        <div className="intro-visual reveal" aria-hidden="true">
          <div className="intro-visual__topline">
            <span>Digital studio</span>
            <span>Pelotas / RS</span>
          </div>
          <div className="intro-visual__screen">
            <div className="intro-visual__item">
              <span>Agenda online</span>
              <strong>Organizada</strong>
            </div>
            <div className="intro-visual__item">
              <span>Catálogo digital</span>
              <strong>Publicado</strong>
            </div>
            <div className="intro-visual__item">
              <span>Leads e contato</span>
              <strong>Centralizados</strong>
            </div>
          </div>
          <div className="intro-visual__metrics">
            <span>Sites</span>
            <span>Sistemas</span>
            <span>Catálogos</span>
          </div>
        </div>

        <div className="intro-proof reveal" aria-label="Áreas de atuação">
          <span>Sites profissionais</span>
          <span>Sistemas sob medida</span>
          <span>Catálogos digitais</span>
        </div>
      </div>
    </section>
  )
}
