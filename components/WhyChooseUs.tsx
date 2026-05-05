'use client'

import { CheckCircle, Award, Clock, Users, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'World-Class Expertise',
      description: 'Our coaching staff is hand-picked. Internationally certified, constantly educating themselves, and proven by results.',
    },
    {
      icon: Clock,
      title: 'Unrestricted Access',
      description: 'Your goals don\'t care about business hours. Train 24/7 in a secure, fully-equipped environment.',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'We don\'t guess. We track metrics, adjust protocols, and guarantee measurable progression.',
    },
    {
      icon: Users,
      title: 'An Elite Circle',
      description: 'Surround yourself with individuals who demand more from themselves. The energy here is contagious.',
    },
    {
      icon: CheckCircle,
      title: 'Uncompromised Standards',
      description: 'Immaculate facilities. Top-tier machinery. We handle the environment; you handle the work.',
    },
  ]

  return (
    <section id="why-us" className="py-24 px-4 bg-surface relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">The Thane Standard</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-4 text-4xl md:text-5xl font-bold">
            Built for those who <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Refuse to Settle.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We removed the distractions so you can focus entirely on your progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex flex-col gap-6 p-8 bg-paper/50 backdrop-blur-md rounded-2xl border border-ivory/5 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-surface border border-ivory/5 group-hover:border-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl text-ivory mb-3 font-semibold">{benefit.title}</h3>
                  <p className="text-muted leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-16 bg-gradient-to-b from-surface to-paper rounded-2xl border border-ivory/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5"></div>
          <div className="relative z-10">
            <h3 className="font-display text-4xl text-ivory mb-6 font-bold">Ready to Elevate Your Standard?</h3>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
              Join the ranks of those who have already claimed their power at Fitness Empire. Your evolution starts today.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-hover text-ivory font-semibold tracking-wider uppercase text-sm rounded transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transform hover:-translate-y-1"
            >
              Secure Your Spot
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
