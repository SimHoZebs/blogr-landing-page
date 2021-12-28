import React, { useState } from "react";

import menuData from "./menuData";

import style from "../css/menu.module.css";
import util from "../css/util.module.css";
import Link from "next/link";

function Menu({ menuBlockOpen, windowWidth }) {
  const [openMenu, setOpenMenu] = useState();

  const desktopWidth = 768;

  function openThisMenu(name) {
    setOpenMenu((prev) => (prev === name ? "" : name));
  }
  function isDesktopView() {
    return windowWidth >= desktopWidth ? true : false;
  }

  function menuOpen(menu) {
    return openMenu === menu.name ? true : false;
  }

  return (
    <div
      className={`
      ${style.nav}
      ${isDesktopView() || !menuBlockOpen || util.shadow}
      ${menuBlockOpen || style.menuClose} 
      `}
    >
      <div className={style.nav__menuBar}>
        {menuData.map((menu) => (
          <div key={menu.name} className={style.nav__menuContainer}>
            <button
              className={`
                ${style.nav__menuBtn}
                ${menuOpen(menu) && style.nav__menuSelected}
              `}
              onClick={() => openThisMenu(menu.name)}
            >
              <span className={style.nav__btnName}>{menu.name}</span>

              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className={`
                  ${style.arrow}
                  ${menuOpen(menu) && style.arrow_close}
                `}
                src={
                  windowWidth >= desktopWidth
                    ? "/icon-arrow-light.svg"
                    : "/icon-arrow-dark.svg"
                }
                alt=""
              />
            </button>

            <div
              className={`
                ${style.nav__linkContainer}
                ${isDesktopView() && menuOpen(menu) && util.shadow}
                ${menuOpen(menu) || style.menuClose}
              `}
            >
              {menu.links.map((link) => (
                <Link key={link} href="/">
                  <a className={style.nav__link}>{link}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className={style.credentials}>
        <Link href="/">
          <a className={style.login}> Login </a>
        </Link>
        <Link href="/">
          <a className={`${style.signup} ${util.shadow}`}>Sign Up</a>
        </Link>
      </section>
    </div>
  );
}

export default Menu;
