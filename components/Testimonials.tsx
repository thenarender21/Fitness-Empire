'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tejaswini Kalkeri',
      time: '3 months ago',
      initial: 'T',
      color: 'bg-emerald-950 border-emerald-800 text-emerald-400',
      text: 'This is my first gym experience compared to others, and it’s amazing. The space is very large, the environment is lively, and they celebrate events regularly. The training is excellent—my trainer Vaibhav sir is one of the best. Even the female trainers are very supportive.',
      rating: 5,
    },
    {
      name: 'Prajakta Rokade',
      time: '6 months ago',
      initial: 'P',
      color: 'bg-blue-950 border-blue-800 text-blue-400',
      text: 'Fitness Empire is truly one of the best gyms I’ve been to. The facility is clean, well-maintained, and fully equipped. The trainers are highly qualified and genuinely care about your progress.',
      rating: 5,
    },
    {
      name: 'Aasawari Sawant',
      time: '3 months ago',
      initial: 'A',
      color: 'bg-purple-950 border-purple-800 text-purple-400',
      text: 'Fitness Empire is not just a gym—it feels like family. Events like Haldi Kumkum and Women’s Day celebrations make it special. We always have fun and stay motivated. Thanks to Sandeep sir, Rupesh sir, Admin Poonam, and all the instructors.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">The Evidence</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-6 text-4xl md:text-5xl font-bold">
            Forged in the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Empire.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-paper p-10 rounded-2xl border border-ivory/5 relative group"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-6 text-ivory/5 font-serif text-8xl leading-none pointer-events-none group-hover:text-accent/5 transition-colors duration-500">
                "
              </div>

              <div className="flex gap-1 mb-8 relative z-10">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted mb-10 leading-relaxed relative z-10 text-lg">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 border-t border-line pt-6 relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${testimonial.color} text-2xl font-bold font-display`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-ivory font-display text-lg">{testimonial.name}</p>
                  <p className="text-accent text-sm font-medium">{testimonial.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-y border-line py-12">
          <div className="p-4">
            <p className="text-5xl font-display font-bold text-ivory mb-2">4.7<span className="text-accent text-3xl">★</span></p>
            <p className="text-muted uppercase tracking-wider text-sm font-semibold">Average Rating</p>
          </div>
          <div className="p-4 md:border-x md:border-line">
            <p className="text-5xl font-display font-bold text-ivory mb-2">415<span className="text-accent">+</span></p>
            <p className="text-muted uppercase tracking-wider text-sm font-semibold">Happy Members</p>
          </div>
          <div className="p-4">
            <p className="text-5xl font-display font-bold text-ivory mb-2">98<span className="text-accent">%</span></p>
            <p className="text-muted uppercase tracking-wider text-sm font-semibold">Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
