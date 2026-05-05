'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-surface relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">Take Action</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-6 text-4xl md:text-5xl font-bold">
            Your Move.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Drop your details below. One of our elite coaches will reach out to discuss your goals and schedule a private facility tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-3xl text-ivory mb-8 font-semibold">Headquarters</h3>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 bg-paper border border-ivory/5 rounded-xl h-fit group-hover:border-accent/30 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ivory mb-2">Location</h4>
                <p className="text-muted leading-relaxed">
                  Manorama Nagar Rd, opposite state bank of India<br />
                  Dokali Pada, Dhokali, Thane West<br />
                  Thane, Maharashtra 400607
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 bg-paper border border-ivory/5 rounded-xl h-fit group-hover:border-accent/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ivory mb-2">Direct Line</h4>
                <a
                  href="tel:09773329211"
                  className="text-muted hover:text-accent transition-colors font-medium"
                >
                  097733 29211
                </a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 bg-paper border border-ivory/5 rounded-xl h-fit group-hover:border-accent/30 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ivory mb-2">Email</h4>
                <a
                  href="mailto:elite@fitnessempire.com"
                  className="text-muted hover:text-accent transition-colors font-medium"
                >
                  elite@fitnessempire.com
                </a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 bg-paper border border-ivory/5 rounded-xl h-fit group-hover:border-accent/30 transition-colors">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ivory mb-2">Hours of Operation</h4>
                <p className="text-muted leading-relaxed">
                  Monday - Saturday: 5:30 AM - 10:30 PM<br />
                  Sunday: 8:00 AM - 1:00 PM<br />
                  <span className="text-accent font-semibold mt-2 block">24/7 Keycard Access for Members</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-paper/80 backdrop-blur-md rounded-2xl p-10 border border-ivory/5 shadow-2xl relative">
            <h3 className="font-display text-3xl text-ivory mb-8 font-semibold">Initiate Contact</h3>

            {submitted && (
              <div className="mb-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
                <p className="text-accent font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message received. A coach will be in touch shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-ivory/80 font-medium mb-2 text-sm uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-surface border border-ivory/10 text-ivory rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ivory/80 font-medium mb-2 text-sm uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-surface border border-ivory/10 text-ivory rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-ivory/80 font-medium mb-2 text-sm uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-surface border border-ivory/10 text-ivory rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-ivory/80 font-medium mb-2 text-sm uppercase tracking-wider">Your Goal</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-surface border border-ivory/10 text-ivory rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us what you want to achieve..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 mt-4 bg-accent hover:bg-accent-hover text-ivory font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] transform hover:-translate-y-1"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
