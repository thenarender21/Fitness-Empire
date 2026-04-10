'use client'

import { Dumbbell, Users, Heart, Zap, Brain, Utensils } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase your strength with our comprehensive strength training programs designed by certified professionals.',
      benefits: ['Progressive overload training', 'Custom workout plans', 'Advanced equipment'],
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'One-on-one training sessions with expert coaches to help you reach your specific fitness goals faster and safer.',
      benefits: ['Custom training plans', 'Personalized coaching', '100% accountability'],
    },
    {
      icon: Heart,
      title: 'Cardio & Conditioning',
      description: 'Improve your cardiovascular health and endurance with our state-of-the-art cardio equipment and group classes.',
      benefits: ['Modern cardio equipment', 'Group fitness classes', 'Heart health tracking'],
    },
    {
      icon: Zap,
      title: 'HIIT Programs',
      description: 'High-intensity interval training designed to maximize calorie burn and improve athletic performance in minimal time.',
      benefits: ['Time-efficient workouts', 'Maximum results', 'Expert instructors'],
    },
    {
      icon: Brain,
      title: 'Nutrition Coaching',
      description: 'Professional guidance on nutrition and diet to optimize your results and establish healthy eating habits.',
      benefits: ['Personalized meal plans', 'Nutritionist support', 'Lifestyle coaching'],
    },
    {
      icon: Utensils,
      title: 'Group Classes',
      description: 'Join energizing group fitness classes including yoga, spinning, pilates, and more in a supportive community.',
      benefits: ['Community atmosphere', 'Variety of classes', 'Scheduled sessions'],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 section-punch">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.24em] uppercase font-medium text-charcoal/60 mb-4">Programs</p>
          <h2 className="font-display text-charcoal mb-4 text-balance">
            Built for strength, conditioning, and consistency.
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Comprehensive fitness solutions tailored to your unique goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-surface border border-line rounded-xl p-8 hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="p-4 bg-[color:var(--color-accent-soft)] rounded-lg w-fit mb-6 group-hover:bg-[color:var(--color-accent-soft)] transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-display text-2xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">{service.description}</p>

                <div className="border-t border-line pt-6">
                  <p className="text-xs tracking-[0.22em] uppercase font-medium text-charcoal/60 mb-4">Key benefits</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-muted flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
