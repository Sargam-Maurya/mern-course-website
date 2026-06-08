import React from 'react'
import { Link } from 'react-router-dom'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <div>
      <section>
         <main>
           <div>
             <div className='text-white grid grid-cols-2 gap-4 items-center justify-center'>
                <div className='left-box p-10'>
                   {/* <p className='text-lg mb-3'>Tera Muh</p> */}
                   <h1 className='text-3xl mb-3'>Welcome to Thapa Technical</h1>
                   <p className='text-lg mb-3'>
                    Are you ready to take your business to the next level with cutting-edge IT 
                    solutions? Look no further! At Thapa Technical, we specialize in providing
                     innovative IT services and solutions tailored to meet your unique needs.
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
                <div className='registration-form p-10'>
                 <img src="./images/register.png" alt="" />
                  
                </div>
             </div>
           </div>
         </main>
      </section>
      {/* counter  */}
      <StatsSection/>
      {/* 3 part  */}
      <section>
         <main>
           <div>
             <div className='text-white grid grid-cols-2 gap-4 items-center justify-center'>
              <div className='registration-form p-10'>
                 <img src="./images/register.png" alt="" />
                </div>
                <div className='left-box p-10'>
                   <p className='text-lg mb-3'>We are here to help you</p>
                   <h1 className='text-3xl mb-3'>Get Started Today</h1>
                   <p className='text-lg mb-3'>
                    Ready to take the first step towards a more efficient and secure IT infrastructure? 
                    Contact us today for a free consultation and let’s discuss how Thapa Technical 
                    can help your business thrive in the digital age.
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
             </div>
           </div>
         </main>
      </section>
    </div>
  )
}
export default Home