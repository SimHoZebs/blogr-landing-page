import mainData from './data/mainData'
import Block from './Block'

import style from './css/main.module.css'

import patternCircle from './images/bg-pattern-circles.svg'
import editorMobile from './images/illustration-editor-mobile.svg'
import editorDesktop from './images/illustration-editor-desktop.svg'
import phones from './images/illustration-phones.svg'
import laptopMobile from './images/illustration-laptop-mobile.svg'

let something = -1;

function Main() {

  function data() {
    something++;
    return mainData[something]
  }

  return (
    <div className={style.mainContainer}>
      <Block data={data()} img={editorDesktop} side={'right'} />

      <Block data={data()} isInfra={true} img={phones}>
        <div className={style.infra__imgContainer}>
          <img className={style.infra__bg} src={patternCircle} alt="" />
        </div>
      </Block>

      <Block data={data()} img={laptopMobile} />

    </div>
  )
}

export default Main