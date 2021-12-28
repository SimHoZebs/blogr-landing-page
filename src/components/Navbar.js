import React, { useState, useEffect } from 'react'
import Menu from './Menu'

import style from '../css/navbar.module.css'
import hamburgerMenu from '../images/icon-hamburger.svg'

function Navbar() {
  const [menuBlockOpen, setMenuBlockOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState()

  const resizeEvent = () => {
    setWindowWidth(prev => window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", resizeEvent)
    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [])

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth)
    }


    windowWidth >= 768
      ? setMenuBlockOpen(prev => true)
      : setMenuBlockOpen(prev => false)
  }, [windowWidth])

  return (
    <nav className={style.navbar}>
      <div className={style.navbar__title}>Blogr</div>

      {windowWidth < 768 && <input
        className={style.navbar__button}
        type="image"
        src={hamburgerMenu}
        alt=""
        onClick={() => setMenuBlockOpen(prev => !prev)}
      />}

      <Menu menuBlockOpen={menuBlockOpen} windowWidth={windowWidth} />
    </nav>
  )
}

export default Navbar