import React from 'react'
import Customer from './components/customer/Customer'
import Experience from './components/experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Writing from './components/writing/Writing'

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Writing />
      <Customer />
    </div>
  )
}

export default App