import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, Bell, Heart, Calendar } from 'lucide-react'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Header title="Dashboard" icon={LayoutDashboard} />

      <div className="flex-1 flex gap-8 px-8 py-6" style={{ minHeight: 0 }}>

        {/* Left Column — hero text top, buttons bottom */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Hero Text */}
          <div className="pt-2">
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ fontSize: '3.6rem', lineHeight: 1.08 }}
            >
              <span className="text-white">Next Gen</span><br />
              <span style={{ color: '#9DEBFF' }}>Healthcare</span><br />
              <span className="text-white">Trusted &amp;</span><br />
              <span className="text-white">Secure.</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the future of medical care with tamper-proof records,
              top-tier specialists, and seamless appointments powered by blockchain
              technology.
            </p>
          </div>

          {/* Buttons — pinned to bottom */}
          <div className="flex gap-4 pb-2">
            <button
              onClick={() => navigate('/appointment')}
              className="px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{ borderColor: '#9DEBFF', color: '#9DEBFF' }}
            >
              Book Appointment
            </button>
            <button
              onClick={() => navigate('/how-it-works')}
              className="px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 hover:border-brand-accent hover:text-brand-accent"
              style={{ borderColor: '#4a6080', color: '#c4d4e8' }}
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Right Column — Doctor Card */}
        <div className="w-60 flex items-center">
          <div
            className="w-full rounded-2xl overflow-hidden border"
            style={{ background: '#1A3560', borderColor: '#2A4A7A' }}
          >
            {/* Doctor Profile Row */}
            <div className="flex items-center gap-3 px-4 py-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 overflow-hidden"
                style={{ background: '#2A4A7A' }}
              >
                👩‍⚕️
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-bold truncate">Dr. Sarah Cole</p>
                <p className="text-xs" style={{ color: '#9DEBFF' }}>Cardiologist</p>
              </div>
              <Bell size={15} style={{ color: '#9DEBFF' }} className="shrink-0" />
            </div>

            {/* Pulse Rate Card */}
            <div className="mx-3 mb-2 rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ background: '#9DEBFF' }}>
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: '#1A2A47' }}>Pulse Rate</p>
                <p className="font-extrabold text-xl leading-none" style={{ color: '#1A2A47' }}>
                  98 <span className="text-sm font-semibold">bpm</span>
                </p>
              </div>
              <Heart size={22} className="fill-red-500 text-red-500" />
            </div>

            {/* Next Visit Card */}
            <div className="mx-3 mb-3 rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ background: '#9DEBFF' }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#1A3560' }}>
                  Next Visit
                </p>
                <p className="font-bold text-sm" style={{ color: '#1A2A47' }}>Thu, Jun 21</p>
                <p className="text-xs mt-0.5" style={{ color: '#2A4A7A' }}>09:00 AM</p>
              </div>
              <span className="text-xl">📅</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
