import React from 'react'
import StatsSection from '../components/StatsSection'
import HeroSection from '../components/HeroSection'
import FeaturedCourses from '../components/FeaturedCourses'
import CourseCategories from '../components/CourseCategories'
import WhyChooseUs from '../components/WhyChooseUs'
import Instructors from '../components/Instructors'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <FeaturedCourses/>
      <CourseCategories/>
      <WhyChooseUs/>
      <Instructors/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}
export default Home