import React from 'react';
import Navbar from '../Navbar'
import './Home.css'

function Home(){
  return(
    <section className="Content">
      <Navbar />
      <main>
        <p>Hello...</p>
        <h1>Joshua Duke</h1>
        <p>I am a Fullstack Developer </p>

        <p>
        I am a 23 year old student at Seneca College studying Computer programming and analysis. In 2018 i was introduced to web development. I have always had a passion for creating things and in this field i can create anything that i can think of.
        </p>

        
        <a href="/projects">What I've worked on</a>    
      </main>
    </section>
  )
};

export default Home;