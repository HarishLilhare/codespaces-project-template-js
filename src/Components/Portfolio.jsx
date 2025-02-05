

import React from "react";

import image from "../images/33290.jpg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "ECommerce Websites & applications 🎉",
    description:
      "A responsive e-commerce clone inspired by Amazon/Flipkart featuring login, product browsing, search, filters, sorting, and secure JWT-based authentication.",
    url: " https://harishnxt.ccbp.tech/",
  },
  {
    title: "Food Much Web Development ",
    description:
      "Food and web development intersect in restaurant websites, food delivery apps, and recipe platforms.",
    url: "https://harishlilhare.ccbp.tech/",
  },
  {
    title: "App Store",
    description:
      "Created from App Store display Multiple app like Game,Food,News,Social Media etc. Includes my experience and design abilities.",
    url: "https://harishapp.ccbp.tech/",
  },
  {
    title: "Pokémon evolution App",
    description:
      "Pokémon evolution is the transformation of a Pokémon into a stronger form, unlocking new abilities and stats.",
    url: "https://pokemonhari.ccbp.tech/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
