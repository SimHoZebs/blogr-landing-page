import React from "react";

import Navbar from "./Navbar";
import Image from "next/image";
import ButtonBase from "./ButtonBase";

import style from "../css/hero.module.css";

interface Props {
  menu: { name: string; links: string[] }[];
}
function Hero(props: Props) {
  return (
    <section className={style.hero}>
      <div className={style.bgContainer}>
        <Image
          className="absolute"
          src={"/bg-pattern-intro.svg"}
          alt=""
          height={1000}
          width={1000}
        />
      </div>

      <Navbar menu={props.menu} />

      <header className={style.hero__header}>
        <h1 className="leading-tight font-bold">
          A modern publishing platform
        </h1>

        <p>Grow your audience and build your online brand</p>
      </header>

      <div className={style.btnContainer}>
        <ButtonBase className={style.cta}>Start for Free</ButtonBase>

        <ButtonBase>Learn More</ButtonBase>
      </div>
    </section>
  );
}

export default Hero;
