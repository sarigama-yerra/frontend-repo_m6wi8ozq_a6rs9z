import React from 'react'

function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] backdrop-blur p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to transform your product visuals?
          </h2>
          <p className="mt-3 text-slate-300">
            Join the waitlist for early access and bespoke onboarding.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              placeholder="you@brand.com"
              className="w-full sm:w-80 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40"
            />
            <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition">
              Join waitlist
            </button>
          </form>
          <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
