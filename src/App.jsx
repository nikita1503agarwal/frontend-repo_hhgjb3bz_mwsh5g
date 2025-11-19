import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  )
}

export default App
