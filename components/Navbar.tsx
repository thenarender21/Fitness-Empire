'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'The Standard', href: '#about' },
    { name: 'Arsenal', href: '#services' },
    { name: 'Evidence', href: '#gallery' },
    { name: 'Access', href: '#pricing' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-ivory/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="#" className="font-display tracking-widest text-2xl text-ivory uppercase font-bold hover:text-accent transition-colors flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-paper"></div>
            </div>
            <span>Fitness Empire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs tracking-widest uppercase font-semibold text-muted hover:text-accent transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded border border-accent text-accent hover:bg-accent hover:text-ivory transition-all duration-300 font-semibold text-xs tracking-wider uppercase"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-ivory/5 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted hover:text-accent transition-colors text-sm uppercase tracking-wider font-semibold py-3 border-b border-ivory/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="block w-full text-center px-4 py-4 bg-accent hover:bg-accent-hover text-ivory font-bold tracking-wider uppercase text-sm rounded transition-colors shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
