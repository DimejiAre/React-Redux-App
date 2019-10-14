import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Beers from './components/Beers';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'><NavBar /></Route>
        <Route exact path='/'><Home /></Route>
        <Route path='/beers'><Beers /></Route>
      </div>
    </Router>
  );
}

export default App;
