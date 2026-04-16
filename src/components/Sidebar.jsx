import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, CalendarCheck, Building2, UserRound, ShieldCheck,
  Phone, CreditCard, BarChart3, Activity, FileText, Settings, User, ArrowRight
} from 'lucide-react'

const topNav = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/appointment', label: 'Appointment', icon: CalendarCheck },
  { path: '/department', label: 'Department', icon: Building2 },
  { path: '/doctors', label: 'Doctors', icon: UserRound },
  { path: '/verification', label: 'Verification', icon: ShieldCheck },
  { path: '/contact', label: 'Contact', icon: Phone },
]

const bottomNav = [
  { path: '/payments', label: 'Payments', icon: CreditCard },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/system-health', label: 'System Health', icon: Activity },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="w-52 min-h-screen bg-brand-dark flex flex-col border-r border-brand-border shrink-0">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-brand-border">
        <h1 className="text-xl font-bold text-white">
          <span className="font-light">Medi</span>
          <span className="font-extrabold">Chain</span>
        </h1>
      </div>

      {/* Top Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {topNav.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={16} />
            <span>{label}</span>
          </NavLink>
        ))}

        {/* Book Now Button */}
        <div className="pt-4">
          <button
            onClick={() => navigate('/appointment')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-brand-accent text-brand-accent text-sm font-semibold w-full hover:bg-brand-accent hover:text-brand-bg transition-all duration-200"
          >
            Book Now
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-brand-border space-y-1">
        {bottomNav.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={16} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
