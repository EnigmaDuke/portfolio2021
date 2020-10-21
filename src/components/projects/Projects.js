import React from 'react';
import Navbar from '../Navbar'
import Project from './Project'

function Projects(){
  return(
    <section>
      <Navbar />
      <main>
        {/* Import data through props */}
        <Project />
        <Project />
      </main>
    </section>

  )
};

export default Projects;