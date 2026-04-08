'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '$49',
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
      price: '$129',
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
      price: '$499',
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
    <section id="pricing" className="py-20 px-4 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Transparent <span className="text-red-primary">Pricing</span>
          </h2>
          <div className="h-1 w-20 bg-gold-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-red-primary shadow-2xl shadow-red-primary/30 scale-105 md:scale-100'
                  : 'border border-red-primary/20'
              } hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-primary text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-navy-700 pt-14' : 'bg-navy-900'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-light/70 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-gold-primary">{plan.price}</span>
                  <span className="text-gray-light text-sm">{plan.period}</span>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 text-center block mb-8 ${
                    plan.popular
                      ? 'bg-red-primary hover:bg-red-dark text-white transform hover:scale-105'
                      : 'border-2 border-red-primary text-red-primary hover:bg-red-primary/10'
                  }`}
                >
                  Get Started
                </a>

                <div className="border-t border-red-primary/20 pt-8">
                  <p className="text-gold-primary font-semibold text-sm mb-4">Features:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-light">
                        <Check size={20} className="text-red-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
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
          <p className="text-gray-light text-lg mb-6">
            Not sure which plan is right for you? Schedule a consultation with our fitness experts!
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gold-primary hover:bg-gold-dark text-navy-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
