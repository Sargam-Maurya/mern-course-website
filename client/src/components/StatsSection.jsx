import React from 'react'
import { useTheme } from '../store/theme'

const icons = [
  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />,
  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />,
  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />,
  <circle cx="9" cy="7" r="4" />,
  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
]

const StatsSection = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const stats = [
    { number: "50+", title: "Registered Companies", icon: 0 },
    { number: "100,00+", title: "Happy Clients", icon: 1 },
    { number: "500+", title: "Well Known Developers", icon: 2 },
    { number: "24/7", title: "Service", icon: 3 },
  ];

  return (
    <section className={`py-16 px-5 ${isLight ? 'bg-gray-50' : 'bg-black'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => (
            <div key={index} className={`group relative rounded-2xl p-6 md:p-8 text-center overflow-hidden transition-all duration-300 hover:scale-105 ${isLight ? 'bg-white shadow-lg shadow-violet-100 border border-violet-100' : 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-violet-600/50'}`}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isLight ? 'bg-gradient-to-b from-violet-50/50 to-transparent' : 'bg-gradient-to-b from-violet-600/5 to-transparent'}`}></div>
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isLight ? 'bg-violet-100 text-violet-600' : 'bg-violet-600/10 text-violet-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {icons[item.icon]}
                </svg>
              </div>
              <h1 className={`text-3xl md:text-5xl font-extrabold mb-2 transition-all duration-300 ${isLight ? 'text-gray-900 group-hover:text-violet-600' : 'text-white group-hover:text-violet-400'}`}>
                {item.number}
              </h1>
              <p className={`text-sm md:text-base font-medium ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;