import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg primary-color navbar-dark">
      <div className="container-fluid col-10 p-0 max-width-1600">
        <NavLink class="navbar-brand me-5 logo" to="/"><img src="../images/textbag.png" alt="Thorat Bags" width="170" height="40" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <NavLink className="nav-link text-dark" aria-current="page" to="/home"><h5>Home</h5></NavLink>
            <a className="nav-link text-dark" href="#Category"><h5>Products</h5></a>
            <NavLink className="nav-link text-dark" to="/about"><h5>About</h5></NavLink>
            <NavLink className="nav-link text-dark" to="/contact"><h5>Contact</h5></NavLink>
          </div>
          <div className="ms-auto navbar-nav">
            <NavLink className="nav-link" to="/login"><img src="../images/login.png" alt="Login" /></NavLink>
            <NavLink className="nav-link" to="/cart"><img src="../images/cart.png" alt="Cart" /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar