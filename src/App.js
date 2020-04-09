import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';

// function App() {
  class App extends Component{
  openNav(){
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
  closeNav(){
    document.getElementById("mySidebar").style.width = "00px";
    document.getElementById("main").style.marginLeft= "0px";
  }
  
    // <Router>
    //   <div className="App container">
    //     <header className="App-header">
    //       <Header />
    //     </header>
    //     <div className='row'>
    //       <ul className='col-lg-3 '>
    //         <li>
    //           <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //           <Link to='/about'>About</Link>
    //         </li>
    //         <li>
    //           <Link to='/contact'>Contact</Link>
    //         </li>
    //       </ul>
    //     <div className='col-lg-9'>
    //       <Switch>
    //         <Route exact path='/' component={Home} />
    //         <Route exact path='/about' component={About} />
    //         <Route exact path='/contact' component={Contact} />
    //       </Switch>
    //     </div>
    //     </div>
    //   </div>
    // </Router>
    render(){
      const openNav ={
        width : "200px",
        // marginLeft : "200px"
      }
      const closeNav ={
        width : "00px",
        marginLeft : "00px"
      }
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className=''>
        <button className="openbtn" style={openNav} onClick= { (e) => this.openNav()}>☰ Menu</button>
        </div>
        
        <div id="mySidebar" className="sidebar">
          
          <a style={closeNav} className="closebtn" onClick = { (e) => this.closeNav()} >×</a>
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div id="main">
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>

    </Router>
  );
}
  }

export default App;
