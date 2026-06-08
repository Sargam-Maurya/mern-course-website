import React from 'react'

const courses = [
  { title: 'Full Stack Web Development', instructor: 'John Doe', rating: 4.8, price: 499, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop' },
  { title: 'Python for Data Science', instructor: 'Jane Smith', rating: 4.7, price: 399, img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop' },
  { title: 'UI/UX Design Masterclass', instructor: 'Emily Clark', rating: 4.9, price: 349, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop' },
  { title: 'Digital Marketing 101', instructor: 'Mike Johnson', rating: 4.5, price: 299, img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=250&fit=crop' },
  { title: 'Artificial Intelligence Basics', instructor: 'Sarah Lee', rating: 4.6, price: 449, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop' },
  { title: 'Cloud Computing with AWS', instructor: 'David Brown', rating: 4.7, price: 549, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop' },
]

const FeaturedCourses = () => {
  return (
    <section className="bg-black py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Featured Courses</h2>
          <p className="text-sm md:text-lg text-gray-400">Hand-picked courses to boost your skills and career.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-600/10 hover:border-violet-600/50 transition-all duration-300">
              <div className="overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-3">by {course.instructor}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-400 ml-1">{course.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-violet-500">₹{course.price}</span>
                  <button className="bg-violet-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-violet-700 transition duration-300">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
