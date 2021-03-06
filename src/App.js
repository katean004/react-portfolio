import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/projects" component = {Projects} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
