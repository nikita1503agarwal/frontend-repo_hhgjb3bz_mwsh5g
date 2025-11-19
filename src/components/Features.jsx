import React from 'react'

const features = [
  {
    title: 'Invoice AI extraction',
    desc: 'Upload PDFs or forward emails; we parse vendor, amounts, dates, and line items in seconds.',
  },
  {
    title: 'Smart categorization',
    desc: 'Our model learns your chart of accounts and auto-categorizes transactions with explainability.',
  },
  {
    title: 'Bank matching',
    desc: 'We automatically match invoice payments to bank transactions with confidence scoring.',
  },
  {
    title: 'Approvals & workflows',
    desc: 'Configurable rules, multi-step approvals, and audit trails keep you in control.',
  },
  {
    title: 'Real-time dashboards',
    desc: 'Track payables, outstanding invoices, and cash impact all in one place.',
  },
  {
    title: 'Secure & compliant',
    desc: 'SOC2-ready, GDPR compliant, SSO, and bank-grade encryption for your data.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Built for modern finance teams</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">Automate the boring parts so you can focus on what matters: insights and decisions.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:shadow transition">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
