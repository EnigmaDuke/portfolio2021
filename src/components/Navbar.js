import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return(
    <aside>
      <h2>LOGO</h2>
      <div className="Container">

      <ul className="link_container">

        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/">Resume</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/projects">Projects</Link>  
          </li>
        </div>
        <div>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/timeline">Timeline</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>     
        <div className="Social_Icons">
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>

          <Link to="/">
            <i className="fab fa-linkedin"></i>
          </Link>

          <Link to="/">
            <i className="fab fa-github-square"></i>
          </Link>
          
          <Link to="">
            <i className="fab fa-instagram-square"></i>
          </Link>
        </div>                   
        <p>Copyright @ 2020</p>
      </ul>
      </div>
      
    </aside>
  )
};

export default Navbar;