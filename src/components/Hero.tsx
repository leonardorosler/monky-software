import { useCallback, useEffect, useState } from 'react'
import { DotGrid } from './DotGrid'
import './Hero.css'

const exitKeys = new Set([
  'ArrowDown',
  'PageDown',
  'Enter',
  'Escape',
  ' ',
  'Spacebar',
])

const shouldShowBrandGate = () =>
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Hero() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(shouldShowBrandGate)

  const dismissGate = useCallback(() => {
    if (isLeaving) return

    setIsLeaving(true)
    window.scrollTo({ top: 0 })
  }, [isLeaving])

  useEffect(() => {
    if (!isLeaving) return undefined

    const timeoutId = window.setTimeout(() => setIsVisible(false), 980)
    return () => window.clearTimeout(timeoutId)
  }, [isLeaving])

  useEffect(() => {
    if (!isVisible) return undefined

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0) return
      event.preventDefault()
      dismissGate()
    }

    const onTouchStart = () => {
      dismissGate()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (!exitKeys.has(event.key)) return
      event.preventDefault()
      dismissGate()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [dismissGate, isVisible])

  if (!isVisible) return null

  return (
    <section
      className={`brand-gate ${isLeaving ? 'is-leaving' : ''}`}
      id="top"
      aria-label="Monky Software"
      onTransitionEnd={() => {
        if (isLeaving) setIsVisible(false)
      }}
    >
      <DotGrid className="brand-gate__dot-grid" activeColor="#fdfcff" />

      <div className="brand-gate__frame">
        <div className="brand-gate__top">
          <img src="/logo-monky.png" alt="Monky Software" />
        </div>

        <div className="brand-gate__center">
          <p className="brand-gate__headline">
            Construímos o <span className="brand-highlight">digital</span> que o
            seu <span className="brand-highlight">negócio</span> precisa.
          </p>
        </div>

        <div className="brand-gate__footer">
          <button
            className="brand-gate__scroll"
            type="button"
            aria-label="Entrar no site"
            onClick={dismissGate}
          >
            <span aria-hidden="true">↓</span>
            <span aria-hidden="true">↓</span>
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}
