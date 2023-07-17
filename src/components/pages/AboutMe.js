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
          <b>Hello!</b> I am a former healthcare clinician who is excited to put
          to use the new skills I have recently aquired in web development. I am
          looking to use my on the ground clinical experience combined with my
          new web development skills to improve applications in the healthcare
          field. I possess a unique perspective, extreme attention to detail,
          and a perfectionistic drive which will make me a great asset to any
          organization. Please look through the work samples I have provided and
          use the contact information at the end of the page if you have any
          questions. I look forward to a dynamic career in web development where
          I can be a <i>difference maker</i> to <b>your</b> team!
        </p>
      </div>
    </div>
  );
}
