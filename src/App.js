import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import RouterFile from './RouterFile';
import './App.css';

class App extends Component {
  render() {
    return (   
        <div className="App">
          <BrowserRouter>
          <header className="App-header">
            <Header />
          </header>
          <RouterFile />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;