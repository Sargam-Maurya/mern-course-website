import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import LoginIllustration from '../components/LoginIllustration'

const api = `http://localhost:5000/api/auth/login`

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    const {name, value} = e.target
    setUser({
    ...user,
    [name]: value
    })
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });

        console.log('login form', response)
        const res_data = await response.json()

        if(response.ok){
          // toast.success("Login Successful")

          // stored the token in localStorage 
        storeTokenInLS(res_data.token) //ls-1

          setUser({
            email: '',
            password: ''
          })
          toast.success("Login Successful")
          navigate('/')
        }else{
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
          console.log('invalid credential')
        }
      }
      catch(error){
        console.log(error)
      }
        
    }

    return (
      <div>
        <section>
          <main>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='registration-image p-5 md:p-10'>
                    <LoginIllustration className='w-full h-auto'/>
                  </div>
                  <div className='registration-form p-5 md:p-10'>
                    <h1 className='main-heading mb-3 text-white text-2xl md:text-4xl'>Login Form</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                      <div className='text-white mb-5'>
                        <label 
                        htmlFor="email"
                        className="text-neutral-300 text-sm font-medium tracking-wide">Email</label>
                        <input 
                        className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                        placeholder-neutral-500 outline-none
                        transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                        type="email" 
                        name='email'
                        placeholder='Enter your email'
                        id='email'
                        required
                        autoComplete='off'
                        value={user.email}
                        onChange={handleInput}
                        />
                      </div>
                      <div className='text-white mb-5'>
                        <label htmlFor="password" className="text-neutral-300 text-sm font-medium tracking-wide">Password</label>
                        <input 
                        className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                        placeholder-neutral-500 outline-none
                        transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                        type="password" 
                        name='password'
                        placeholder='Enter your password'
                        id='password'
                        required
                        autoComplete='off'
                        value={user.password}
                        onChange={handleInput}
                        />
                      </div>
                      <button type='submit' className='bg-violet-600 text-white font-medium py-2.5 rounded w-full active:scale-80 transition duration-300'>
                          Login Now
                      </button>
                    </form>
                  </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    )
  }

  export default Login