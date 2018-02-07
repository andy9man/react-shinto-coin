import React, { Component } from 'react';
import './App.css';
import {Navigation} from './components/nav';
import Home from './views/Home';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="App">
        <img src='./shintocoin.jpeg' />
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
