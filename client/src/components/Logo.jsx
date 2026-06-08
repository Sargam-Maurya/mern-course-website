import React from 'react'
import { useTheme } from '../store/theme'

const Logo = ({ className = '' }) => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-10 md:h-10">
        <rect width="44" height="44" rx="12" className="fill-violet-600" />
        <path d="M16 12C16 10.8954 16.8954 10 18 10H26C27.1046 10 28 10.8954 28 12V32L22 28L16 32V12Z" className="fill-white" />
        <path d="M22 28L16 32V12L22 16L28 12V32L22 28Z" className="fill-violet-200" />
        <path d="M12 22H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 22H32" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="12" r="2" className="fill-violet-300" />
        <circle cx="22" cy="32" r="2" className="fill-violet-300" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`text-lg md:text-xl font-bold tracking-tight ${isLight ? 'text-black-600' : 'text-white'}`}>SARGAM</span>
        <span className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase ${isLight ? 'text-black-600' : 'text-gray-400'}`}>E-Learning</span>
      </div>
    </div>
  )
}

export default Logo
