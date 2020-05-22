import React from 'react';
import logo from '../assets/nykaa_logo.svg';
import cartImg from '../assets/cart1.svg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="nav-wrapper">
            <div className="header">
                <div className="logo-box"><Link to="/"><img src={logo} alt='Logo' className='cursor-pointer'/></Link> </div>
                <div className="user-header-info">
                <Link to="/cart"><img src={cartImg} alt='cartImg' className='cursor-pointer'/></Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;


