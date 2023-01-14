import React from 'react'
import {BsCart4} from 'react-icons/bs'
import LOGO from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar" id='navbar'>
        <div className="container navbarContainer">
            <div className="logo">
                <img src={LOGO} alt="logo" width='50' />
            </div>
            <div className="nav">
                <ul className='navList'>
                    <li><a href="#">Home</a></li>
                    <li><button className='btn'>Cart <BsCart4 /></button></li>
                </ul>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Navbar