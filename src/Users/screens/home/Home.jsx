import React, { useEffect , useState } from 'react';
import './Home.css';
import Header from '../../components/Home/header/Header';
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs';
import HomeVideo from '../../components/Home/HomeVideo/HomeVideo';
import WhyIndentaDSA from '../../components/Home/WhyIndentaDSA/WhyIndentaDSA';
import IndentaInfo from '../../components/Home/indentaInfo/indentaInfo';
import Popular from '../../components/Home/Popular/Popular';
import Careers from '../../components/Home/Careers/Careers'

export const Home = () => {
  useEffect(() => {
    document.title = 'Home | Indenta';

  }, []);
  return (
    <div className='Home'>
      <Header />
      {/* <Popular className='HomePopular'/> */}
      <WhyChooseUs className='WhyChooseUs' />
      <IndentaInfo />
      <WhyIndentaDSA />
      <Careers />
      {/* <HomeVideo /> */}
    </div>
  )
}