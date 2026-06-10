import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminContacts = () => {
  const [contactsData, setContactsData] = useState([])

  const {authorizationToken, API } = useAuth()
   
  const getContactsData = async () => {
    try{
      const response = await fetch(`${API}/api/admin/contacts`, {
         method: "GET" ,
         headers: {
          Authorization : authorizationToken,
          'Content-Type': 'application/json'
         },
      })
      const data = await response.json()
      console.log('contact data: ', data)
      // setContacts(data)
      if(response.ok){
       setContactsData(data)
      }
    }
    catch(error){
      console.log(error)
    }
  }

   //delete the contacts on delete button 
    const deleteContact = async (id) => {
      try{
        const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization : authorizationToken,
                    'Content-Type': 'application/json'
                },
            })

            const data = await response.json()
            console.log(`users after delete ${data}`)
            if(response.ok){
              getContactsData() // ye delete hone ke baad call kiya becaz automatiucally wo reflect ho delete wala function
              toast.success("deleted Successfully")
            }else{
              toast.error("Not deleted")
            }
      }
      catch(error){
        console.log(error)
      }
    }  //delete s-1
    
  useEffect(() => {
    getContactsData()
  }, [])
  
  return (
     <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/5">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Message</th>
            <th className="px-6 py-4">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {contactsData.map((items, index) => (
            <tr key={index} className="text-gray-700 transition-colors hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"> {items.username}</td>
              <td className="px-6 py-4">{items.email}</td>
              <td className="px-6 py-4">{items.message}</td>
              {/* //delete s-1 */}
              <td className="px-6 py-4"> 
                <button onClick={() => deleteContact(items._id) } className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-1.5 text-red-600 transition-colors hover:bg-red-100 hover:text-red-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminContacts