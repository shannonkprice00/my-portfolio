import React from "react";
// Here we import the Navbar.css file to grant access to some additional class names
// import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Shannon Price</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'} href="#ContactMe" onClick={() => handlePageChange('ContactMe')}>Contact Me</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
