'use client'

import { Star, Users, Trophy } from 'lucide-react'

export default function SocialProof() {
  const stats = [
    {
      icon: Star,
      value: '4.7',
      label: 'Star Rating',
      subtext: '500+ reviews',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Active Members',
      subtext: 'Growing daily',
    },
    {
      icon: Trophy,
      value: '8+',
      label: 'Years of Excellence',
      subtext: 'Industry leaders',
    },
  ]

  return (
    <section className="bg-surface py-10 px-4 border-y border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-[color:var(--color-accent-soft)] rounded-lg border border-line">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-semibold text-charcoal leading-none">{stat.value}</p>
                  <p className="text-sm text-charcoal font-medium mt-1">{stat.label}</p>
                  <p className="text-sm text-muted">{stat.subtext}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
