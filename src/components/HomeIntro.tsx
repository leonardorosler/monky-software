import { useMemo } from 'react'
import { heroDriftWallItems } from '../data.js'
import DriftWall from './DriftWall'
import type { DriftWallItem } from './DriftWall'
import './HomeIntro.css'

const minimumWallItems = 24

function shuffleItems(items: DriftWallItem[]) {
  return [...items].sort(() => Math.random() - 0.5)
}

function createRandomWallItems(items: DriftWallItem[]) {
  if (items.length === 0) return []

  const wallItems: DriftWallItem[] = []

  while (wallItems.length < minimumWallItems) {
    wallItems.push(...shuffleItems(items))
  }

  return shuffleItems(wallItems).slice(0, minimumWallItems)
}

export function HomeIntro() {
  const randomizedWallItems = useMemo(
    () => createRandomWallItems(heroDriftWallItems),
    [],
  )

  return (
    <section className="intro-section" id="inicio" aria-labelledby="intro-title">
      <div className="container intro-shell">
        <div className="intro-copy reveal">
          <p className="intro-eyebrow">Sites e sistemas sob medida</p>
          <h1 id="intro-title">
            Sites que valorizam seu negócio.{' '}
            <span>Sistemas que simplificam sua operação.</span>
          </h1>
          <p className="intro-lead">
            Criamos soluções digitais profissionais para pequenos negócios
            conquistarem novas oportunidades e organizarem melhor sua operação.
          </p>

          <div className="intro-actions">
            <a className="button button--light" href="#contato">
              Solicitar diagnóstico gratuito
            </a>
            <a className="button button--ghost" href="#projetos">
              Conhecer projetos
            </a>
          </div>

          <p className="intro-microcopy">Conversa inicial sem compromisso.</p>
        </div>

        <div className="intro-visual reveal">
          <DriftWall
            className="intro-drift-wall"
            items={randomizedWallItems}
            columns={4}
            tileWidth={236}
            tileHeight={142}
            gap={18}
            radius={8}
            tilt={13}
            turn={-10}
            perspective={1100}
            depth={70}
            speed={14}
            variance={0.38}
            parallax={0.45}
            fade={0.45}
            dim={0.84}
            overlayColor="#050505"
            pauseOnHover
          />
        </div>
      </div>

      <div className="intro-bottom-line" aria-hidden="true" />
    </section>
  )
}
