import React from 'react';
import './Project.css'

function Project(){
  return(
    <div className="project_container">
      <div className="title_container">
        <h2 className="title">Title</h2>
      </div>
      <div className="img_container">
        <img src="" alt="" className="project_image"/>
      </div>
      <div className="summary_container">
        <p className="project_summary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam quod, explicabo modi excepturi cumque?
        </p>
      </div>
      <div className="links_container">
        <a href="#" className="project_links">Live View</a>
        <a href="#" className="project_links">Github Code</a>
        <a href="#" className="project_links">Read about this project</a>
      </div>
      <ul>
        <li>Tag</li>
        <li>Tag</li>
        <li>Tag</li>
      </ul>
    </div>
  )
}

export default Project