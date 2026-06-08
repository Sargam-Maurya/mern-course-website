import React, { useState } from 'react'

const testimonials = [
  { name: 'Rahul Verma', role: 'Web Dev Student', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', text: 'The Full Stack course was incredible! I went from zero to building production-ready apps in just 3 months.', rating: 5 },
  { name: 'Ananya Gupta', role: 'Data Science Student', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', text: 'The Data Science course is well-structured with real-world projects. Highly recommended for beginners!', rating: 5 },
  { name: 'Rohit Patil', role: 'UI/UX Student', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', text: 'Amazing design masterclass! The projects helped me build an impressive portfolio.', rating: 4 },
  { name: 'Neha Singh', role: 'Marketing Student', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', text: 'The Digital Marketing course gave me practical skills I use every day at work. Worth every penny!', rating: 5 },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-black py-12 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Student Testimonials</h2>
          <p className="text-sm md:text-lg text-gray-400">Hear from our students around the world.</p>
        </div>
        <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-10 text-center">
          <div className="flex flex-col items-center">
            <img src={testimonials[current].img} alt={testimonials[current].name} className="w-16 h-16 rounded-full object-cover ring-2 ring-violet-600/50 mb-4" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-4 italic">"{testimonials[current].text}"</p>
            <h4 className="text-white font-semibold">{testimonials[current].name}</h4>
            <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
          </div>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl transition">&lsaquo;</button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl transition">&rsaquo;</button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === current ? 'bg-violet-600' : 'bg-gray-600'}`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
