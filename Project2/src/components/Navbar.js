import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsHunter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Buisness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">General</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/">Health</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Entertainment</a>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link" href="/">Science</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
