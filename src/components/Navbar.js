import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <aside>
      <ul>
        <li>LOGO</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <ul>
            <li>twitter</li>
            <li>linkedIn</li>
            <li>Github</li>
          </ul>
        </li>
      </ul>
    </aside>
  )
};

export default Navbar;