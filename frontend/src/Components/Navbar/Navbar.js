import React from 'react';
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
          <a href="/" target="_blank">Login</a>
          <a href="" target="_blank">Contact us</a>
          
        </div>
      </div>
        </>
    )
}

export default Navbar;