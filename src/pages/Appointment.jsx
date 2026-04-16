import React, { useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const timeSlots = ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:30PM', '2:30PM']
const departments = ['Cardiology', 'Neurology', 'Ophthalmology', 'Dental Care', 'Emergency Care', 'Radiology']
const doctors = {
  Cardiology: ['Dr. Jibran Ali', 'Dr. Muhammad Kaif', 'Dr. Sarah Cole'],
  Neurology: ['Dr. Adeeba Khalid', 'Dr. Faisal Khan'],
  Ophthalmology: ['Dr. Uzma Waqar'],
  'Dental Care': ['Dr. Marium Khan'],
  'Emergency Care': ['Dr. Ahmed Raza'],
  Radiology: ['Dr. Layla Hassan'],
}

export default function Appointment() {
  const [selectedTime, setSelectedTime] = useState('10:00AM')
  const [selectedDept, setSelectedDept] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const availableDoctors = selectedDept ? doctors[selectedDept] || [] : []

  const handleConfirm = () => {
    if (selectedDept && selectedDoctor && selectedDate && selectedTime) {
      setConfirmed(true)
      setTimeout(() => setConfirmed(false), 3000)
    }
  }

  return (
    <Layout>
      <Header title="Appointment" icon={CalendarCheck} />

      <div className="flex-1 flex items-center justify-center p-6">
        <div
          className="w-full max-w-lg rounded-2xl border border-brand-border p-8"
          style={{ background: '#0F1C31' }}
        >
          <h2 className="text-2xl font-bold text-white text-center mb-1">Book Your Appointment</h2>
          <p className="text-gray-400 text-sm text-center mb-6">Select a department, doctor, and time slot</p>

          {/* Department & Doctor */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Department</p>
              <select
                value={selectedDept}
                onChange={e => { setSelectedDept(e.target.value); setSelectedDoctor('') }}
                className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border appearance-none cursor-pointer"
                style={{ background: '#152238', color: selectedDept ? '#fff' : '#6b7280' }}
              >
                <option value="">Select Department</option>
                {departments.map(d => <option key={d} value={d} style={{ color: '#fff' }}>{d}</option>)}
              </select>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Doctor</p>
              <select
                value={selectedDoctor}
                onChange={e => setSelectedDoctor(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border appearance-none cursor-pointer"
                style={{ background: '#152238', color: selectedDoctor ? '#fff' : '#6b7280' }}
              >
                <option value="">Select Doctor</option>
                {availableDoctors.map(d => <option key={d} value={d} style={{ color: '#fff' }}>{d}</option>)}
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-1.5">Select Date</p>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-brand-border"
              style={{ background: '#152238', color: '#fff', colorScheme: 'dark' }}
            />
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-2 mb-6">
            {timeSlots.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={
                  selectedTime === t
                    ? { background: '#FFD600', color: '#1A2A47', fontWeight: 700 }
                    : { background: '#152238', color: '#fff', border: '1px solid #1E3358' }
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ background: '#9DEBFF', color: '#1A2A47' }}
          >
            {confirmed ? '✓ Appointment Confirmed!' : 'CONFIRM APPOINTMENT'}
          </button>
        </div>
      </div>
    </Layout>
  )
}
