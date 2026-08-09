import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Faq } from './components/Faq'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HomeIntro } from './components/HomeIntro'
import { Principles } from './components/Principles'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <Header />
      <main id="site-content">
        <HomeIntro />
        <Services />
        <Projects />
        <Principles />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
