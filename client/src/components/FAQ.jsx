import React, { useState } from 'react'
import { useTheme } from '../store/theme'

const faqs = [
  { q: 'How do I enroll in a course?', a: 'Simply browse our courses, click "Enroll Now", and follow the checkout process. You\'ll get instant access after payment.' },
  { q: 'Are the courses self-paced?', a: 'Yes, all our courses are self-paced. You can learn at your own speed and revisit the material anytime.' },
  { q: 'Do you offer certificates?', a: 'Absolutely! Upon completing a course, you will receive a certificate that you can share on LinkedIn or your resume.' },
  { q: 'What payment methods are accepted?', a: 'We accept all major credit/debit cards, UPI, and net banking. All transactions are secure and encrypted.' },
  { q: 'Can I get a refund?', a: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with the course.' },
  { q: 'Is there any support available?', a: 'Our 24/7 support team is here to help you with any questions or technical issues you may face.' },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className={`py-12 px-5 md:px-10 ${isLight ? 'bg-gray-50' : 'bg-black'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-4xl font-bold mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>Frequently Asked Questions</h2>
          <p className={`text-sm md:text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>Got questions? We have answers.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-xl overflow-hidden ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-gray-900 border-gray-800'}`}>
              <button onClick={() => toggle(index)} className={`w-full flex items-center justify-between p-5 text-left font-medium transition duration-300 ${isLight ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-gray-800'}`}>
                <span className="text-sm md:text-base">{faq.q}</span>
                <svg className={`w-5 h-5 text-violet-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className={`px-5 pb-5 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
