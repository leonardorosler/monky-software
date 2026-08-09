import { useRef } from 'react'
import { heroSlides } from '../data.js'
import './HomeIntro.css'

const carouselGroup = Array.from({ length: 4 }, () => heroSlides).flat()
const carouselGroups = [carouselGroup, carouselGroup]

export function HomeIntro() {
  const carouselTrackRef = useRef<HTMLDivElement>(null)

  const setCarouselSpeed = (speed: number) => {
    carouselTrackRef.current?.getAnimations().forEach((animation) => {
      animation.playbackRate = speed
    })
  }

  return (
    <>
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
            <figure className="hero-mockup">
              <img
                className="hero-mockup__image hero-mockup__image--desktop"
                src="/hero-mockup-desktop-transparent.png"
                width="1281"
                height="854"
                alt="Projetos Barbearia King e RD Veículos desenvolvidos pela Monky Software"
                decoding="async"
                fetchPriority="high"
              />
              <img
                className="hero-mockup__image hero-mockup__image--mobile"
                src="/hero-mockup-mobile-transparent.png"
                width="736"
                height="1296"
                alt="Projetos Barbearia King e RD Veículos desenvolvidos pela Monky Software"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
        </div>

        <div className="intro-bottom-line" aria-hidden="true" />
      </section>

      <section
        className="hero-carousel-reserve"
        aria-label="Carrossel de projetos para uso futuro"
        onMouseEnter={() => setCarouselSpeed(0.38)}
        onMouseLeave={() => setCarouselSpeed(1)}
      >
        <div className="container hero-carousel-reserve__shell">
          <p>Projetos em destaque</p>
          <div className="intro-carousel" aria-hidden="true">
            <div className="intro-carousel__track" ref={carouselTrackRef}>
              {carouselGroups.map((group, groupIndex) => (
                <div className="intro-carousel__group" key={groupIndex}>
                  {group.map((slide, index) => (
                    <figure className="intro-slide" key={`${groupIndex}-${slide.image}-${index}`}>
                      <img src={slide.image} alt="" />
                      <figcaption>
                        <span>{slide.label}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
