import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../store/theme'
import LearningIllustration from './LearningIllustration'

const HeroSection = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <section className={`relative overflow-hidden ${isLight ? 'bg-white' : 'bg-black'}`}>
      <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-br from-violet-100/60 via-white to-white' : 'bg-gradient-to-br from-violet-950/40 via-black to-black'}`}></div>
      <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${isLight ? 'bg-violet-200/60' : 'bg-violet-600/10'}`}></div>
      <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${isLight ? 'bg-violet-200/40' : 'bg-violet-800/10'}`}></div>
      <main className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[85vh]">
          <div className="pt-20 md:pt-0">
            <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm mb-6 ${isLight ? 'bg-violet-100 border-violet-200 text-violet-700' : 'bg-violet-600/10 border-violet-600/20 text-violet-400'}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isLight ? 'bg-violet-500' : 'bg-violet-500'}`}></span>
              Trusted by 10,000+ students
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Master the Skills to{' '}
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">Succeed</span>
              <br />
              in the Digital Age
            </h1>
            <p className={`text-sm md:text-lg mb-8 max-w-lg leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Are you ready to take your business to the next level with cutting-edge IT 
              solutions? Look no further! At Thapa Technical, we specialize in providing
              innovative IT services and solutions tailored to meet your unique needs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <button className="bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/25 transition-all duration-300 active:scale-95">
                  Get Started Now
                </button>
              </Link>
              <Link to="/about">
                <button className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 ${isLight ? 'border-gray-300 text-gray-700 hover:border-violet-600 hover:text-violet-600' : 'border-gray-700 text-gray-300 hover:border-violet-600 hover:text-white'}`}>
                  Learn More
                </button>
              </Link>
            </div>
            <div className={`flex items-center gap-6 mt-8 ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-[10px] text-white font-bold ${isLight ? 'border-white' : 'border-black'}`}>S</div>
                ))}
              </div>
              <p className="text-sm"><span className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>4.9</span> avg rating</p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent rounded-2xl"></div>
              <LearningIllustration className="relative w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
