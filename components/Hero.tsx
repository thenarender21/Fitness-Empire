'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-paper flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/85 to-paper"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-fade-in">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase font-medium text-charcoal/70 mb-6">
            Mumbai • Premium Training • Busy-Friendly Timings
          </p>

          <h1 className="font-display text-charcoal mb-6 leading-[1.02] text-balance">
            Raw energy. <span className="text-accent">Professional</span> results.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            A high-performance gym built for beginners and busy professionals — structured programs, expert coaching, and clear pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-accent text-white hover:bg-accent-hover transition-colors font-medium text-base"
            >
              Book a tour
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-md border border-line bg-surface/70 hover:bg-surface transition-colors font-medium text-base text-charcoal"
            >
              View pricing
            </a>
          </div>

          {/* Hero Highlight */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="bg-surface/70 border border-line rounded-lg px-5 py-4">
              <p className="text-sm text-charcoal font-medium">Trusted by 500+ members</p>
              <p className="text-xs text-muted mt-1">Community-first coaching</p>
            </div>
            <div className="bg-surface/70 border border-line rounded-lg px-5 py-4">
              <p className="text-sm text-charcoal font-medium">4.7★ average rating</p>
              <p className="text-xs text-muted mt-1">Proven programs</p>
            </div>
            <div className="bg-surface/70 border border-line rounded-lg px-5 py-4">
              <p className="text-sm text-charcoal font-medium">Beginner-friendly</p>
              <p className="text-xs text-muted mt-1">Structured onboarding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted text-sm">Scroll</p>
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
