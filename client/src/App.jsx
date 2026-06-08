import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'
import Logout from './pages/Logout'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <BrowserRouter>
        <Navbar/>
        <div className='flex-1 pt-16'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/service' element={<Service/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/logout' element={<Logout/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App