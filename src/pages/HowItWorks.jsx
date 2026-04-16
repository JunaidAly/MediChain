import React from 'react'
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const steps = [
  {
    id: 1,
    title: 'Sign Up / Login',
    desc: 'Create account or log in to access hospital services.',
    icon: '👤',
    color: '#9DEBFF',
  },
  {
    id: 2,
    title: 'Explore Services & Doctors',
    desc: 'Browse departments and view doctor profiles for specialist choice.',
    icon: '🔍',
    color: '#9DEBFF',
  },
  {
    id: 3,
    title: 'Select Appointment Details',
    desc: "Pick your preferred doctor, date, and time.",
    icon: '📅',
    color: '#9DEBFF',
  },
  {
    id: 4,
    title: 'Confirm Booking',
    desc: 'Submit request through simple step process.',
    icon: '✅',
    color: '#9DEBFF',
  },
  {
    id: 5,
    title: 'Blockchain Verification',
    desc: 'Appointment is tamper-proof, trustworthy, and stored on-chain.',
    icon: '🔗',
    color: '#9DEBFF',
    highlight: true,
  },
  {
    id: 6,
    title: 'Receive Confirmation',
    desc: 'Get instant confirmation in your dashboard.',
    icon: '📲',
    color: '#9DEBFF',
  },
  {
    id: 7,
    title: 'Manage Appointments',
    desc: 'View, update, or cancel your appointments easily.',
    icon: '📋',
    color: '#9DEBFF',
  },
]

export default function HowItWorks() {
  return (
    <Layout>
      <Header title="How It Works" icon={ShieldCheck} />

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-white mb-8">How it Works</h2>

        {/* Flow Top Row */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {steps.slice(0, 4).map((step, i) => (
            <React.Fragment key={step.id}>
              <div
                className="flex-1 min-w-[140px] rounded-2xl border border-brand-border p-4 text-center"
                style={{ background: '#0F1C31' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-2"
                  style={{ background: '#152238' }}
                >
                  {step.icon}
                </div>
                <p className="text-white text-xs font-bold mb-1">{step.title}</p>
                <p className="text-gray-400 text-xs">{step.desc}</p>
              </div>
              {i < 3 && <ArrowRight size={20} className="text-brand-accent shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        {/* Arrow Down */}
        <div className="flex justify-end pr-8 mb-2">
          <div className="text-brand-accent text-2xl">↓</div>
        </div>

        {/* Flow Bottom Row (reversed) */}
        <div className="flex items-center gap-2 flex-row-reverse overflow-x-auto pb-2">
          {steps.slice(4).map((step, i) => (
            <React.Fragment key={step.id}>
              <div
                className="flex-1 min-w-[140px] rounded-2xl border p-4 text-center"
                style={{
                  background: step.highlight ? '#152238' : '#0F1C31',
                  borderColor: step.highlight ? '#9DEBFF' : '#1E3358',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-2"
                  style={{ background: step.highlight ? '#9DEBFF20' : '#152238' }}
                >
                  {step.icon}
                </div>
                {step.highlight && (
                  <div
                    className="text-xs font-bold px-2 py-0.5 rounded-full mb-1 mx-auto w-fit"
                    style={{ background: '#9DEBFF20', color: '#9DEBFF' }}
                  >
                    BLOCKCHAIN SECURED
                  </div>
                )}
                <p className="text-white text-xs font-bold mb-1">{step.title}</p>
                <p className="text-gray-400 text-xs">{step.desc}</p>
              </div>
              {i < steps.slice(4).length - 1 && (
                <ArrowRight size={20} className="text-brand-accent shrink-0 rotate-180" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Connection dots */}
        <div className="flex justify-center gap-2 mt-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: i === 4 ? '#9DEBFF' : '#1E3358' }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
