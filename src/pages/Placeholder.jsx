import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Placeholder({ title, icon }) {
  return (
    <Layout>
      <Header title={title} icon={icon} />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: '#152238' }}
          >
            {icon && React.createElement(icon, { size: 32, color: '#9DEBFF' })}
          </div>
          <p className="text-white font-semibold text-lg">{title}</p>
          <p className="text-gray-400 text-sm mt-1">Coming soon</p>
        </div>
      </div>
    </Layout>
  )
}
