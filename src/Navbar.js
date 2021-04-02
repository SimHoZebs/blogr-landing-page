import React, { useState } from 'react'

import style from './css/navbar.module.css'
import credStyle from './css/credentials.module.css'
import hamburgerMenu from './images/icon-hamburger.svg';
import arrowDark from './images/icon-arrow-dark.svg';

const menuList = [
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

  return (
    <nav className={style.navbar}>
      <h1 className={style.navbar__title}>Blogr</h1>

      <input className={style.navbar__button} type="image" src={hamburgerMenu} alt="" onClick={() => setMenuOpened(prev => !prev)} />

      <Menu menuOpened={menuOpened} />
    </nav>
  )
}

function Menu({ menuOpened }) {
  const [currOpenContainer, setCurrOpenContainer] = useState();

  function openLinkContainer(name) {
    setCurrOpenContainer(prev => (prev === name ? "" : name))
  }

  return (
    <div className={`${style.menu} ${menuOpened && style.menuClose} `}>
      {menuList.map((menu) => (
        <section key={menu.name} className={style.menu__section}>
          <button className={`${style.menu__category} ${currOpenContainer === menu.name && style.menu__categorySelected}`} onClick={() => openLinkContainer(menu.name)}>
            <h4>{menu.name}</h4>
            <img className={`${style.arrow} ${currOpenContainer === menu.name && style.arrow_close}`} src={arrowDark} alt="" />
          </button>

          <div className={`${style.menu__linkContainer} ${currOpenContainer === menu.name || style.menuClose}`}>
            {menu.links.map((link) => (
              <a className={style.menu__link} href="/">{link}</a>
            ))}
          </div>
        </section>
      ))}

      <section className={credStyle.credentials}>
        <a className={credStyle.login} href="/">Login</a>
        <a className={credStyle.signup} href="/">Sign Up</a>
      </section>
    </div>
  )
}
export default Navbar
//