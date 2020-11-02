import React from 'react';
import Navbar from '../Navbar'
import {FormspreeProvider} from '@formspree/react';
import './Contact.css'

function Contact({ Component, pageProps}){
  return(
    <section>
      <Navbar />
      <FormspreeProvider project="1538481092581916254">
        <Component {...pageProps}/>
      </FormspreeProvider>
      <main>
        <h2>Contact me !!</h2>
        <p>If you have any questions, suggestion or you would like to work together.</p>
        <div className="form_Contact">
          <form action="">

            <div className="form_id">
              <label htmlFor="" >Full Name</label>
              <input type="text" name="" id="" placeholder="Bruce Wayne"/>

              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder="bruce@something.com"/>

              <label htmlFor="">Subject</label>
              <input type="text"/>
            </div>

            <div className="form_message">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
            </div>

            <input type="submit" value="submit"/>
          </form>
        </div>
      </main>
    </section>    

    //use formspree to send emails
  )
};

export default Contact;

