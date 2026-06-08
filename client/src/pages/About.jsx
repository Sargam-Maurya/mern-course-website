import React from 'react'
import { Link } from 'react-router-dom'
import StatsSection from '../components/StatsSection'
import { useAuth } from '../store/auth'
import LearningIllustration from '../components/LearningIllustration'


const About = () => {
  
  const {user} = useAuth()
  
  return (
    <div>
      <section>
         <main>
           <div>
              <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
                 <div className='left-box p-5 md:p-10'>
                    <p className='text-sm md:text-lg mb-3'>
                     Welcome , {user ? ` ${user.username} to our website` : `to our website`}
                    </p>
                    <h1 className='text-xl md:text-3xl mb-3'>Why Choose Us?</h1>
                    <p className='text-sm md:text-lg mb-3'>
                     Expertise: Our team consists of experienced IT professionals who are passionate 
                     about staying up-to-date with the latest industry trends.
                    </p>
                    <p className='text-sm md:text-lg mb-3'>
                     Customization: We understand that every business is unique. That's why we create 
                     solutions that are tailored to your specific needs and goals.
                    </p>
                    <p className='text-sm md:text-lg mb-3'>
                     Customer-Centric Approach: We prioritize your satisfaction and 
                     provide top-notch support to address your IT concerns.
                    </p>
                    <p className='text-sm md:text-lg mb-3'>
                     Affordability: We offer competitive pricing without compromising
                      on the quality of our services.
                    </p>
                    <p className='text-sm md:text-lg mb-3'>
                     Reliability: Count on us to be there when you need us. We're committed
                      to ensuring your IT environment is reliable and available 24/7.
                    </p>
                    <div className='flex items-center gap-5'>
                     <Link to="/contact">
                       <button
                         className="text-violet-600 px-4 py-2 rounded-lg bg-violet-600 
                         text-white hover:text-white transition duration-300"
                       >
                         Connect Now
                       </button>
                     </Link>

                     <Link to="/about">
                       <button
                         className="border border-violet-600 px-4 py-2 rounded-lg 
                         hover:bg-violet-600 hover:text-black transition duration-300"
                       >
                         Learn More
                       </button>
                     </Link>
                    </div>
                 </div>
                 <div className='registration-form p-5 md:p-10'>
                  <LearningIllustration className='w-full h-auto' />
                 </div>
             </div>
           </div>
         </main>
      </section>
      {/* counter  */}
      <StatsSection/>
    </div>
  )
}
export default About