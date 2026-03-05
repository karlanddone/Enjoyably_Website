import { MainLayout } from './components/layout/MainLayout'
import { HeroSection } from './components/sections/HeroSection'
import { EcosystemShowcase } from './components/sections/EcosystemShowcase'

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <EcosystemShowcase />
    </MainLayout>
  )
}

export default App
