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
    <section id="services" className="py-20 px-4 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Our Premium <span className="text-red-primary">Services</span>
          </h2>
          <div className="h-1 w-20 bg-gold-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Comprehensive fitness solutions tailored to your unique goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-navy-900 border border-red-primary/20 rounded-xl p-8 hover:border-red-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-primary/20 group"
              >
                <div className="p-4 bg-red-primary/10 rounded-lg w-fit mb-6 group-hover:bg-red-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-red-primary" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-light mb-6 leading-relaxed">{service.description}</p>

                <div className="border-t border-red-primary/10 pt-6">
                  <p className="text-gold-primary font-semibold text-sm mb-4">Key Benefits:</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-light/80 flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold-primary rounded-full"></span>
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
