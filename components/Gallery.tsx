'use client'

import Image from 'next/image'

export default function Gallery() {
  const galleryImages = [
    { src: '/images/gallery-1.jpg', title: 'Strength Training Zone' },
    { src: '/images/gallery-2.jpg', title: 'Cardio Equipment' },
    { src: '/images/gallery-3.jpg', title: 'Free Weights Area' },
    { src: '/images/gallery-4.jpg', title: 'Group Fitness Classes' },
    { src: '/images/gallery-5.jpg', title: 'Personal Training' },
    { src: '/images/gallery-6.jpg', title: 'Lounge Area' },
    { src: '/images/gallery-7.jpg', title: 'Recovery Zone' },
    { src: '/images/gallery-8.jpg', title: 'Community Events' },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Explore Our <span className="text-gold-primary">Facilities</span>
          </h2>
          <div className="h-1 w-20 bg-red-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Tour our state-of-the-art gym facilities and see what awaits you at Fitness Empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer border border-red-primary/20 hover:border-red-primary/60 transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-lg">{image.title}</p>
              </div>
              <div className="absolute inset-0 bg-red-primary/0 group-hover:bg-red-primary/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-light text-lg mb-6">
            Want to experience these facilities firsthand? Schedule a tour today!
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-red-primary hover:bg-red-dark text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Tour
          </a>
        </div>
      </div>
    </section>
  )
}
