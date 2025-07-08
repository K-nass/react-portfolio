import React from "react";
import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      projectImg: "project1.jpg",
      title: "Multi step form",
      desc: "In this frontend challenge, you'll build a Multi-step Form. This challenge is perfect for you if you're interested in building complex and reusable front-end web components and taking your front-end skills to the next level! You can use as many (or as few) tools, libraries, and frameworks as you'd like. If you're trying to learn something new, this might be a great way to push yourself.",
    },
    {
      id: 2,
      projectImg: "project2.jpg",
      title: "E-commerce product page",
      desc: "Your users should be able to: Open a lightbox gallery by clicking on the large product image. Switch the large product image by clicking on the small thumbnail images. Add items to the cart. View the cart and remove items from it. View the optimal layout for the site depending on their device's screen size. See hover states for all interactive elements on the page.",
    },
    {
      id: 3,
      projectImg: "project3.jpg",
      title: "REST Countries API",
      desc: "Users should be able to: See all countries from the API on the homepage. Search for a country using an input field. Filter countries by region. Click on a country to see more detailed information. Click through to the border countries. Toggle light and dark mode. See hover and focus states for all interactive elements.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">My Portfolio</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectTitle={project.title}
              projectImage={project.projectImg}
              projectDescription={project.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
