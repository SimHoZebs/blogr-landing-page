import React, { useState, useEffect } from 'react'

import mainData from './mainData'
import Article from './Article'

import style from '../css/main.module.css'

import patternCircle from '../images/bg-pattern-circles.svg'
import editorMobile from '../images/illustration-editor-mobile.svg'
import editorDesktop from '../images/illustration-editor-desktop.svg'
import phones from '../images/illustration-phones.svg'
import laptopMobile from '../images/illustration-laptop-mobile.svg'
import laptopDesktop from '../images/illustration-laptop-desktop.svg'

function Main() {
  const [windowWidth, setWindowWidth] = useState()

  const resizeEvent = () => {
    setWindowWidth(prev => window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(prev => window.innerWidth)
    window.addEventListener("resize", resizeEvent)
    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [])

  function data(index) {
    return mainData[index]
  }

  function isDesktopView() {
    return windowWidth >= 768 ? true : false
  }

  return (
    <div className={style.mainContainer}>
      <Article data={data(0)} img={isDesktopView() ? editorDesktop : editorMobile} side={'right'} />

      <Article data={data(1)} isInfra={true} img={phones}>
        <div className={style.infra__imgContainer}>
          <img className={style.infra__bg} src={patternCircle} alt="" />
        </div>
      </Article>

      <Article data={data(2)} img={isDesktopView() ? laptopDesktop : laptopMobile} side={'left'} />

    </div>
  )
}

export default Main