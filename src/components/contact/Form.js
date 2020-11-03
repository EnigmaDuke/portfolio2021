import React from 'react.js';
import {FormspreeProvider} from '@formspree/react';

function Form({ Component, pageProps}) {
  return(
    <FormspreeProvider project="1538481092581916254">
      <Component {...pageProps}/>
    </FormspreeProvider>
  )
}

export default Form;