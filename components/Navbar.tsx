'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Programs', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Tour', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-surface/85 backdrop-blur border-b border-line z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="font-display tracking-tight text-xl text-charcoal hover:text-accent transition-colors">
            Fitness Empire
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-5 py-2 rounded-md bg-accent text-white hover:bg-accent-hover transition-colors font-medium"
            >
              Book a tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-surface border-t border-line">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-charcoal/80 hover:text-charcoal transition-colors text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a tour
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
