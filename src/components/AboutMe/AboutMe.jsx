import React from "react";
import style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className="about bg-white py-5">
      <div className="container">
        <h2 className="display-5 fw-semibold mb-4 text-center">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="fs-5 mb-3 text-secondary">
              I’m a front-end developer with a background in Computer Science. I
              have experience building responsive websites using HTML, CSS,
              JavaScript, and React. I’m passionate about clean code and UI/UX
              best practices.
            </p>
            <p className="fs-5 mb-4 text-secondary">
              I graduated from Arab Academy University and have worked on
              several real-world projects including dashboards and portfolio
              sites. I'm currently open to new opportunities to grow in a
              tech-driven environment.
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="assets/CV.pdf"
                download
                className="btn btn-outline-primary btn-lg shadow-sm"
              >
                <i className="bi bi-download me-2"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
