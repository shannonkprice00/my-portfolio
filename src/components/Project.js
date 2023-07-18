import React from "react";
import "../styles/pages.css";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    projectTitle: "Food4Thought",
    deployedAppLink: "https://floating-journey-48487.herokuapp.com/",
    imageSrc: "./assets/Food4Thought.png",
    repoLink: "https://github.com/MVincent15/Food4Thought",
  },
  {
    id: 2,
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
    repoLink: "https://github.com/shannonkprice00/movie-watchlist",
  },
  {
    id: 3,
    projectTitle: "J.A.T.E",
    deployedAppLink: "https://lit-castle-67361-fccb0af3a0da.herokuapp.com/",
    imageSrc: "./assets/JATE.png",
    repoLink: "https://github.com/shannonkprice00/JATE-Text-Editor",
  },
  {
    id: 4,
    projectTitle: "Weather-Dashboard",
    deployedAppLink: "https://shannonkprice00.github.io/weather-dashboard/",
    imageSrc: "./assets/Weather-Dashboard.png",
    repoLink: "https://github.com/shannonkprice00/weather-dashboard",
  },
  {
    id: 5,
    projectTitle: "Work Day Scheduler",
    deployedAppLink: "https://shannonkprice00.github.io/Calendar-Project/",
    imageSrc: "./assets/Workday-Planner.png",
    repoLink: "https://github.com/shannonkprice00/Calendar-Project",
  },
  {
    id: 6,
    projectTitle: "Password Generator",
    deployedAppLink: "https://shannonkprice00.github.io/Password-Generator/",
    imageSrc: "./assets/Password-Generator.png",
    repoLink: "https://github.com/shannonkprice00/Password-Generator",
  },
];

export default function Project() {
  return (
    <div>
      <h1 id="my-portfolio-header">My Portfolio</h1>
      <div className="container d-flex flex-wrap page-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <label className="project-label text-overlay">
              <a className="project-title" href={project.repoLink} target="_blank">{project.projectTitle}
                <a href={project.repoLink} target="_blank">
                  <img className="small-logo" src="./assets/github-mark-black.png" />
                </a>
              </a>
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
    </div>
  );
}
