import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Doctors from "./components/Doctors"
import Booking from "./components/Booking"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import { useScrollAnimation } from "./hooks/useScrollAnimation"
import './App.css'

function App() {
  useScrollAnimation()

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Doctors />
      <Booking />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App