import React, { Component } from 'react';
import './App.css';
import {Navigation} from './components/nav';
import Home from './views/Home';
import Mine from './views/Mine';
import Buy from './views/Buy';
import Sell from './views/Sell';
import Ledger from './views/Ledger';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import logo from './shintocoin.jpeg'


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="App">
        <img style={{width: 75}} src={logo} />
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mine' component={Mine} />
          <Route exact path='/buy' component={Buy} />
          <Route exact path='/sell' component={Sell} />
          <Route exact path='/ledger' component={Ledger} />
        </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
