import React, { useState } from 'react'
import { UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'

const categories = ['All', 'Cardiology', 'Neurology', 'Dental care', 'Ophthalmology']

const doctors = [
  { name: 'Dr. Marium khan', specialty: 'Dentist', years: '12+', rating: 4.9, patients: '2k+', category: 'Dental care', emoji: '👩‍⚕️' },
  { name: 'Dr. Jibran Ali', specialty: 'Cardiologist', years: '15+', rating: 5.0, patients: '3k+', category: 'Cardiology', emoji: '👨‍⚕️' },
  { name: 'Dr. Adeeba Khalid', specialty: 'Neurology', years: '8+', rating: 4.8, patients: '1.5k', category: 'Neurology', emoji: '👩‍⚕️' },
  { name: 'Dr. Faisal khan', specialty: 'Ophthalmologist', years: '16+', rating: 5.0, patients: '3k+', category: 'Ophthalmology', emoji: '👨‍⚕️' },
  { name: 'Dr. Uzma waqar', specialty: 'Ophthalmologist', years: '12+', rating: 4.9, patients: '2k+', category: 'Ophthalmology', emoji: '👩‍⚕️' },
  { name: 'Dr. Muhammad Kaif', specialty: 'Cardiologist', years: '15+', rating: 5.0, patients: '2k+', category: 'Cardiology', emoji: '👨‍⚕️' },
]

export default function Doctors() {
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const filtered = activeCategory === 'All'
    ? doctors
    : doctors.filter(d => d.category === activeCategory)

  return (
    <Layout>
      <Header title="Doctors" icon={UserRound} />

      <div className="flex-1 p-6">
        {/* Title + Filter */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Meet Our Specialists</h2>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: '#9DEBFF', color: '#1A2A47' }
                    : { background: '#152238', color: '#9ca3af', border: '1px solid #1E3358' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map(doc => (
            <div
              key={doc.name}
              className="rounded-2xl border border-brand-border p-5 flex flex-col gap-3"
              style={{ background: '#0F1C31' }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: '#1E3358' }}
                >
                  {doc.emoji}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{doc.name}</p>
                  <p className="text-gray-400 text-xs">{doc.specialty}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{doc.years}</p>
                  <p className="text-gray-500 text-xs">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{doc.rating}</p>
                  <p className="text-gray-500 text-xs">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{doc.patients}</p>
                  <p className="text-gray-500 text-xs">Patients</p>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => navigate('/appointment')}
                className="w-full py-2 rounded-full text-xs font-semibold border border-brand-border text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
