import React from "react";

import Navbar from "./Navbar";

import style from "../css/hero.module.css";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.bgContainer}>
        <img className={style.hero__bg} src={"/bg-pattern-intro.svg"} alt="" />
      </div>

      <Navbar />

      <header className={style.hero__header}>
        <h1>A modern publishing platform</h1>

        <p>Grow your audience and build your online brand</p>
      </header>

      <div className={style.btnContainer}>
        <button className={style.cta}>Start for Free</button>

        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
