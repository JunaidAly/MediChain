import React, { useState } from 'react'
import { ShieldCheck, CheckCircle2, Clock, Lock, User, Zap } from 'lucide-react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import verificationImg from '../assets/verification.png'

const features = [
  {
    icon: CheckCircle2,
    title: 'Immutable Records',
    desc: "Once data is entered, it cannot be altered without authorisation.",
    color: '#9DEBFF',
  },
  {
    icon: User,
    title: 'Patient Ownership',
    desc: 'You control who accesses your medical history via private keys.',
    color: '#9DEBFF',
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    desc: 'Doctors can instantly verify your medical history and prescriptions.',
    color: '#9DEBFF',
  },
]

const blocks = [
  { id: '#18280', label: "Harry Grch. Rafa", status: 'Verified', verified: true },
  { id: '#18394', label: "Harry Grch. Pending...", status: 'Processing', verified: false },
]

export default function Verification() {
  const [showModal, setShowModal] = useState(false)
  const [recordId, setRecordId] = useState('')
  const [verifyResult, setVerifyResult] = useState(null)

  const handleVerify = () => {
    if (recordId.trim()) {
      setVerifyResult(Math.random() > 0.3 ? 'verified' : 'processing')
    }
  }

  return (
    <Layout>
      <Header title="Verification" icon={ShieldCheck} />

      <div className="flex-1 p-6 flex gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            We utilize cutting-edge blockchain technology to ensure your medical records are
            tamper-proof, transparent, and instantly verifiable. No more lost files or
            unauthorized changes.
          </p>

          <div className="space-y-4 mb-8">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: color + '20' }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2.5 rounded-full border border-brand-accent text-brand-accent text-sm font-semibold hover:bg-brand-accent hover:text-brand-bg transition-all duration-200"
          >
            Verify a Record
          </button>
        </div>

        {/* Right: Verification Status */}
        <div className="w-72">
          <div
            className="rounded-2xl border border-brand-border p-5"
            style={{ background: '#0F1C31' }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-semibold text-sm">Verification Status</p>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: '#152238', color: '#9DEBFF' }}
              >
                Live
              </span>
            </div>

            <div className="space-y-3">
              {blocks.map(block => (
                <div
                  key={block.id}
                  className="rounded-xl p-3 border border-brand-border"
                  style={{ background: '#152238' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: block.verified ? '#9DEBFF20' : '#F59E0B20' }}
                      >
                        {block.verified
                          ? <CheckCircle2 size={14} style={{ color: '#9DEBFF' }} />
                          : <Clock size={14} style={{ color: '#F59E0B' }} />
                        }
                      </div>
                      <span className="text-white text-xs font-semibold">Block {block.id}</span>
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: block.verified ? '#9DEBFF' : '#F59E0B' }}
                    >
                      {block.verified ? '✓ Verified' : '⟳ Processing'}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">{block.label}</p>
                  {block.verified && (
                    <div
                      className="mt-2 h-1.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #9DEBFF, #1A2A47)' }}
                    />
                  )}
                  {!block.verified && (
                    <div
                      className="mt-2 h-1.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #F59E0B 60%, #1E3358 100%)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain Image */}
          <div className="mt-4 rounded-2xl overflow-hidden border border-brand-border">
            <img src={verificationImg} alt="Blockchain" className="w-full h-32 object-cover" />
          </div>
        </div>
      </div>

      {/* Verify Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => { setShowModal(false); setVerifyResult(null); setRecordId('') }}
        >
          <div
            className="rounded-2xl border border-brand-border p-6 w-80"
            style={{ background: '#0F1C31' }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-white font-bold text-lg mb-1">Verify a Record</h3>
            <p className="text-gray-400 text-xs mb-4">Enter a block ID or patient record number</p>
            <input
              type="text"
              placeholder="e.g. #18280"
              value={recordId}
              onChange={e => setRecordId(e.target.value)}
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border mb-3"
              style={{ background: '#152238', color: '#fff' }}
            />
            {verifyResult && (
              <div
                className="text-sm px-3 py-2 rounded-lg mb-3"
                style={{
                  background: verifyResult === 'verified' ? '#9DEBFF20' : '#F59E0B20',
                  color: verifyResult === 'verified' ? '#9DEBFF' : '#F59E0B',
                }}
              >
                {verifyResult === 'verified' ? '✓ Record verified on blockchain' : '⟳ Record is being processed...'}
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={handleVerify}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: '#9DEBFF', color: '#1A2A47' }}
              >
                Verify
              </button>
              <button
                onClick={() => { setShowModal(false); setVerifyResult(null); setRecordId('') }}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold border border-brand-border text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
