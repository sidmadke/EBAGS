import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid col-10 p-0">
        <p className='text-white fs-5 my-auto me-5'>WoodWorks</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="">Products</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
          <div className="ms-auto navbar-nav">
            <NavLink className="nav-link" to="/">My Account</NavLink>
            <NavLink className="nav-link" to="/">Cart</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar