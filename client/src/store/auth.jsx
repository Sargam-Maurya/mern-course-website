import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext() //👉 “I’m creating a global store”

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token")) // logout-2
    const [user, setUser] = useState('') //Auto-Fill Contact Fields
    const [services, setServices] = useState([]) // to fetch services data from backend and make it available globally

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken); // AUTOMATICALLY reflect logout button 
         localStorage.setItem("token", serverToken)
         
    }
    
    let isLoggedIn = !!token
    console.log("isLoggedIn",isLoggedIn) //logout

    //tackling the logout function
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem("token")
        setUser(null)
    }  //logout-3


    //JWT AUTHENTICATION - To get the currently loggedIN user data

    const useAuthentication = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: 'GET',
                headers: {
                    Authorization:`Bearer ${token}`,
                },
            })
            if(response.ok){
                const data = await response.json()
                console.log("user data", data.userData)
                setUser(data.userData)
            }
            
        }
        catch(error){
            console.error("Error fetching user data")
        }
    } //Auto-Fill Contact Fields

    // to fetch services data from backend and make it available globally
    const getServices = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: 'GET'
            })
            if(response.ok){
                const data = await response.json()
                console.log(data.msg)
                setServices(data.msg)
            }
        }
        catch(error){
            console.error(`services frontend error, ${error}`)
        }
    }

    useEffect(() => {
      getServices()
      useAuthentication()
    }, []) //Auto-Fill Contact Fields
    



    return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, services}}>
        {children}
    </AuthContext.Provider>
  )
} //👉 “I am making functions/data available to whole app”

export const useAuth = () => {
    const authContextValue =  useContext(AuthContext)
    if(!authContextValue) {
        throw new Error ("useContext used outside of the provider")
    }
    return authContextValue
}//ls-2 👉 “I can access auth anywhere easily”