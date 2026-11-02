

import { NaveBar } from './Pages/NaveBar'
import Home from './Pages/Header'
import How_It_Work from './Pages/How_It_Work'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import Whowitfor from './Pages/WhoItFor'
import FAQ from './Pages/FAQ'
import Footer from './Pages/Footer'
import SectionSideNav from './Pages/SectionSideNav'

export const App = () => {
  return (
    <>
      <NaveBar />
      <SectionSideNav />
      <main>
        <Home />
        <How_It_Work />
        <Features />
        <Whowitfor />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
