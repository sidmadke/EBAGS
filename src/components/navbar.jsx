import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid col-10">
        <Link className="navbar-brand" to="/">WoodWorks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/">Products</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">My Account</Link>
            <Link className="nav-link" to="/">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar