import React from 'react'

const categories = [
  { name: 'Web Development', icon: '💻', desc: 'HTML, CSS, React, Node.js & more', color: 'from-blue-600 to-blue-800' },
  { name: 'Data Science', icon: '📊', desc: 'Python, SQL, Machine Learning', color: 'from-green-600 to-green-800' },
  { name: 'UI/UX Design', icon: '🎨', desc: 'Figma, Adobe XD, Prototyping', color: 'from-pink-600 to-pink-800' },
  { name: 'Marketing', icon: '📈', desc: 'SEO, Social Media, Analytics', color: 'from-yellow-600 to-yellow-800' },
  { name: 'Artificial Intelligence', icon: '🤖', desc: 'Deep Learning, NLP, Computer Vision', color: 'from-purple-600 to-purple-800' },
  { name: 'Cloud Computing', icon: '☁️', desc: 'AWS, Azure, Google Cloud', color: 'from-cyan-600 to-cyan-800' },
]

const CourseCategories = () => {
  return (
    <section className="bg-black py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Course Categories</h2>
          <p className="text-sm md:text-lg text-gray-400">Explore a wide range of categories tailored for you.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-600/50 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-400">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories
