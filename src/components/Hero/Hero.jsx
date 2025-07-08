import React from "react";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${style.hero} text-white text-center py-5 overlay`}>
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">Kareem Nasser</h1>
        <h2 className={`h4 fw-light text-white-75 title ${style.title}`}>
          Front End Developer
        </h2>
      </div>
    </section>
  );
}
