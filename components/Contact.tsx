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
    <section id="contact" className="py-20 px-4 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.24em] uppercase font-medium text-charcoal/60 mb-4">Book a tour</p>
          <h2 className="font-display text-charcoal mb-4 text-balance">
            Visit the gym. Meet the coaches.
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Tell us your goal and preferred time — we’ll confirm your tour and share the best plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-8">Contact</h3>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-surface border border-line rounded-lg h-fit">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-charcoal mb-2">Location</h4>
                <p className="text-muted leading-relaxed">
                  123 Fitness Street<br />
                  Gym District, City 12345<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-surface border border-line rounded-lg h-fit">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-charcoal mb-2">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-charcoal hover:text-accent transition-colors text-lg font-medium"
                >
                  +1 (234) 567-890
                </a>
                <p className="text-muted text-sm mt-1">Available during business hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-surface border border-line rounded-lg h-fit">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-charcoal mb-2">Email</h4>
                <a
                  href="mailto:hello@fitnessempire.com"
                  className="text-charcoal hover:text-accent transition-colors"
                >
                  hello@fitnessempire.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-surface border border-line rounded-lg h-fit">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-charcoal mb-2">Hours</h4>
                <p className="text-muted">
                  Monday - Friday: 5:00 AM - 11:00 PM<br />
                  Saturday - Sunday: 6:00 AM - 10:00 PM<br />
                  <span className="text-charcoal font-medium">24/7 Member Access</span>
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890?text=Hi%20Fitness%20Empire%2C%20I%27m%20interested%20in%20joining%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal hover:bg-charcoal/90 text-white font-medium rounded-md transition-colors mt-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.533.867-2.582 2.112-2.82 3.506-.238 1.394.068 2.887.71 4.117.19.442.424 1.025.928 1.529.438.438 1.088.778 1.529.982.663.304 1.428.408 2.165.408.552 0 1.1-.082 1.629-.248 1.486-.38 2.744-1.198 3.374-2.473.32-.647.484-1.42.484-2.236 0-.955-.23-1.852-.768-2.555-.538-.703-1.386-1.266-2.4-1.506-.622-.15-1.293-.158-1.98.038" />
              </svg>
              WhatsApp us to book
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-xl p-8 border border-line">
            <h3 className="font-display text-2xl text-charcoal mb-6">Request a tour</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-[color:var(--color-accent-soft)] border border-line rounded-lg">
                <p className="text-charcoal font-medium">Thank you — we&apos;ll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-charcoal font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-line text-charcoal rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-line text-charcoal rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-line text-charcoal rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Goal</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-line text-charcoal rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your goal, preferred time, and any questions…"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
              >
                Submit request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
