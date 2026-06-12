// src/App.jsx
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import Philosophy from './components/Philosophy.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Services from './components/Services.jsx'
import ContactFooter from './components/ContactFooter.jsx'
// import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Staff from './components/Staff.jsx'
import Appointment from './components/Appointment.jsx'

function App() {
  return (
    <>
      {/* Usamos el color de fondo genérico configurado */}
      <main className="w-full min-h-screen font-sans bg-gray-50">
        <Navbar />
        <Hero />
        <ProblemSection />
        <WhyChooseUs />
        <Services />
        <Appointment />
        <ContactFooter />
        {/* Aquí iremos habilitando las secciones a medida que las refactorizamos
        <Philosophy />
        <Staff />
        */}
      </main>
      

      {/* <FloatingWhatsApp /> */}
    </>
  )
}

export default App
