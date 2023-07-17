import React from 'react';
import "../../styles/pages.css";

export default function Resume() {
  return (
    <div className="container-fluid page-container">
      <p>Download my <a href="./assets/resume.pdf" target="_blank">resume</a></p>
      <h5>Front-end Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>Google Fonts</li>
        <li>Day.js</li>
        <li>React</li>
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
      </ul>
    </div>
  );
}