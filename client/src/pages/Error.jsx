import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <section className='flex items-center justify-center p-5 md:p-10'>
            <div className='text-white text-center'>
                <h2 className='text-6xl md:text-9xl font-bold mb-3 bg-gradient-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text'>404</h2>
                <h4 className='text-sm md:text-lg mb-3'>Sorry! Page not found</h4>
                <p className='whitespace-pre-line text-sm md:text-lg mb-3'>
                    Oops! It seems like the page you're trying to access doesn't exist. <br/>
                    If you believe there's an issue, feel free to report it, and we'll look into it.
                </p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <Link to="/">
                        <button className='border border-violet-600 px-4 py-2 rounded-full hover:bg-violet-600 hover:text-black transition duration-300'>
                            RETURN HOME
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className='border border-violet-600 px-4 py-2 rounded-full hover:bg-violet-600 hover:text-black transition duration-300'>
                            REPORT PROBLEM
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Error