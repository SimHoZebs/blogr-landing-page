import React, { useState } from 'react'

import menuData from './menuData'

import style from '../css/menu.module.css'
import util from '../css/util.module.css'

import arrowDark from '../images/icon-arrow-dark.svg';
import arrowLight from '../images/icon-arrow-light.svg';

function Menu({ menuBlockOpen, windowWidth }) {
  const [openMenu, setOpenMenu] = useState();

  const desktopWidth = 768;

  function openThisMenu(name) {
    setOpenMenu(prev => (prev === name ? "" : name))
  }
  function isDesktopView() {
    return windowWidth >= desktopWidth ? true : false
  }

  function menuOpen(menu) {
    return openMenu === menu.name ? true : false
  }

  return (
    <div
      className={`
      ${style.nav}
      ${(isDesktopView() || !menuBlockOpen) || util.shadow}
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

              <img
                className={`
                  ${style.arrow}
                  ${menuOpen(menu) && style.arrow_close}
                `}
                src={windowWidth >= desktopWidth ? arrowLight : arrowDark}
                alt=""
              />
            </button>

            <div
              className={`
                ${style.nav__linkContainer}
                ${(isDesktopView() && menuOpen(menu)) && util.shadow}
                ${menuOpen(menu) || style.menuClose}
              ` }
            >
              {menu.links.map((link) => (
                <a key={link} className={style.nav__link} href="/">{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className={style.credentials}>
        <a className={style.login} href="/">Login</a>
        <a className={`${style.signup} ${util.shadow}`} href="/">Sign Up</a>
      </section>
    </div >
  )
}

export default Menu