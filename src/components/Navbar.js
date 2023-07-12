import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid m-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <h2>Shannon Price</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="#AboutMe"
                onClick={() => handlePageChange("AboutMe")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
                href="#Portfolio"
                onClick={() => handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "ContactMe" ? "nav-link active" : "nav-link"
                }
                href="#ContactMe"
                onClick={() => handlePageChange("ContactMe")}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
