import React from 'react';
import Navbar from '../Navbar'
import Project from './Project'
import './Projects.css'

function Projects(){
  return(
    <section>
      <Navbar />
      <main>
        <h1>Projects</h1>
        <div className="main_Projects">
          {/* Import data through props */}
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </main>
    </section>

  )
};

export default Projects;