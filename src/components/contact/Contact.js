import React from 'react';
import Navbar from '../Navbar'
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function Contact(){
  const [state, handleSubmit] = useForm("contactForm");
  if(state.succeeded){
    return <p>Thanks for Joining!</p>;
  }

  return(
    <section>
      <Navbar />
      <main>
        <h2>Contact me !!</h2>
        <p>If you have any questions, suggestion or you would like to work together.</p>

        <div className="form_Contact">
          <form 
            onSubmit={handleSubmit} 
            action="https://formspree.io/p/1538481092581916254/f/contactForm"
            method="POST">

            <div className="form_id">
              <label htmlFor="">Full Name</label>
              <input type="text" name="name" id="name" placeholder="Bruce Wayne"/>
              <ValidationError prefix="name" field="name" errors={state.errors} />

              <label htmlFor="email" >Email</label>
              <input type="email" name="email" id="email" placeholder="bruce@something.com"/>
              <ValidationError prefix="email" field="email" errors={state.errors} />

              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="batmobile maintenance"/>
              <ValidationError prefix="subject" field="subject" errors={state.errors} />
            </div>

            <div className="form_message">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting}> Submit </button>
          </form>
        </div>
      </main>
    </section>    

  )
};

export default Contact;

