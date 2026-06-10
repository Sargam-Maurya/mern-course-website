import React, { useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth'

const linkClass = ({ isActive }) =>
  `block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
    isActive
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
  }`



const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const {user, isLoading} = useAuth()
  console.log("user data admin", user)

  if(isLoading){
      return <h1>Loading ...</h1>
  } // coming from auth.jsx
  if(!user.isAdmin){
    return <Navigate to='/'/>
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              A
            </div>
            <span className="text-lg font-semibold text-white">Admin Panel</span>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-gray-700/50 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
                <NavLink to='/admin/users' className={linkClass}>Users</NavLink>
              </li>
              <li>
                <NavLink to='/admin/contacts' className={linkClass}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to='/service' className={linkClass}>Services</NavLink>
              </li>
              <li className="ml-4 pl-4 border-l border-gray-700">
                <NavLink to='/' className={linkClass}>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {mobileOpen && (
          <nav className="border-t border-gray-800 px-6 pb-4 pt-2 md:hidden">
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink to='/admin/users' className={linkClass} onClick={() => setMobileOpen(false)}>Users</NavLink>
              </li>
              <li>
                <NavLink to='/admin/contacts' className={linkClass} onClick={() => setMobileOpen(false)}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to='/service' className={linkClass} onClick={() => setMobileOpen(false)}>Services</NavLink>
              </li>
              <li className="pt-2 mt-2 border-t border-gray-700">
                <NavLink to='/' className={linkClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout