import React from "react";
import Portfolio from "./pages/Portfolio";
import "../styles/pages.css";
import "../styles/Portfolio.css";

const projects = [
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
  {
    projectTitle: "Movie-Geeks-Watchlist",
    deployedAppLink: "https://shannonkprice00.github.io/movie-watchlist/",
    imageSrc: "./assets/Movie-Watchlist.png",
  },
];

export default function Project() {
  return (
    <div className="container-fluid page-container">
      <h1>My Portfolio</h1>
      {projects.map((project) => (
        <div className="project">
          <label className="project-label">
            <h4>{project.projectTitle}</h4>
          </label>
          <a href={project.deployedAppLink}>
            <img
              src={project.imageSrc}
              alt="image of project-1"
              className="smaller-images"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
