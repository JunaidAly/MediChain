import React from 'react'
import { UserCircle } from 'lucide-react'

export default function Header({ title, icon: Icon, username = 'MuhammadFeroz' }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
      <div className="flex items-center gap-2 text-white font-medium text-sm">
        {Icon && <Icon size={16} className="text-brand-accent" />}
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-300 text-sm">
        <UserCircle size={20} className="text-brand-accent" />
        <span>{username}</span>
      </div>
    </header>
  )
}
