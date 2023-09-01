import React from "react";
import "../../styles/AboutMe.css";
import "../../styles/pages.css";

export default function AboutMe() {
  return (
    <div className="container-fluid page-container">
      <h2 id="about-me">About Me</h2>
      <div className="about-me d-flex">
        <img
          src="./assets/Headshot1.JPEG"
          alt="image of Shannon"
          id="profile-picture"
          className="responsive-img"
        />
        <p>
          <b>Hello!</b> With a passion for problem-solving and a strong
          foundation in software development, I am eager to contribute my skills
          and knowledge as a Software Engineer. Through an intensive bootcamp
          certification, I have gained hands-on experience in programming
          languages, frameworks, and technologies, including JavaScript,
          HTML/CSS, SQL, React.js, MongoDB and much more. My commitment to
          excellence has allowed me to quickly learn new applications and gain
          recognition as a leader in the classroom. Before I dove into
          technology, I gained professional experience as a Physical Therapist
          Assistant. In this career, I collaborated with internal partners to
          deliver exceptional client care. My strong analytical skills and
          attention to detail empowered me to identify and rectify issues
          promptly, ensuring smooth project execution. Please visit the
          portfolio section to view my skills in action!
        </p>
      </div>
    </div>
  );
}
