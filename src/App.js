import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './components/NavigationBar'
import Queso from './components/queso'
import AboutQueso from './components/aboutQueso'

function App() {
  return (
 
 
    <Router>
      <NavigationBar>
      </NavigationBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <Queso></Queso>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <AboutQueso></AboutQueso>
    </div>
  );
}



export default App;
