'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '₹3,999',
      period: '/month',
      description: 'Perfect for trying out our gym',
      popular: false,
      features: [
        'Unlimited gym access',
        'Access to all equipment',
        '2 personal training sessions/month',
        'Group fitness classes',
        'Mobile app access',
        'Basic nutrition guide',
      ],
    },
    {
      name: 'Quarterly',
      price: '₹10,499',
      period: '/3 months',
      description: 'Most popular - save 15%',
      popular: true,
      features: [
        'Unlimited gym access',
        'Access to all equipment',
        '4 personal training sessions/month',
        'Group fitness classes',
        'Mobile app access',
        'Personalized nutrition plan',
        'Progress tracking',
        'Priority support',
      ],
    },
    {
      name: 'Yearly',
      price: '₹39,999',
      period: '/year',
      description: 'Best value - save 25%',
      popular: false,
      features: [
        'Unlimited gym access',
        'Access to all equipment',
        '6 personal training sessions/month',
        'Group fitness classes',
        'Mobile app access',
        'Personalized nutrition plan',
        'Progress tracking',
        'Priority support',
        'Guest passes (2/month)',
        'Exclusive events access',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.24em] uppercase font-medium text-charcoal/60 mb-4">Pricing</p>
          <h2 className="font-display text-charcoal mb-4 text-balance">
            Transparent pricing, clear value.
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Choose a plan that fits your schedule. Simple inclusions, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 bg-surface border ${
                plan.popular
                  ? 'border-accent'
                  : 'border-line'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-xs tracking-[0.22em] uppercase font-medium">
                  Most popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <h3 className="font-display text-2xl text-charcoal mb-2">{plan.name}</h3>
                <p className="text-muted text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-semibold text-charcoal">{plan.price}</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3 rounded-md font-medium transition-colors text-center block mb-8 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent-hover text-white'
                      : 'border border-line text-charcoal hover:bg-paper'
                  }`}
                >
                  Book a tour
                </a>

                <div className="border-t border-line pt-8">
                  <p className="text-xs tracking-[0.22em] uppercase font-medium text-charcoal/60 mb-4">Includes</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal">
                        <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-charcoal text-white hover:bg-charcoal/90 rounded-md transition-colors font-medium"
          >
            Talk to a coach
          </a>
        </div>
      </div>
    </section>
  )
}
