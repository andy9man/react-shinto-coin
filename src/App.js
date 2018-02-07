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
        <div className="row margin-vert-large margin-horiz-large">
          <div className="small-12 medium-10">

            <div className="row">
              <div className="small-2 medium-1 columns">
                <img style={{width: 75}} src={logo} alt="ShintoCoin Logo" />
              </div>
              <div className="small-10 medium-11 columns margin-vert-large">
                <Navigation />
              </div>
            </div>
            <div className="row margin-left-xlarge">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/mine' component={Mine} />
                <Route exact path='/buy' component={Buy} />
                <Route exact path='/sell' component={Sell} />
                <Route exact path='/ledger' component={Ledger} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
