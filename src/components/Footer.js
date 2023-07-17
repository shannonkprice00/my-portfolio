import React from "react";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer mt-2">
      <ul className="nav footer justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/shannonkprice00" target="_blank">
            <img id="github-black"src="./assets/github-mark-black.png" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/shannonkprice00?original_referer=" target="_blank">
          <img id="linkedin-black"src="./assets/linkedin-black.png" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.facebook.com/shannon.price.948" target="_blank">
          <img id="facebook-black"src="./assets/facebook-black.png" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
