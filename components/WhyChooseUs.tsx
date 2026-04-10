'use client'

import { CheckCircle, Award, Clock, Users, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Certified Trainers',
      description: 'Our team consists of internationally certified fitness professionals with years of hands-on experience.',
    },
    {
      icon: Clock,
      title: '24/7 Access & Flexibility',
      description: 'Work out on your schedule with 24/7 facility access. We fit your lifestyle, not the other way around.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our members see measurable results within weeks. Join 500+ members who have transformed their bodies.',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Be part of a welcoming, inclusive community that motivates and supports your fitness journey.',
    },
    {
      icon: CheckCircle,
      title: 'Premium Facilities',
      description: 'State-of-the-art equipment, spotless facilities, and a motivating atmosphere designed for success.',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 section-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.24em] uppercase font-medium text-charcoal/60 mb-4">Why us</p>
          <h2 className="font-display text-charcoal mb-4 text-balance">
            Designed for consistency — not motivation.
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Professional coaching, flexible access, and an environment that keeps you moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-paper rounded-xl border border-line hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[color:var(--color-accent-soft)] transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl text-charcoal mb-2">{benefit.title}</h3>
                  <p className="text-muted leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-12 bg-charcoal rounded-xl">
          <h3 className="font-display text-3xl text-white mb-4">Ready to Transform Your Life?</h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have already achieved their fitness goals at Fitness Empire.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium text-base rounded-md transition-colors"
          >
            Book a tour
          </a>
        </div>
      </div>
    </section>
  )
}
