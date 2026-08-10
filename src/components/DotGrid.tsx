import { useEffect, useRef } from 'react'

type DotGridProps = {
  className?: string
  activeColor?: string
  baseColor?: string
  dotSize?: number
  gap?: number
  proximity?: number
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function DotGrid({
  className = '',
  activeColor = '#fdfcff',
  baseColor = 'rgba(253, 252, 255, 0.17)',
  dotSize = 1.35,
  gap = 28,
  proximity = 150,
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    const reducedMotion = prefersReducedMotion()
    const pointer = {
      x: Number.POSITIVE_INFINITY,
      y: Number.POSITIVE_INFINITY,
      visible: false,
    }
    let width = 0
    let height = 0
    let pixelRatio = 1
    let animationFrame = 0
    let time = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let y = gap / 2; y < height + gap; y += gap) {
        for (let x = gap / 2; x < width + gap; x += gap) {
          const distance = Math.hypot(pointer.x - x, pointer.y - y)
          const influence = pointer.visible
            ? Math.max(0, 1 - distance / proximity)
            : 0
          const idlePulse = reducedMotion ? 0 : Math.sin(time + x * 0.02 + y * 0.018) * 0.16
          const radius = dotSize + influence * 2.35 + Math.max(0, idlePulse) * 0.45

          context.globalAlpha = 0.68
          context.fillStyle = baseColor
          context.beginPath()
          context.arc(x, y, dotSize, 0, Math.PI * 2)
          context.fill()

          if (influence > 0.02) {
            context.globalAlpha = 0.12 + influence * 0.88
            context.fillStyle = activeColor
            context.beginPath()
            context.arc(x, y, radius, 0, Math.PI * 2)
            context.fill()
          }
        }
      }

      context.globalAlpha = 1
      time += 0.018

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const syncPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.visible =
        pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height

      if (reducedMotion) draw()
    }

    const hidePointer = () => {
      pointer.visible = false
      if (reducedMotion) draw()
    }

    const onResize = () => {
      resizeCanvas()
      draw()
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', syncPointer)
    window.addEventListener('pointerleave', hidePointer)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', syncPointer)
      window.removeEventListener('pointerleave', hidePointer)
    }
  }, [activeColor, baseColor, dotSize, gap, proximity])

  return <canvas ref={canvasRef} className={`dot-grid ${className}`} aria-hidden="true" />
}
