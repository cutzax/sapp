import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div>
      <Contact />
      <About />
      </div>
    );
  }
}

export default App;
