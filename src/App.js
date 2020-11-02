import React, {Component} from 'react';
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom';
import './App.css'

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Blog from './components/blog/Blog';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';

function App() {
  return (
    <section className="App">
      {/* switch: Ensures that only one component is rendered at a time  */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/*" to="/" />
      </Switch>

    </section>
  );
}

export default App;
