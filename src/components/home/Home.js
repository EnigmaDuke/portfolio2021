import React from 'react';
import Navbar from '../Navbar'

function Home(){
  return(
    <section>
      <Navbar />
      <p>Hello...</p>
      <h1>Joshua Duke</h1>
      <p>I am a fullstack developer </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi suscipit libero sapiente mollitia exercitationem ipsa, sequi veritatis aspernatur at non commodi harum illum sunt pariatur inventore fuga reprehenderit quas nisi possimus nam. Necessitatibus aperiam perferendis unde expedita fugit officiis, eius culpa et, repudiandae laborum commodi, tenetur quo tempore cum.</p>
      <a href="/projects">See my projects</a>
    </section>
  )
};

export default Home;