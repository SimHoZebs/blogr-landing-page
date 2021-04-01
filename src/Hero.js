import React, { useState } from 'react'
import style from './css/hero.module.css'

import hamburgerMenu from './images/icon-hamburger.svg';
import bgPatternIntro from './images/bg-pattern-intro.svg';

function Hero() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className={style.hero}>
      <div className={style.bgImgContainer}>

        <img className={style.bgImg} src={bgPatternIntro} alt="" />
      </div>

      <nav className={style.navbar}>
        <h1 className={style.navbar__title}>Blogr</h1>
        <input className={style.navbar__button} type="image" src={hamburgerMenu} alt="" />
        {menuOpened && <Menu />}
      </nav>

      <header className={style.header}>
        <h1>A modern</h1> <h1> publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
      </header>

      <div className={style.btnContainer}>
        <button className={style.cta}>Start for Free</button>
        <button>Learn More</button>
      </div>
    </section>
  )
}

function Menu() {

}
export default Hero
