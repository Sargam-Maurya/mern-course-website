import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../store/theme'
import Logo from './Logo'

const Footer = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <footer className={`${isLight ? 'bg-gray-900 text-gray-300' : 'bg-gray-950 text-gray-400'} border-t ${isLight ? 'border-gray-800' : 'border-gray-800/50'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className={`mt-4 text-sm leading-relaxed ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
              Empowering learners with cutting-edge IT skills. Join thousands of students worldwide and take your career to the next level.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', label: 'facebook' },
                { path: 'M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.149a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.07 8.07 0 002.319-.624 8.084 8.084 0 01-2.019 2.083z', label: 'twitter' },
                { path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z', label: 'linkedin' },
                { path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'github' },
              ].map(({ path, label }) => (
                <a key={label} href="#" className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${isLight ? 'bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white' : 'bg-gray-800 hover:bg-violet-600 text-gray-500 hover:text-white'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isLight ? 'text-white' : 'text-gray-300'}`}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/service', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-violet-400 transition duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isLight ? 'text-white' : 'text-gray-300'}`}>Support</h3>
            <ul className="space-y-3">
              {[
                { label: 'Help Center' },
                { label: 'Terms of Service' },
                { label: 'Privacy Policy' },
                { label: 'FAQs' },
              ].map(({ label }) => (
                <li key={label}>
                  <a href="#" className="text-sm hover:text-violet-400 transition duration-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isLight ? 'text-white' : 'text-gray-300'}`}>Stay Updated</h3>
            <p className={`text-sm mb-4 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>Subscribe to get the latest courses and offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className={`flex-1 px-3 py-2.5 text-sm rounded-l-lg outline-none ${isLight ? 'bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:border-violet-600' : 'bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:border-violet-600'}`} />
              <button className="px-4 py-2.5 bg-violet-600 text-white text-sm font-medium rounded-r-lg hover:bg-violet-700 transition duration-300">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-t ${isLight ? 'border-gray-800' : 'border-gray-800/50'} py-5`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className={`${isLight ? 'text-gray-500' : 'text-gray-600'}`}>&copy; {new Date().getFullYear()} Sargam Maurya. All rights reserved.</p>
          <p className={`${isLight ? 'text-gray-600' : 'text-gray-700'}`}>Made with ❤️ for learners</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer