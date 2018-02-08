import React, { Component } from 'react';
import './App.css';
import {Navigation} from './components/Nav';
import Home from './views/Home';
import Mine from './views/Mine';
import Buy from './views/Buy';
import Sell from './views/Sell';
import Ledger from './views/Ledger';
import Transaction from './views/Transaction';
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
        <div className="margin-horiz-large">
          <div className="small-12 medium-10">

            <div className="row margin-bottom-xlarge">

              <div className="small-2 medium-2 large-1 columns">
                <img className="logo" src={logo} alt="ShintoCoin Logo" />
              </div>

              <div className="small-10 medium-10 columns margin-vert-medium">
                <Navigation />
              </div>

            </div>

            <div className="row">

              <div className="margin-horiz-xlarge small-12 medium-10 medium-centered columns">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/mine' component={Mine} />
                  <Route path='/buy' component={Buy} />
                  <Route path='/sell' component={Sell} />
                  <Route path='/ledger' component={Ledger} />
                  <Route path='/transaction' component={Transaction} />
                </Switch>
              </div>

            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
