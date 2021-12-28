import React, { useState, useEffect } from "react";

import mainData from "./mainData";
import Article from "./Article";

import style from "../css/main.module.css";

function Main() {
  const [windowWidth, setWindowWidth] = useState();

  const resizeEvent = () => {
    setWindowWidth((prev) => window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth((prev) => window.innerWidth);
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  function data(index) {
    return mainData[index];
  }

  function isDesktopView() {
    return windowWidth >= 768 ? true : false;
  }

  return (
    <div className={style.mainContainer}>
      <Article
        data={data(0)}
        img={
          isDesktopView()
            ? "/illustration-editor-desktop.svg"
            : "/illustration-editor-mobile.svg"
        }
        side={"right"}
      />

      <Article data={data(1)} isInfra={true} img={"/illustration-phones.svg"}>
        <div className={style.infra__imgContainer}>
          <img
            className={style.infra__bg}
            src={"/bg-pattern-circles.svg"}
            alt=""
          />
        </div>
      </Article>

      <Article
        data={data(2)}
        img={
          isDesktopView()
            ? "/illustration-laptop-desktop.svg"
            : "/illustration-laptop-mobile.svg"
        }
        side={"left"}
      />
    </div>
  );
}

export default Main;
