'use client'

import { MessageCircle } from 'lucide-react'

export default function StickyWhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hi%20Fitness%20Empire%2C%20I%27m%20interested%20in%20joining%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 hover:bg-green-600 text-ivory rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow hover:animate-none"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
