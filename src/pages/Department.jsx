import React, { useState } from 'react'
import { Building2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import deptImg from '../assets/deptimg.png'
import deptImg1 from '../assets/deptimg1.png'

const departments = [
  {
    id: 1,
    name: 'Neurology',
    desc: 'Advanced diagnosis and treatment for disorders of the central and peripheral nervous system.',
    services: ['Advanced diagnosis', 'Opthalomogy', 'Disorders screening', 'Peripheral nervation'],
    specialist: { name: 'Muhammadi Specialist', emoji: '👨‍⚕️' },
    img: deptImg,
    color: '#6366F1',
  },
  {
    id: 2,
    name: 'Cardiology',
    desc: 'World class heart care including cardiac screening, surgery, and rehabilitation.',
    services: ['Cardiac surgery', 'Heart screening', 'Rehabilitation', 'Emergency care'],
    specialist: { name: 'Dr. Sarah Cole', emoji: '👩‍⚕️' },
    img: deptImg1,
    color: '#EF4444',
  },
  {
    id: 3,
    name: 'Ophthalmology',
    desc: 'Expert eye care services and modern vision correction.',
    services: ['Vision testing', 'LASIK surgery', 'Cataract removal', 'Glaucoma care'],
    specialist: { name: 'Dr. Uzma Waqar', emoji: '👩‍⚕️' },
    img: deptImg,
    color: '#10B981',
  },
  {
    id: 4,
    name: 'Dental Care',
    desc: 'Comprehensive dental services for the whole family.',
    services: ['Teeth cleaning', 'Orthodontics', 'Implants', 'Cosmetic dentistry'],
    specialist: { name: 'Dr. Marium Khan', emoji: '👩‍⚕️' },
    img: deptImg1,
    color: '#F59E0B',
  },
  {
    id: 5,
    name: 'Emergency Care',
    desc: 'Advanced diagnosis and treatment for the central pod.',
    services: ['24/7 care', 'Trauma support', 'Critical care', 'Fast response'],
    specialist: { name: 'Dr. Ahmed Raza', emoji: '👨‍⚕️' },
    img: deptImg,
    color: '#EF4444',
  },
  {
    id: 6,
    name: 'Radiology',
    desc: 'Comprehensive medical care including cardiac screening, surgery, and rehabilitation.',
    services: ['X-Ray', 'MRI Scan', 'CT Scan', 'Ultrasound'],
    specialist: { name: 'Dr. Layla Hassan', emoji: '👩‍⚕️' },
    img: deptImg1,
    color: '#8B5CF6',
  },
]

export default function Department() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const dept = departments[current]

  const prev = () => setCurrent(i => (i - 1 + departments.length) % departments.length)
  const next = () => setCurrent(i => (i + 1) % departments.length)

  return (
    <Layout>
      <Header title="Departments" icon={Building2} />

      <div className="flex-1 flex flex-col p-6">
        {/* Carousel */}
        <div className="flex-1 flex items-center gap-4">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="p-2 rounded-full border border-brand-border text-gray-400 hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Card */}
          <div
            className="flex-1 rounded-2xl border border-brand-border overflow-hidden flex"
            style={{ background: '#0F1C31', minHeight: '340px' }}
          >
            {/* Left: Info */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: dept.color + '20', border: `1.5px solid ${dept.color}` }}
                  >
                    🧠
                  </div>
                  <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{dept.desc}</p>

                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Key Services</p>
                  <ul className="space-y-1">
                    {dept.services.map(s => (
                      <li key={s} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent inline-block" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Featured Specialist</p>
                <div
                  className="flex items-center gap-2 p-2 rounded-xl w-fit"
                  style={{ background: '#152238' }}
                >
                  <span className="text-xl">{dept.specialist.emoji}</span>
                  <span className="text-sm text-white font-medium">{dept.specialist.name}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/appointment')}
                className="mt-4 px-5 py-2.5 rounded-full text-sm font-semibold w-fit transition-all hover:opacity-90"
                style={{ background: '#9DEBFF', color: '#1A2A47' }}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>

            {/* Right: Image */}
            <div className="w-64 relative overflow-hidden">
              <img
                src={dept.img}
                alt={dept.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg, #0F1C31 0%, transparent 40%)' }}
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="p-2 rounded-full border border-brand-border text-gray-400 hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {departments.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={i === current ? { background: '#9DEBFF', width: '20px' } : { background: '#1E3358' }}
            />
          ))}
        </div>

        {/* Grid View */}
        <div className="mt-6">
          <p className="text-gray-400 text-xs font-semibold uppercase mb-3">All Departments</p>
          <div className="grid grid-cols-3 gap-3">
            {departments.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setCurrent(i)}
                className="p-3 rounded-xl border text-left transition-all duration-200 hover:border-brand-accent"
                style={{
                  background: i === current ? '#152238' : '#0F1C31',
                  borderColor: i === current ? '#9DEBFF' : '#1E3358',
                }}
              >
                <p className="text-white text-sm font-medium">{d.name}</p>
                <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{d.desc}</p>
                <p className="text-brand-accent text-xs mt-1 flex items-center gap-1">
                  Learn More <ArrowRight size={10} />
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
