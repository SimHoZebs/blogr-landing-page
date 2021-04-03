import React, { useState, useEffect, useRef } from 'react'

import style from './css/navbar.module.css'
import util from './css/util.module.css'
import credStyle from './css/credentials.module.css'
import hamburgerMenu from './images/icon-hamburger.svg';
import arrowDark from './images/icon-arrow-dark.svg';
import arrowLight from './images/icon-arrow-light.svg';

const menuData = [
  {
    name: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations",],
  },

  {
    name: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },

  {
    name: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"]
  }
]

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const eventshit = () => {
    setWindowWidth(prev => window.innerWidth)
    //console.log(`ref ${ref}`);
  }

  useEffect(() => {
    window.addEventListener("resize", eventshit)
    return () => {
      window.removeEventListener("resize", eventshit)
    }
  }, [])

  useEffect(() => {
    windowWidth >= 768
      ? setMenuOpened(prev => true)
      : setMenuOpened(prev => false)
  }, [windowWidth])

  return (
    <nav className={style.navbar}>
      <h1 className={style.navbar__title}>Blogr</h1>

      {windowWidth < 768 && <input
        className={style.navbar__button}
        type="image"
        src={hamburgerMenu}
        alt=""
        onClick={() => setMenuOpened(prev => !prev)}
      />}

      <Menu menuOpened={menuOpened} windowWidth={windowWidth} />
    </nav>
  )
}

function Menu({ menuOpened, windowWidth }) {
  const [openCategory, setOpenCategory] = useState();

  const desktopWidth = 768;

  function openThisCategory(name) {
    setOpenCategory(prev => (prev === name ? "" : name))
  }
  function isDesktopView() {
    return windowWidth >= desktopWidth ? true : false
  }

  function categoryOpen(menu) {
    return openCategory === menu.name ? true : false
  }

  return (
    <div
      className={`
      ${style.menu}
      ${isDesktopView() || util.shadow}
      ${menuOpened || style.menuClose} 
      `}
    >
      <div className={style.menu__menuGroupSection}>
        {menuData.map((menu) => (
          <section key={menu.name} className={style.menu__categoryContainer}>

            <button
              className={`
                ${style.menu__categoryBtn}
                ${categoryOpen(menu) && style.menu__categorySelected}
              `}
              onClick={() => openThisCategory(menu.name)}
            >
              <h4>{menu.name}</h4>

              <img
                className={`
                  ${style.arrow}
                  ${categoryOpen(menu) && style.arrow_close}
                `}
                src={windowWidth >= desktopWidth ? arrowLight : arrowDark}
                alt=""
              />
            </button>

            <div
              className={`
                ${style.menu__linkContainer}
                ${isDesktopView() && util.shadow}
                ${categoryOpen(menu) || style.menuClose}
              ` }
            >
              {menu.links.map((link) => (
                <a key={link} className={style.menu__link} href="/">{link}</a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className={credStyle.credentials}>
        <a className={credStyle.login} href="/">Login</a>
        <a className={`${credStyle.signup} ${util.shadow}`} href="/">Sign Up</a>
      </section>
    </div >
  )
}

export default Navbar