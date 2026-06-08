import React from 'react'

const instructors = [
  { name: 'Alex Rivera', expertise: 'Full Stack Development', bio: '10+ years building scalable web apps for Fortune 500 companies.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
  { name: 'Priya Sharma', expertise: 'Data Science & AI', bio: 'PhD in Machine Learning with experience at top tech firms.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Marcus Chen', expertise: 'UI/UX Design', bio: 'Award-winning designer who has worked with global brands.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sophie Williams', expertise: 'Digital Marketing', bio: 'Helped 100+ startups grow their online presence organically.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
]

const Instructors = () => {
  return (
    <section className="bg-black py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Meet Our Instructors</h2>
          <p className="text-sm md:text-lg text-gray-400">Learn from the best in the industry.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-violet-600/50 transition-all duration-300">
              <img src={inst.img} alt={inst.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-2 ring-violet-600/50" />
              <h3 className="text-lg font-semibold text-white mb-1">{inst.name}</h3>
              <p className="text-sm text-violet-500 mb-3">{inst.expertise}</p>
              <p className="text-sm text-gray-400">{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors
