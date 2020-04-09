import React, { Component } from 'react';
import logo from '../assets/nykaa_logo.svg'
class Header extends Component{
    render(){
        return (
            <div className='header'>
                <div className='logo-box'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='user-header-info'>
                    some User info
                </div>
            </div>
        )
    }

}
export default Header;