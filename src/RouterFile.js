import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './components/Cart';


class RouterFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSlidebarOpen: false
    }
    this.openSlideBar = this.openSlideBar.bind(this)
  }

  openSlideBar = () => {
    const { isSlidebarOpen } = this.state;
    this.setState({ isSlidebarOpen: !isSlidebarOpen })
  }
  render() {
    return (
      <>
          <button onClick={this.openSlideBar} className='primary-btn'>☰ Menu</button>
          <div className='slide-box'>
        {this.state.isSlidebarOpen && <Box />}
        <div id="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </div>
        </div>
      </>
    )
  }

}
class Box extends Component {
  render() {
    return (
        <div id="mySidebar" className="sidebar">
        <ul >
          <li className="p-10-25">
            <Link to='/'> Home</Link>
          </li>
          <li className="p-10-25">
            <Link to='/about'>About</Link>
          </li>
          <li className="p-10-25">
            <Link to='/contact'><span>&#9998;</span>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default RouterFile;