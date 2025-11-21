import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient aura background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-20 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.18),rgba(59,130,246,0.12)_35%,rgba(251,146,60,0.08)_65%,transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300 animate-pulse" />
            Reimagine product visuals with AI → 3D
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            AI Photo to 3D Product Rendering Studio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl">
            Turn plain product photos into photoreal 3D scenes, generate lighting variations, and ship pixel-perfect visuals at scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition">
              Try the interactive demo
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-transparent border border-white/20 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">
              Book a strategy call
            </a>
          </div>
        </div>

        {/* Spline animation embed */}
        <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/20 shadow-[0_0_80px_rgba(99,102,241,0.25)]">
          <iframe
            title="AI aura animation"
            src="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
