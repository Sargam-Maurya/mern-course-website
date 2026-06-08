import React from 'react'

const benefits = [
  { title: 'Expert Instructors', icon: '👨‍🏫', desc: 'Learn from industry professionals with years of real-world experience.' },
  { title: 'Affordable Pricing', icon: '💰', desc: 'Quality education at prices that won\'t break the bank.' },
  { title: 'Lifetime Access', icon: '🔓', desc: 'Access your courses forever with unlimited updates.' },
  { title: 'Certificates', icon: '📜', desc: 'Earn recognized certificates to boost your career.' },
  { title: '24/7 Support', icon: '🛠️', desc: 'Our support team is available round the clock to help you.' },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Why Choose Us</h2>
          <p className="text-sm md:text-lg text-gray-400">What makes us the best choice for your learning journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-violet-600/50 hover:shadow-lg hover:shadow-violet-600/5 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
