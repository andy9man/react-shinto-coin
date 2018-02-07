import React, { Component } from 'react';
import './App.css';
import {Navigation} from './components/nav';
import Home from './views/Home';
import Mine from './views/Mine';
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
        </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
