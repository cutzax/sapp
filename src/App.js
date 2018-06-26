import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Test from './Test.jsx'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <NavBar/>
          <Route path="/home" component={Test} />
          <Route path="/archives" component={Test} />
          <Route path="/features" component={Test} />
          <Route path="/contact" component={Test} />
          <Route path="/about" component={Test} />
      </div>
      </Router>
    );
  }
}

export default App;
