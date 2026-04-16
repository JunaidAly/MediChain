import React, { useState } from 'react'
import { Phone, MapPin, PhoneCall, Mail } from 'lucide-react'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ firstName: '', lastName: '', email: '', message: '' })
  }

  return (
    <Layout>
      <Header title="Contact" icon={Phone} />

      <div className="flex-1 p-6 flex gap-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-6 w-64">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#EF444420' }}
            >
              <MapPin size={16} className="text-red-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Hospital address</p>
              <p className="text-gray-400 text-xs mt-0.5">123 street karachi,Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#9DEBFF20' }}
            >
              <PhoneCall size={16} style={{ color: '#9DEBFF' }} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Emergency call</p>
              <p className="text-xs mt-0.5" style={{ color: '#9DEBFF' }}>+92454600295305</p>
              <p className="text-gray-400 text-xs">Whatsapp 7677</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#EF444420' }}
            >
              <Mail size={16} className="text-red-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Email Support</p>
              <p className="text-gray-400 text-xs mt-0.5">Support@medi.chain</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 max-w-lg">
          <div
            className="rounded-2xl border border-brand-border p-6"
            style={{ background: '#0F1C31' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">First Name</label>
                  <input
                    type="text"
                    placeholder="ali"
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border"
                    style={{ background: '#152238', color: '#fff' }}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Last</label>
                  <input
                    type="text"
                    placeholder="Khan"
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border"
                    style={{ background: '#152238', color: '#fff' }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="ali@gmail.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border"
                  style={{ background: '#152238', color: '#fff' }}
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block">Message</label>
                <textarea
                  placeholder="your message here....."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border resize-none"
                  style={{ background: '#152238', color: '#fff' }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: '#9DEBFF', color: '#1A2A47' }}
              >
                {sent ? '✓ Message Sent!' : 'CONFIRM APPOINTMENT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
