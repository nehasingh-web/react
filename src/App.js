import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RouterFile from './RouterFile';

function App() {
//class App extends Component {
 // render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <RouterFile />
      </div>
    );
  //} 
}

export default App;
