import Hero from './components/Hero'
import Transformation from './components/Transformation'
import HowItWorks from './components/HowItWorks'
import Workflow from './components/Workflow'
import PerfectFor from './components/PerfectFor'
import Features from './components/Features'
import StartCreating from './components/StartCreating'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Transformation />
      <HowItWorks />
      <Workflow />
      <PerfectFor />
      <Features />
      <StartCreating />
      <Footer />
    </main>
  )
}

