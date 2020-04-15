import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


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
      <Router>
          <button onClick={this.openSlideBar}>☰ Menu</button>
          <div className='slide-box'>
        {this.state.isSlidebarOpen && <Box />}
        <div id="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
        </div>
      </Router>

    )
  }

}
class Box extends Component {
  render() {
    return (
        <div id="mySidebar" className="sidebar">
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
    )
  }
}
export default RouterFile;