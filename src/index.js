import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  // does all the logic of displaying various components that you provide it with

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


/**  Challenges: 
 * 
 * Creating a multipage application
*/
