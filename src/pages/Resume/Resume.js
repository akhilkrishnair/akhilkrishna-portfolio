import React from 'react';
import './Resume.css';
import Skills from './components/Skills';
import Education from './components/Education';

const Resume = () => {
  return (
    <main>
        <h1>Resume</h1>
        <Skills />
        <Education />
    </main>
  )
}

export default Resume