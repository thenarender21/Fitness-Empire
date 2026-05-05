'use client'

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'The Standard', href: '#about' },
    { name: 'Arsenal', href: '#services' },
    { name: 'Evidence', href: '#gallery' },
    { name: 'Access', href: '#pricing' },
    { name: 'Initiate Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-surface border-t border-ivory/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display tracking-widest text-3xl text-ivory uppercase font-bold flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-paper"></div>
              </div>
              <span>Empire</span>
            </div>
            <p className="text-muted leading-relaxed mb-8">
              More than a gym. A standard of excellence. We provide the tools, you provide the work.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-paper border border-ivory/5 text-muted rounded-xl hover:bg-accent hover:border-accent hover:text-ivory transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold text-ivory mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-accent group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold text-ivory mb-8">Headquarters</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-paper border border-ivory/5 rounded-lg text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-1 font-semibold">Direct Line</p>
                  <a href="tel:09773329211" className="text-ivory hover:text-accent transition-colors font-medium">
                    097733 29211
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-paper border border-ivory/5 rounded-lg text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-1 font-semibold">Email</p>
                  <a href="mailto:elite@fitnessempire.com" className="text-ivory hover:text-accent transition-colors font-medium break-all">
                    elite@fitnessempire.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 sm:col-span-2">
                <div className="p-3 bg-paper border border-ivory/5 rounded-lg text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-1 font-semibold">Location</p>
                  <span className="text-ivory">
                    Manorama Nagar Rd, opposite state bank of India, Dokali Pada, Dhokali, Thane West, Thane, Maharashtra 400607
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-line py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm font-medium">
              © {currentYear} Fitness Empire. Built for Thane.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-muted hover:text-accent text-sm font-medium transition-colors">
                Privacy Protocol
              </a>
              <a href="#" className="text-muted hover:text-accent text-sm font-medium transition-colors">
                Terms of Membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
