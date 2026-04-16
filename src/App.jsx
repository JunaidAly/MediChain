import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CreditCard, BarChart3, Activity, FileText, Settings, User } from 'lucide-react'

import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Appointment from './pages/Appointment'
import Department from './pages/Department'
import Doctors from './pages/Doctors'
import Verification from './pages/Verification'
import Contact from './pages/Contact'
import HowItWorks from './pages/HowItWorks'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/payments" element={<Placeholder title="Payments" icon={CreditCard} />} />
        <Route path="/analytics" element={<Placeholder title="Analytics" icon={BarChart3} />} />
        <Route path="/system-health" element={<Placeholder title="System Health" icon={Activity} />} />
        <Route path="/reports" element={<Placeholder title="Reports" icon={FileText} />} />
        <Route path="/profile" element={<Placeholder title="Profile" icon={User} />} />
        <Route path="/settings" element={<Placeholder title="Settings" icon={Settings} />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
