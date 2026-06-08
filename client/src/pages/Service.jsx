import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {

  const {services} = useAuth();
  // const [services, setServices] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const res = await fetch('http://localhost:5000/api/data/service')
  //       const data = await res.json()
  //       setServices(data.msg)
  //     } catch (err) {
  //       console.error('Error fetching services:', err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchServices()
  // }, [])

  // if (loading) return <div className="text-white text-center mt-20 text-xl">Loading...</div>

  return (
    <section className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-sm md:text-lg text-gray-400">We offer a wide range of IT services to help your business grow.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-violet-600/20 hover:border-violet-600 transition duration-300">
            <h2 className="text-2xl font-semibold text-violet-500 mb-3">{item.service}</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
            <p className="text-gray-400 mb-1"><span className="text-violet-400 font-medium">Provider:</span> {item.provider}</p>
            <p className="text-2xl font-bold text-violet-400">₹{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service