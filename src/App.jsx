import React from 'react'
import Hero from './components/Hero'
import BeforeAfter from './components/BeforeAfter'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Before/After gallery */}
      <section id="demo" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Interactive before/after</h2>
              <p className="mt-2 text-slate-300 max-w-2xl">Drag to compare original photos against AI-enhanced 3D renders. Perfect for ecommerce, ads, and landing hero shots.</p>
            </div>
            <div className="hidden md:block text-xs text-white/60">Drag the handle ↔</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <BeforeAfter
              before="https://images.unsplash.com/photo-1556228724-4f3aa10b9319?q=80&w=1800&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1800&auto=format&fit=crop"
              labelBefore="Photo"
              labelAfter="3D Render"
            />
            <BeforeAfter
              before="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1800&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1800&auto=format&fit=crop"
              labelBefore="Photo"
              labelAfter="3D Render"
            />
            <BeforeAfter
              before="https://images.unsplash.com/photo-1553618578-3f3809d3b23b?q=80&w=1800&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1512446816042-444d6412672e?q=80&w=1800&auto=format&fit=crop"
              labelBefore="Studio"
              labelAfter="Lifestyle"
            />
            <BeforeAfter
              before="https://images.unsplash.com/photo-1596207498819-9cdf9b877bca?q=80&w=1800&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1603993097397-89bd04b2a1a6?q=80&w=1800&auto=format&fit=crop"
              labelBefore="Matte"
              labelAfter="Gloss + Highlights"
            />
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <Features />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        <p>© {new Date().getFullYear()} AI Photo → 3D Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
