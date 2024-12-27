import React, {Component} from 'react'
import {Link}  from 'react-router-dom'

const Navbar = ()=>  {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Newsmonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" to="/">About</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Business</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Entertenment</a></li>
        <li className="nav-item"><a className="nav-link" to="/">General</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Helath</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Science</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Sports</a></li>
        <li className="nav-item"><a className="nav-link" to="/">Technlogy</a></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}
export default Navbar