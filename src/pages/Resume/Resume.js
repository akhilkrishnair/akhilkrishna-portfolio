import React, { useEffect } from 'react';
import './Resume.css';
import Skills from './components/Skills';
import Education from './components/Education';

const Resume = () => {
  useEffect(() => {
      window.scroll(0,0)
  },[])
  return (
    <main>
        <h1>Resume</h1>
        <Skills />
        <Education />
    </main>
  )
}

export default Resume