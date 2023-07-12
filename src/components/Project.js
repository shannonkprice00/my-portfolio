import React from "react";
import "../styles/pages.css";
import "../styles/Portfolio.css";

const projects = [
  {
    projectTitle: "Food4Thought",
    deployedAppLink: "https://floating-journey-48487.herokuapp.com/",
    imageSrc: "./assets/Food4Thought.png",
    repoLink: "https://github.com/MVincent15/Food4Thought",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
    repoLink: "https://github.com/shannonkprice00/movie-watchlist",
  },
  {
    projectTitle: "J.A.T.E",
    deployedAppLink: "https://lit-castle-67361-fccb0af3a0da.herokuapp.com/",
    imageSrc: "./assets/JATE.png",
    repoLink: "https://github.com/shannonkprice00/JATE-Text-Editor",
  },
  {
    projectTitle: "Weather-Dashboard",
    deployedAppLink: "https://shannonkprice00.github.io/weather-dashboard/",
    imageSrc: "./assets/Weather-Dashboard.png",
    repoLink: "https://github.com/shannonkprice00/weather-dashboard",
  },
  {
    projectTitle: "Work Day Scheduler",
    deployedAppLink: "https://shannonkprice00.github.io/Calendar-Project/",
    imageSrc: "./assets/Workday-Planner.png",
    repoLink: "https://github.com/shannonkprice00/Calendar-Project",
  },
  {
    projectTitle: "Password Generator",
    deployedAppLink: "https://shannonkprice00.github.io/Password-Generator/",
    imageSrc: "./assets/Password-Generator.png",
    repoLink: "https://github.com/shannonkprice00/Password-Generator",
  },
];

export default function Project() {
  return (
    <div className="container-fluid d-flex page-container">
      <h1>My Portfolio</h1>
      {projects.map((project) => (
        <div className="project">
          <label className="project-label">
            <p>{project.projectTitle}</p>
            <a href={project.repoLink} target="_blank">GitHub Repo</a>
          </label>
          <a href={project.deployedAppLink} target="_blank">
            <img
              src={project.imageSrc}
              alt="image of project-1"
              className="project-images"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
