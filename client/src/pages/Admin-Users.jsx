import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'

const AdminUsers = () => {
    const [users, setUsers] = useState([])
     
    const {authorizationToken, API} = useAuth()

    //data fetch from backend 
    const getAllUsersData = async() => {
        try{    
            const response = await fetch(`${API}/api/admin/users`, {
                method: 'GET',
                headers: {
                    Authorization : authorizationToken,
                    "Content-Type": "application/json"
                },
            })
            const data = await response.json()
            console.log(`users ${data}`)
            setUsers(data)
        }
        catch(error){
            console.log(error)
        }
    }

    //delete the user on delete button 
    const deleteUser = async (id) => {
      try{
        const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization : authorizationToken,
                    'Content-Type': 'application/json'
                },
            })

            const data = await response.json()
            console.log(`users after delete ${data}`)
            if(response.ok){
              getAllUsersData()
            }
      }
      catch(error){
        console.log(error)
      }
    }  //delete s-1



    useEffect(() => {
        getAllUsersData()
    }, [])
    

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/5">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Update</th>
            <th className="px-6 py-4">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((items, index) => (
            <tr key={index} className="text-gray-700 transition-colors hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"> {items.username}</td>
              <td className="px-6 py-4">{items.email}</td>
              <td className="px-6 py-4">{items.phone}</td>
              <td className="px-6 py-4">
                {/* <button className="flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-indigo-600 transition-colors hover:bg-indigo-100 hover:text-indigo-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button> */}
                <Link to={`/admin/users/${items._id}/edit`}>Edit</Link>
              </td>
              {/* //delete s-1 */}
              <td className="px-6 py-4"> 
                <button onClick={()=>deleteUser(items._id)} className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-1.5 text-red-600 transition-colors hover:bg-red-100 hover:text-red-700">
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

export default AdminUsers
