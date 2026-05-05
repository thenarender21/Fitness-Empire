'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '₹3,999',
      period: '/month',
      description: 'Commit to 30 days of excellence.',
      popular: false,
      features: [
        'Unrestricted facility access',
        'State-of-the-art equipment',
        '2 Personal Training sessions',
        'Group training access',
        'App-based progress tracking',
      ],
    },
    {
      name: 'Quarterly',
      price: '₹10,499',
      period: '/3 months',
      description: 'The proven 90-day transformation.',
      popular: true,
      features: [
        'Unrestricted facility access',
        'State-of-the-art equipment',
        '4 Personal Training sessions/mo',
        'Group training access',
        'Custom nutrition framework',
        'Bi-weekly check-ins',
        'Priority coaching support',
      ],
    },
    {
      name: 'Annual',
      price: '₹39,999',
      period: '/year',
      description: 'For those who never stop.',
      popular: false,
      features: [
        'Unrestricted facility access',
        'State-of-the-art equipment',
        '6 Personal Training sessions/mo',
        'Group training access',
        'Custom nutrition framework',
        'Weekly accountability check-ins',
        'Priority coaching support',
        '2 Guest passes/mo',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">Invest in yourself</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-4 text-4xl md:text-5xl font-bold">
            Transparent Memberships. <br/>
            <span className="text-muted text-3xl md:text-4xl">Zero Hidden Fees.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
            Choose the commitment that matches your ambition. We provide the tools, you provide the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 bg-surface/80 backdrop-blur-md ${
                plan.popular
                  ? 'border border-accent shadow-[0_0_40px_rgba(217,119,6,0.15)] md:-translate-y-4 md:scale-105'
                  : 'border border-ivory/5 hover:border-ivory/20 hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accent-hover text-ivory text-center py-2 text-xs tracking-[0.22em] uppercase font-bold shadow-md z-10">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''} relative z-0`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
                )}
                
                <h3 className="font-display text-2xl text-ivory mb-2 font-semibold relative z-10">{plan.name}</h3>
                <p className="text-muted text-sm mb-8 relative z-10">{plan.description}</p>

                <div className="mb-8 relative z-10 flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold text-ivory">{plan.price}</span>
                  <span className="text-muted text-sm font-medium">{plan.period}</span>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded font-semibold tracking-wide uppercase text-sm transition-all duration-300 text-center block mb-8 relative z-10 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent-hover text-ivory shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]'
                      : 'bg-ivory/5 border border-ivory/10 text-ivory hover:bg-ivory/10'
                  }`}
                >
                  Join the Empire
                </a>

                <div className="border-t border-line pt-8 relative z-10">
                  <p className="text-xs tracking-[0.2em] uppercase font-semibold text-ivory mb-5">Membership Includes</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted">
                        <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
