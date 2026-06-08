import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import ContactIllustration from '../components/ContactIllustration'
import { toast } from 'react-toastify';

    const defaultContactForm = {
      username: '',
      email: '',
      message:''
    }
    const api = 'http://localhost:5000/api/form/contact'

  const Contact = () => {
    const [contact, setContact] = useState(defaultContactForm)
    const [userData, setUserData] = useState(true) //Auto-Fill Contact Fields ke liye naya usestate banaya hai 

    const {user} = useAuth()

    if(userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: '',
      })
      setUserData(false) //Auto-Fill Contact Fields ke 
    }

    //handling the form input
    const handleInput = (e) => {
      console.log(e)
      let name = e.target.name;
      let value = e.target.value;
      setContact({
        ...contact,
        [name] : value,
      })
    }
  
    //handling the form submit
    const handleSubmit = async (e) => {
      e.preventDefault()

      try{
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contact)
        })
        const res_data = await response.json()
        console.log("response from server", res_data.extraDetails)

        if(response.ok){
        setContact(defaultContactForm)
        toast.success("Contact form submitted successfully")
        }else{
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
        }
      }
      catch(error){
        console.log("contact", error)
      }
    } 
  return (
    <div>
      <section>
         <main>
           <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                 <div className='registration-image p-5 md:p-10'>
                    <ContactIllustration className='w-full h-auto'/>
                 </div>
                 <div className='registration-form p-5 md:p-10'>
                   <h1 className='main-heading mb-3 text-white text-2xl md:text-4xl'>Contact Form</h1>
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
                       value={contact.username}
                       onChange={handleInput}
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
                       value={contact.email}
                       onChange={handleInput}
                       />
                    </div>
                    <div className='text-white mb-5'>
                       <label htmlFor="message" className="text-neutral-300 text-sm font-medium tracking-wide">Message</label>
                       <input 
                       className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                       placeholder-neutral-500 outline-none
                      transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                       type="text" 
                       name='message'
                       placeholder='Enter your message'
                       id='message'
                       required
                       autoComplete='off'
                       value={contact.message}
                       onChange={handleInput}
                       />
                    </div>
                    <button type='submit' className='bg-violet-600 text-white font-medium py-2.5 rounded w-full active:scale-80 transition duration-300'>
                        Submit
                    </button>
                  </form>
                </div>
             </div>
           </div>
          
         </main>
      </section>
      <section >
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4847317060135!2d72.8864024749902!3d19.086379482120375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1780126158428!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
export default Contact