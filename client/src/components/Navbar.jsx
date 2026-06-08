import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import { useAuth } from '../store/auth';
import { useTheme } from '../store/theme';
import Logo from './Logo';

const Navbar = () => {

    const {isLoggedIn} = useAuth()
    const { theme, toggleTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
            
                {/* Logo */}
                <NavLink to="/">
                  <Logo />
                </NavLink>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Desktop Navbar */}
                <nav className="hidden md:block">
                <ul className="flex items-center gap-6 text-lg font-medium">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `hover:text-violet-600 transition duration-300 ${isActive ? 'text-violet-600' : ''}`}
                    >
                        Home
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `hover:text-violet-600 transition duration-300 ${isActive ? 'text-violet-600' : ''}`}
                    >
                        About
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/service"
                        className={({ isActive }) => `hover:text-violet-600 transition duration-300 ${isActive ? 'text-violet-600' : ''}`}
                    >
                        Service
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `hover:text-violet-600 transition duration-300 ${isActive ? 'text-violet-600' : ''}`}
                    >
                        Contact
                    </NavLink>
                    </li>
                    {isLoggedIn  ? (
                    <li>
                        <NavLink
                            to="/logout"
                            className={({ isActive }) => `px-4 py-2 rounded-lg border border-violet-600 transition duration-300 ${isActive ? 'bg-violet-600 text-black' : 'text-white hover:bg-violet-600 hover:text-black'}`}
                        >
                            Logout
                        </NavLink>
                    </li> 
                    ) : (
                    <>
                     <li>
                        <NavLink
                            to="/register"
                            className={({ isActive }) => `px-4 py-2 rounded-lg border border-violet-600 transition duration-300 ${isActive ? 'bg-violet-600 text-black' : 'text-white hover:bg-violet-600 hover:text-black'}`}
                        >
                            Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => `border border-violet-600 px-4 py-2 rounded-lg transition duration-300 ${isActive ? 'bg-violet-600 text-black' : 'hover:bg-violet-600 hover:text-black'}`}
                        >
                            Login
                        </NavLink>
                    </li>
                    </>
                    )}
                    <li>
                      <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-800 transition duration-300" aria-label="Toggle theme">
                        {theme === 'dark' ? (
                          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                        )}
                      </button>
                    </li>

                </ul>
                </nav>
                
            </div>

            {/* Mobile overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Mobile Menu - slide from right */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 via-black to-black z-50 shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-5 border-b border-gray-800">
                    <Logo />
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition duration-300"
                        aria-label="Close menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex-1 px-4 py-6">
                    <ul className="flex flex-col gap-1">
                        {[
                            { to: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                            { to: '/about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                            { to: '/service', label: 'Services', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                            { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                        ].map(({ to, label, icon }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-violet-600/15 text-violet-400 border border-violet-600/20'
                                                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent'
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                                    </svg>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="px-4 pb-6 space-y-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    {isLoggedIn ? (
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? 'bg-violet-600 text-white'
                                        : 'border border-gray-700 text-gray-300 hover:border-violet-600 hover:text-violet-400'
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                        </NavLink>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-violet-600 text-white'
                                            : 'border border-gray-700 text-gray-300 hover:border-violet-600 hover:text-violet-400'
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-violet-600 text-white'
                                            : 'bg-violet-600 text-white hover:bg-violet-700'
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Login
                            </NavLink>
                        </div>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-700 text-gray-300 hover:border-violet-600 hover:text-violet-400 transition-all duration-200"
                    >
                        {theme === 'dark' ? (
                            <><svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg> Light Mode</>
                        ) : (
                            <><svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg> Dark Mode</>
                        )}
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar