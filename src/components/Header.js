import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
