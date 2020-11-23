import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <h1>hi</h1>
    </div>
  );
};

export default App;
