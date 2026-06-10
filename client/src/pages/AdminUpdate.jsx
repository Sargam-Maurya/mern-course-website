import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //used for update the user
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminUpdate = () => {
    
    const [data, setData] = useState({
        username: '',
        email:'',
        phone: '',
    })

    const {authorizationToken, API} = useAuth()

    const params = useParams() //used for update the user
    //update the user on delete button 
    const getSingleUserData = async () => {
      try{
        const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method: 'GET',
                headers: {
                    Authorization : authorizationToken,
                    "Content-Type": "application/json"
                },
            })

            const data = await response.json()
            console.log(`users single data  ${data}`)
            setData(data)
            // if(response.ok){
            //   getAllUsersData()
            // }
      }
      catch(error){
        console.log(error)
      }
    }

    useEffect(() => {
        getSingleUserData()
    }, [])
    

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({
            ...data,
            [name] : value,
        })
    }

    // to update the data dynamically 
    const handleSubmit = async (e) => {
      e.preventDefault()

      try{
        const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
            method: 'PATCH',
                headers: {
                    Authorization : authorizationToken,
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(response.ok){
            toast.success("Update successfully")
        }else{
            toast.error("not updated")
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
                 {/* <div className='registration-image p-5 md:p-10'>
                    <ContactIllustration className='w-full h-auto'/>
                 </div> */}
                 <div className='registration-form p-5 md:p-10'>
                   <h1 className='main-heading mb-3 text-white text-2xl md:text-4xl'>Update User Data</h1>
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
                       value={data.username}
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
                       value={data.email}
                       onChange={handleInput}
                       />
                    </div>
                    <div className='text-white mb-5'>
                       <label htmlFor="phone" className="text-neutral-300 text-sm font-medium tracking-wide">Phone</label>
                       <input 
                       className="mt-2 w-full px-3 py-2 bg-neutral-800 border border-neutral-700/60 rounded-md text-white 
                       placeholder-neutral-500 outline-none
                      transition-all duration-200 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
                       type="text" 
                       name='phone'
                       placeholder='Enter your phone number'
                       id='phone'
                       required
                       autoComplete='off'
                       value={data.phone}
                       onChange={handleInput}
                       />
                    </div>
                    <button type='submit' className='bg-violet-600 text-white font-medium py-2.5 rounded w-full active:scale-80 transition duration-300'>
                        Update
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

export default AdminUpdate