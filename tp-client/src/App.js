import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import TpIndex from './pages/TpIndex';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/index' component={TpIndex} />
      </Switch>
    </div>
  );
};

export default App;
