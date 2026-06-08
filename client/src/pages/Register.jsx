import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import RegisterIllustration from '../components/RegisterIllustration'

const api = `http://localhost:5000/api/auth/register`
const Register = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone:'',
    password:''
  })

  const navigate = useNavigate() //login pe navigate 

  const {storeTokenInLS} = useAuth() //ls-5

    //handling the form input
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name] : value,
    })
  }

  //handling the form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log("SUBMIT CLICKED");
    
    try{
      const response = await fetch (api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      
      const res_data = await response.json()
      console.log("response from server", res_data.extraDetails)

      if(response.ok){
        // stored the token in localStorage 
        storeTokenInLS(res_data.token) //ls-1
        setUser({ username: '', email: '', phone:'', password:'' })
        toast.success("Registration Successful")
        navigate('/')
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    }
    catch(error){
      console.log("register", error)
    }
    
  } 
  

  return (
    <div>
      <section>
         <main>
           <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                 <div className='registration-image p-5 md:p-10'>
                    <RegisterIllustration className='w-full h-auto'/>
                 </div>
                 <div className='registration-form p-5 md:p-10'>
                   <h1 className='main-heading mb-3 text-white text-2xl md:text-4xl'>Registration Form</h1>
                  <br/>
                  <form onSubmit={handleSubmit}>
                    <div className='text-white mb-5'>
                       <label 
                       htmlFor="username" 
                       className="text-neutral-300 text-sm font-medium tracking-wide">Username</label>
                       <input 
                       className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                       placeholder-neutral-500 outline-none
                      transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                       type="text" 
                       name='username'
                       placeholder='Enter your username'
                       id='username'
                       required
                       autoComplete='off'
                       value={user.username}
                       onChange={handleChange}
                       />
                    </div>
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
                       onChange={handleChange}
                       />
                    </div>
                    <div className='text-white mb-5'>
                       <label htmlFor="phone" className="text-neutral-300 text-sm font-medium tracking-wide">Phone</label>
                       <input 
                       className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                       placeholder-neutral-500 outline-none
                      transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                       type="number" 
                       name='phone'
                       placeholder='Enter your phone'
                       id='phone'
                       required
                       autoComplete='off'
                       value={user.phone}
                       onChange={handleChange}
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
                       onChange={handleChange}
                       />
                    </div>
                    <button type='submit' className='bg-violet-600 text-white font-medium py-2.5 rounded w-full active:scale-80 transition duration-300'>
                        Register Now
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

export default Register