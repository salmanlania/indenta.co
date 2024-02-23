import React, { useState, useEffect } from 'react'
import './About.css'
import { OurStory } from '../../components/About/OurStory/OurStory'
import { CoreCompetencies } from '../../components/About/CoreCompetencies/CoreCompetencies'
// import { motion, useAnimation } from 'framer-motion';

import Navbar from '../../components/navbar/Navbar'
import {Footer} from '../../components/Footer/Footer'

export const About = () => {
  useEffect(() => {
    document.title = 'About | Indenta';
  }, []);

  return (
    
      <div style={{
        paddingBottom: '2em'
      }}>
        <Navbar />
        <OurStory  />
        <CoreCompetencies />
        <Footer />
      </div>
  )
}