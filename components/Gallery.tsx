'use client'

import Image from 'next/image'

export default function Gallery() {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', title: 'Strength Training Zone' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop', title: 'Free Weights Area' },
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', title: 'Cardio Deck' },
    { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', title: 'Functional Space' },
    { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop', title: 'Squat Racks' },
    { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop', title: 'Recovery Zone' },
    { src: 'https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=800&auto=format&fit=crop', title: 'Group Training' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&w=800&auto=format&fit=crop', title: 'Locker Rooms' },
  ]

  return (
    <section id="gallery" className="py-24 px-4 bg-paper relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
             <span className="w-8 h-[2px] bg-accent"></span>
             <p className="text-xs tracking-[0.3em] uppercase font-semibold text-accent">The Facility</p>
             <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="font-display text-ivory mb-6 text-4xl md:text-5xl font-bold">
            Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Empire.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            10,000 square feet of uncompromised iron, turf, and top-tier machinery. 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-72 rounded-xl overflow-hidden group cursor-pointer border border-ivory/5 bg-surface/50"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal opacity-80 group-hover:opacity-100"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-ivory font-display font-semibold text-lg">{image.title}</p>
                <div className="h-0.5 w-0 bg-accent group-hover:w-12 transition-all duration-300 mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted text-lg mb-8">
            Pictures don't do it justice. Come feel the energy.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-ivory font-semibold tracking-wider uppercase text-sm rounded transition-all duration-300"
          >
            Book a Free Tour
          </a>
        </div>
      </div>
    </section>
  )
}
