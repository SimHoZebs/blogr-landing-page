import React from 'react'

import Navbar from './Navbar.js'

import style from './css/hero.module.css'
import bgPatternIntro from './images/bg-pattern-intro.svg';

function Hero() {

  return (
    <section className={style.hero}>
      <div className={style.bgImgContainer}>

        <img className={style.bgImg} src={bgPatternIntro} alt="" />
      </div>

      <Navbar />

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

export default Hero
