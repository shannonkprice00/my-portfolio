import React from "react";
import "../../styles/pages.css";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="container-fluid page-container">
      <h3 id="resume-heading">Download my <a id="resume-link" href="./assets/resume.pdf" target="_blank">resume</a></h3>
      <div id="resume-card-div" className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xs-12 mb-3 mb-sm-0">
          <div className="card proficiency-cards">
            <div className="card-body">
              <h5 className="card-title proficiency-titles">Front-end Proficiencies</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">Google Fonts</li>
                <li className="list-group-item">Day.js</li>
                <li className="list-group-item">React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xs-12">
          <div className="card proficiency-cards">
            <div className="card-body">
              <h5 className="card-title proficiency-titles">Back-end Proficiencies</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">SQL</li>
                <li className="list-group-item">Squelize</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">REST</li>
                <li className="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <h5>Front-end Proficiencies</h5>
      <ul>
        
      </ul>
      <h5>Back-end Proficiencies</h5>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL, Squelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul> */}
    </div>
  );
}
