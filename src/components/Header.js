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
                   Settings
                </div>
            </div>
        )
    }

}
export default Header;