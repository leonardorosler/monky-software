import { useState } from 'react'
import { projects } from '../data.js'
import { SectionLabel } from './SectionLabel'
import type { Project } from './types'
import './Projects.css'

function getInitials(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.at(0))
    .join('')
    .toUpperCase()
}

const visualRows = [
  ['09:00', '10:30', '14:00', '16:45'],
  ['Sedan', 'SUV', 'Hatch', 'Oferta'],
  ['Loja', 'Estoque', 'Leads', 'Site'],
]

function ProjectPoster({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')
  const rows = visualRows[index % visualRows.length]
  const screens =
    project.screens && project.screens.length > 0
      ? project.screens
      : project.image
        ? [
            {
              image: project.image,
              label: 'Tela principal',
              description: project.visualTagline ?? project.category,
            },
          ]
        : []
  const [activeScreen, setActiveScreen] = useState(0)
  const currentScreen = screens[activeScreen]
  const hasMultipleScreens = screens.length > 1

  const showNextScreen = () => {
    setActiveScreen((current) => (current + 1) % screens.length)
  }

  if (currentScreen) {
    return (
      <figure className={`project-visual project-visual--${index % 3}`}>
        <div className="project-visual__chrome" aria-hidden="true">
          <span>Case {number}</span>
          <span>
            {String(activeScreen + 1).padStart(2, '0')} /{' '}
            {String(screens.length).padStart(2, '0')}
          </span>
        </div>

        <div className="project-visual__media">
          <div
            className="project-screen-track"
            style={{ transform: `translateX(-${activeScreen * 100}%)` }}
          >
            {screens.map((screen) => (
              <img
                className="project-image"
                src={screen.image}
                alt={`${screen.label} do projeto ${project.title}`}
                key={`${project.id}-${screen.label}`}
              />
            ))}
          </div>

          {hasMultipleScreens && (
            <button
              className="project-screen-next"
              type="button"
              aria-label={`Ver próximo print de ${project.title}`}
              onClick={showNextScreen}
            >
              <span aria-hidden="true">→</span>
            </button>
          )}

          {hasMultipleScreens && (
            <div className="project-screen-dots" aria-hidden="true">
              {screens.map((screen, screenIndex) => (
                <span
                  className={screenIndex === activeScreen ? 'is-active' : ''}
                  key={`${project.id}-${screen.label}-dot`}
                />
              ))}
            </div>
          )}
        </div>

        <figcaption className="project-visual__caption">
          <span>{currentScreen.label}</span>
          <span>{currentScreen.description}</span>
        </figcaption>
      </figure>
    )
  }

  return (
    <div className={`project-poster project-poster--${index % 3}`} aria-hidden="true">
      <div className="poster-topline">
        <span>{number}</span>
        <span>{project.category}</span>
      </div>

      <div className="poster-interface">
        <div className="poster-interface__header">
          <span>{getInitials(project.title)}</span>
          <span>{project.status}</span>
        </div>
        <div className="poster-interface__body">
          {rows.map((row) => (
            <div className="poster-interface__row" key={row}>
              <span>{row}</span>
              <i />
            </div>
          ))}
        </div>
      </div>

      <div className="poster-title">
        <strong>{project.title}</strong>
        <small>{project.visualTagline ?? project.category}</small>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="section section--light projects-section" id="projetos">
      <div className="container">
        <div className="projects-hero reveal">
          <SectionLabel>02 - Produto e prova</SectionLabel>
          <h2>Projetos reais para entender o resultado.</h2>
          <p>
            Mostramos o produto em contexto: o que existia antes, o que ficou
            mais simples e como a rotina do negócio ganha clareza.
          </p>
          <div className="projects-proof" aria-label="Resumo dos projetos">
            <span>Operação mais clara</span>
            <span>Contato facilitado</span>
            <span>Autonomia para crescer</span>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project: Project, index: number) => (
            <article
              className={`project-row ${index % 2 === 1 ? 'project-row--reverse' : ''}`}
              id={project.id}
              key={project.id}
            >
              <div className="project-content reveal">
                <div className="project-kicker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {project.status && <span>{project.status}</span>}
                </div>

                <div className="project-title-block">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <dl className="project-details">
                  {project.challenge && (
                    <div>
                      <dt>Desafio</dt>
                      <dd>{project.challenge}</dd>
                    </div>
                  )}
                  {project.focus && (
                    <div>
                      <dt>Foco</dt>
                      <dd>{project.focus}</dd>
                    </div>
                  )}
                  {project.result && (
                    <div>
                      <dt>Resultado</dt>
                      <dd>{project.result}</dd>
                    </div>
                  )}
                </dl>

                {project.valuePoints && (
                  <div className="project-value">
                    <span>Valor entregue</span>
                    <ul className="value-list" aria-label="Valor entregue">
                      {project.valuePoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-action">
                  <a href="#contato">Quero algo parecido</a>
                  <span>{project.technologies.slice(0, 2).join(' / ')}</span>
                </div>
              </div>

              <ProjectPoster project={project} index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
