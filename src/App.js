import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RouterFile from './RouterFile';



// function App() {
  class App extends Component{
  
  
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
    return (
      <div className="App">
              <header className="App-header">
                <Header />
              </header>
              
     <RouterFile />
     </div>
  );
}
  }

export default App;
