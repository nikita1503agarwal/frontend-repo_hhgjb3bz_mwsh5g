import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span> AI-powered bookkeeping
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Automate bookkeeping from invoice to bank reconciliation
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We extract key details from invoices, categorize spend, and match payments to bank transactions so your books stay accurate—automatically.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Try the live demo</a>
            <a href="#features" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">Explore features</a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            SOC2-ready • GDPR compliant • Bank-grade security
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/50 to-cyan-200/50 blur-2xl rounded-3xl"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-4">
              <img src="/dashboard-mock.png" alt="Dashboard" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
