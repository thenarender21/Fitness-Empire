'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-paper flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Gym Environment"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-3/5 text-left animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-accent"></span>
            <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">
              Welcome to the Empire
            </p>
          </div>

          <h1 className="font-display text-ivory mb-6 leading-[1.1] text-5xl md:text-7xl font-bold">
            Thane's Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Fitness Gym.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            Escape the daily hustle. 10,000 sq ft of top-tier equipment and expert coaching right here in Thane. We provide the tools, you provide the hard work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="px-8 py-4 rounded bg-accent text-ivory hover:bg-accent-hover transition-all duration-300 font-medium text-base tracking-wide shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transform hover:-translate-y-1"
            >
              Start Your Journey
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 rounded border border-ivory/10 bg-ivory/5 hover:bg-ivory/10 backdrop-blur-sm transition-all duration-300 font-medium text-base text-ivory transform hover:-translate-y-1"
            >
              Explore Memberships
            </a>
          </div>

          {/* Hero Highlight */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl border-t border-ivory/10 pt-8">
            <div>
              <p className="text-3xl font-display font-bold text-ivory mb-1">500<span className="text-accent">+</span></p>
              <p className="text-sm text-muted">Active Members</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-ivory mb-1">24<span className="text-accent">/</span>7</p>
              <p className="text-sm text-muted">Facility Access</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl font-display font-bold text-ivory mb-1">Elite</p>
              <p className="text-sm text-muted">Personal Trainers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-muted text-xs uppercase tracking-widest group-hover:text-ivory transition-colors">Scroll</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </a>
      </div>
    </section>
  )
}
