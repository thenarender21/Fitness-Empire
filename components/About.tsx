'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-surface relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-line to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
              alt="Personal Trainer guiding a member"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-paper/80 backdrop-blur-md rounded-xl border border-ivory/5">
              <p className="text-xl text-ivory font-display font-medium italic">
                "We don't just build bodies; we build unbreakable mindsets."
              </p>
              <p className="text-accent text-sm mt-2 font-semibold uppercase tracking-wider">— The Empire Team</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-accent"></span>
                <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">
                  The Empire Standard
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory mb-6 leading-tight">
                More Than a Gym. <br/>
                <span className="text-muted text-3xl md:text-4xl">It's a Community.</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                In a busy city like Thane, you need a place to focus on yourself. We got tired of commercial gyms that treat you like a number. At Fitness Empire, we know your name, we know your goals, and we support you.
              </p>
              <p className="text-lg text-muted leading-relaxed mt-4">
                Whether you want to lose weight, build strength, or just stay healthy, our expert coaches and clean facility are here for you. We provide the best equipment, you provide the hard work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-line">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-paper flex items-center justify-center flex-shrink-0 border border-line">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-ivory font-bold mb-1">Elite Coaching</h3>
                  <p className="text-sm text-muted">Certified experts who live and breathe fitness.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-paper flex items-center justify-center flex-shrink-0 border border-line">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-ivory font-bold mb-1">Premium Facility</h3>
                  <p className="text-sm text-muted">Top-tier equipment maintained to perfection.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <a href="#services" className="inline-flex items-center gap-2 text-accent font-medium hover:text-ivory transition-colors group">
                 Discover our services
                 <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
