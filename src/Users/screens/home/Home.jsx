import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Home/header/Header'
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs'
import WhyIndentaDSA from '../../components/Home/WhyIndentaDSA/WhyIndentaDSA'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyChooseUs />
      <WhyIndentaDSA />
    </div>
  )
}