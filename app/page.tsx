import Features from './comps/Features'
import Footer from './comps/Footer'
import Hero from './comps/Hero'
import Numbers from './comps/Numbers'

export default function Home() {
  return (
    <main>
      <Hero />
      <Numbers number='01' marginBottom='mb-20 tablet:mb-16' />
      <Features />
      <Numbers number='02' translateY='translate-y-7' />
      <Footer />
    </main>
  )
}
