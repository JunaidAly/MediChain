import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authImg from '../assets/authimg.png'

export default function Auth() {
  const [tab, setTab] = useState('signup')
  const [form, setForm] = useState({ username: '', password: '', confirm: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: '#1A2A47' }}
    >
      <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex bg-white">
        {/* Left Panel */}
        <div className="w-1/2 p-10 flex flex-col justify-center" style={{ background: '#fff' }}>
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="font-light">Medi</span>
              <span className="font-extrabold">Chain</span>
            </h1>
          </div>

          {/* Tabs */}
          <div
            className="flex rounded-full p-1 mb-6 w-48"
            style={{ background: '#1A2A47' }}
          >
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                tab === 'signup'
                  ? 'text-brand-bg bg-brand-accent'
                  : 'text-gray-400 bg-transparent'
              }`}
              style={tab === 'signup' ? { color: '#1A2A47', background: '#9DEBFF' } : { color: '#9ca3af' }}
            >
              Signup
            </button>
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-1.5 rounded-full text-sm font-semibold transition-all duration-200`}
              style={tab === 'login' ? { color: '#1A2A47', background: '#9DEBFF' } : { color: '#9ca3af' }}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="username or email"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              className="w-full border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors"
            />
            <input
              type="password"
              placeholder="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors"
            />
            {tab === 'signup' && (
              <input
                type="password"
                placeholder="confirm password"
                value={form.confirm}
                onChange={e => setForm({ ...form, confirm: e.target.value })}
                className="w-full border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors"
              />
            )}
            {tab === 'login' && (
              <p className="text-xs text-gray-500 pl-2 cursor-pointer hover:text-blue-500">
                Forgot password?
              </p>
            )}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: '#9DEBFF', color: '#1A2A47' }}
              >
                {tab === 'signup' ? 'Signup' : 'Login'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Panel - Image */}
        <div className="w-1/2 relative overflow-hidden rounded-r-3xl">
          <img
            src={authImg}
            alt="MediChain"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(26,42,71,0.3) 0%, transparent 100%)' }}
          />
        </div>
      </div>
    </div>
  )
}
