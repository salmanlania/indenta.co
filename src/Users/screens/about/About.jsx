import React, { useState, useEffect } from 'react'
import './About.css'
import { OurStory } from '../../components/About/OurStory/OurStory'
import { CoreCompetencies } from '../../components/About/CoreCompetencies/CoreCompetencies'
// import { motion, useAnimation } from 'framer-motion';

export const About = () => {
  useEffect(() => {
    document.title = 'About | Indenta';
  }, []);

  return (
    
      <div style={{
        paddingBottom: '2em'
      }}>
        <OurStory  />
        <CoreCompetencies />
      </div>
  )
}