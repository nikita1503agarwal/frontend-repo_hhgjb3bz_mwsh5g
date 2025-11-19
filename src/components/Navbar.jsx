import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-bold">B</span>
          <span className="text-slate-900 font-semibold text-lg">Bookkeepr</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#product" className="hover:text-slate-900 transition-colors">Product</a>
          <a href="#demo" className="hover:text-slate-900 transition-colors">Demo</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">Live Demo</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
