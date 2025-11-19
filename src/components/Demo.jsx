import React, { useEffect, useState } from 'react'

const Demo = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const [invoices, setInvoices] = useState([])
  const [txns, setTxns] = useState([])
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    invoice_number: '',
    vendor_name: '',
    invoice_date: '',
    total: ''
  })
  const [txnForm, setTxnForm] = useState({
    description: '',
    date: '',
    amount: ''
  })

  const fetchAll = async () => {
    const [i, t] = await Promise.all([
      fetch(`${baseUrl}/invoices`).then(r => r.json()),
      fetch(`${baseUrl}/bank-transactions`).then(r => r.json())
    ])
    setInvoices(i)
    setTxns(t)
  }

  useEffect(() => { fetchAll() }, [])

  const createInvoice = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/invoices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          currency: 'USD'
        })
      })
      await res.json()
      await fetchAll()
      setForm({ invoice_number: '', vendor_name: '', invoice_date: '', total: '' })
    } finally { setLoading(false) }
  }

  const createTxn = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/bank-transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...txnForm,
          amount: parseFloat(txnForm.amount),
          currency: 'USD'
        })
      })
      await res.json()
      await fetchAll()
      setTxnForm({ description: '', date: '', amount: '' })
    } finally { setLoading(false) }
  }

  const runMatch = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/match`, { method: 'POST' })
      const data = await res.json()
      setMatches(data)
    } finally { setLoading(false) }
  }

  return (
    <section id="demo" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Live demo</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">Add a sample invoice and a bank transaction, then run the matcher to see suggested links.</p>

        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900">Add Invoice</h3>
            <form onSubmit={createInvoice} className="mt-4 space-y-3">
              <input className="w-full border rounded px-3 py-2" placeholder="Invoice #" value={form.invoice_number} onChange={e=>setForm({...form, invoice_number: e.target.value})} required />
              <input className="w-full border rounded px-3 py-2" placeholder="Vendor" value={form.vendor_name} onChange={e=>setForm({...form, vendor_name: e.target.value})} required />
              <input type="date" className="w-full border rounded px-3 py-2" value={form.invoice_date} onChange={e=>setForm({...form, invoice_date: e.target.value})} required />
              <input type="number" step="0.01" className="w-full border rounded px-3 py-2" placeholder="Total" value={form.total} onChange={e=>setForm({...form, total: e.target.value})} required />
              <button disabled={loading} className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Save</button>
            </form>
            <div className="mt-4 text-sm text-slate-600">Recent invoices</div>
            <ul className="mt-2 space-y-2 max-h-40 overflow-auto">
              {invoices.map(i => (
                <li key={i._id} className="text-sm flex justify-between bg-slate-50 rounded px-3 py-2">
                  <span>{i.invoice_number} • {i.vendor_name}</span>
                  <span>${Number(i.total).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900">Add Bank Transaction</h3>
            <form onSubmit={createTxn} className="mt-4 space-y-3">
              <input className="w-full border rounded px-3 py-2" placeholder="Description" value={txnForm.description} onChange={e=>setTxnForm({...txnForm, description: e.target.value})} required />
              <input type="date" className="w-full border rounded px-3 py-2" value={txnForm.date} onChange={e=>setTxnForm({...txnForm, date: e.target.value})} required />
              <input type="number" step="0.01" className="w-full border rounded px-3 py-2" placeholder="Amount (use positive for payment)" value={txnForm.amount} onChange={e=>setTxnForm({...txnForm, amount: e.target.value})} required />
              <button disabled={loading} className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Save</button>
            </form>
            <div className="mt-4 text-sm text-slate-600">Recent transactions</div>
            <ul className="mt-2 space-y-2 max-h-40 overflow-auto">
              {txns.map(t => (
                <li key={t._id} className="text-sm flex justify-between bg-slate-50 rounded px-3 py-2">
                  <span>{t.description}</span>
                  <span>${Number(t.amount).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900">Match</h3>
            <p className="text-sm text-slate-600">We look for amount matches and date proximity to propose links.</p>
            <button onClick={runMatch} disabled={loading} className="mt-4 w-full bg-emerald-600 text-white rounded px-4 py-2 hover:bg-emerald-700">Run matcher</button>
            <ul className="mt-4 space-y-2 max-h-80 overflow-auto">
              {matches.map(m => (
                <li key={m.invoice_number + m.bank_transaction_id} className="text-sm bg-emerald-50 border border-emerald-200 rounded px-3 py-2">
                  <div className="font-medium text-emerald-900">Invoice {m.invoice_number}</div>
                  <div className="text-emerald-800">Matched bank record {m.bank_transaction_id}</div>
                  <div className="text-emerald-700">Confidence: {(m.confidence*100).toFixed(0)}%</div>
                  {m.reason && <div className="text-emerald-700">{m.reason}</div>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
