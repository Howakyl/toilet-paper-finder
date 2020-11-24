import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import TpIndex from './pages/TpIndex';
import Navbar from './components/Navbar';
import './App.css';
import StoreShow from './pages/StoreShow';

class App extends React.Component {
  render () {
    return (
      <div>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/index' component={TpIndex} />
          <Route path='/stores/:id' component={StoreShow}/>
        </Switch>
      </div>
    );
  }
};

export default App;
