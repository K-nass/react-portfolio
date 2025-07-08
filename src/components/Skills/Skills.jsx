import React from "react";
import style from "./Skills.module.css";

export default function Skills() {
  const skillsProgress = [
    { skillName: "html", progress: "90" },
    { skillName: "CSS", progress: "85" },
    { skillName: "Javascript", progress: "80" },
    { skillName: "React", progress: "50" },
  ];
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5 text-primary">My Skills</h2>
      <div className="row">
        {skillsProgress.map((skill, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="skill-box p-3 bg-light rounded shadow-sm">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{skill.skillName}</span>
                <span className="text-muted">{skill.progress}%</span>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  style={{ width: `${skill.progress}%` }}
                  aria-valuenow={skill.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
