import React from "react";
import  style from './ProjectCard.module.css'

export default function ProjectCard({projectTitle,projectImage,projectDescription}) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card portfolio-card h-100 rounded-3 overflow-hidden border-0 shadow-sm">
        <div className="card-img">
          <img src= {`/assets/${projectImage}`} alt="" />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold">{projectTitle}</h5>
          <p className="card-text text-muted flex-grow-1">{projectDescription}</p>
        </div>
      </div>
    </div>
  );
}
