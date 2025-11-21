import React from 'react'

const features = [
  {
    title: 'Single-Image to 3D',
    desc: 'Upload one photo, get a textured, lit 3D asset ready for e‑commerce and marketing.',
  },
  {
    title: 'Lighting Variants',
    desc: 'Auto-generate studio, lifestyle, and dramatic lighting setups with one click.',
  },
  {
    title: 'Bulk Pipelines',
    desc: 'Process thousands of SKUs with consistent styling and export presets.',
  },
  {
    title: 'AR & Web Ready',
    desc: 'Export GLB/USDZ and responsive hero images for web and mobile experiences.',
  },
]

function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07] transition">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
