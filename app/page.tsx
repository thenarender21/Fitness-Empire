import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      <StickyWhatsAppButton />
    </main>
  )
}
