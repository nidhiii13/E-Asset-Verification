import React from 'react';
import { Link } from 'react-router-dom';
import  "./Navbar.css"
const Navbar = () => {
    return (
        <>
        <div className="header">
          <p></p>
        </div>
        <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            Home
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
        <a href="http://127.0.0.1:8000/admin/" target="_blank">Admin</a>
          <a href="/" >Login</a>
          <Link to ="/contact" target="_blank">Contact us</Link>
          
        </div>
      </div>
        </>
    )
}

export default Navbar;