'use client'

import { Dumbbell, Users, Heart, Zap, Brain, Utensils } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength & Hypertrophy',
      description: 'Science-backed programming to build raw strength and lean muscle mass. No fluff, just results.',
      benefits: ['Progressive overload training', 'Form correction', 'Elite equipment'],
    },
    {
      icon: Users,
      title: 'Private Coaching',
      description: 'One-on-one sessions with our elite trainers who will reverse-engineer your goals into a daily action plan.',
      benefits: ['Custom macro tracking', 'Daily accountability', 'Performance tracking'],
    },
    {
      icon: Heart,
      title: 'Athletic Conditioning',
      description: 'Push your engine to the limit. Cardiovascular training designed for real-world stamina and heart health.',
      benefits: ['VO2 Max improvement', 'Endurance building', 'Heart rate tracking'],
    },
    {
      icon: Zap,
      title: 'High-Intensity Output',
      description: 'Short, brutal, effective. Maximize caloric burn and test your mental toughness in our HIIT circuits.',
      benefits: ['Time-efficient', 'Metabolic conditioning', 'Mental resilience'],
    },
    {
      icon: Brain,
      title: 'Performance Nutrition',
      description: 'You cannot out-train a bad diet. Get a sustainable nutritional framework tailored to your exact metabolic needs.',
      benefits: ['Custom meal prep guides', 'Supplement protocols', 'Habit building'],
    },
    {
      icon: Utensils,
      title: 'Small Group Training',
      description: 'The intensity of private coaching with the energy of a pack. Train alongside individuals who match your drive.',
      benefits: ['Competitive atmosphere', 'Capped class sizes', 'Team accountability'],
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-paper relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">Our Arsenal</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-6 text-4xl md:text-5xl font-bold">
            Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Transformation.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We don't do gimmicks. We offer proven systems designed to break plateaus and forge the strongest version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-surface/50 backdrop-blur-sm border border-line rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(217,119,6,0.1)] relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="p-4 bg-paper border border-line rounded-xl w-fit mb-8 group-hover:border-accent/30 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="font-display text-2xl text-ivory mb-4 font-semibold group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted mb-8 leading-relaxed h-24">{service.description}</p>

                  <div className="pt-6 border-t border-line">
                    <p className="text-xs tracking-[0.2em] uppercase font-semibold text-ivory mb-5">Core Benefits</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-muted flex items-center gap-3 text-sm">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
