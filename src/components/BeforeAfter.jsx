import React, { useRef, useState, useEffect } from 'react'

function BeforeAfter({ before, after, labelBefore = 'Before', labelAfter = 'After' }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const onUp = () => setIsDragging(false)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const updatePos = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setPos((x / rect.width) * 100)
  }

  const onDown = (e) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    updatePos(clientX)
  }

  const onMove = (e) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    updatePos(clientX)
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={onDown}
      onTouchStart={onDown}
      onMouseMove={onMove}
      onTouchMove={onMove}
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 select-none"
      style={{ aspectRatio: '16 / 10' }}
    >
      {/* Before layer */}
      <img src={before} alt={labelBefore} className="absolute inset-0 h-full w-full object-cover" />

      {/* After layer (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={after} alt={labelAfter} className="h-full w-full object-cover" />
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 text-[11px] md:text-xs px-2 py-1 rounded-md bg-black/40 text-white/90 border border-white/10">
        {labelBefore}
      </div>
      <div className="absolute right-3 top-3 text-[11px] md:text-xs px-2 py-1 rounded-md bg-black/40 text-white/90 border border-white/10">
        {labelAfter}
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${pos}%` }}
      >
        <div className="relative -ml-0.5 h-full w-1 bg-white/70 mix-blend-overlay">
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-white shadow-lg ring-2 ring-white/60 cursor-ew-resize" />
        </div>
      </div>
    </div>
  )
}

export default BeforeAfter
