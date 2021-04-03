import mainData from './data/mainData'
import style from './css/main.module.css'
import patternCircle from './images/bg-pattern-circles.svg'
import editorMobile from './images/illustration-editor-mobile.svg'
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
      <Block data={data()} />

      <div className={style.imgContainer}>
        <img className={style.img} src={editorMobile} alt="" />
      </div>

      <Block data={data()} />

      <Block data={data()} />

      <Block data={data()}>
        <img className={style.infra__phones} src={phones} alt="" />

        <div className={style.infra__imgContainer}>
          <img className={style.infra__bg} src={patternCircle} alt="" />
        </div>
      </Block>

      <div className={style.imgContainer}>
        <img className={style.img} src={laptopMobile} alt="" />
      </div>

      <Block data={data()} />
    </div >
  )
}

function Block(props) {

  function isInfra() {
    return props.children !== undefined ? true : false
  }

  return (
    <section className={`${style.block} ${isInfra() && style.infra}`}>
      {props.children}
      <h2 className={`${style.block__title} ${isInfra() && style.infra__title}`}> {props.data.title} </h2>

      <p className={`${style.block__desc} ${isInfra() && style.infra__desc}`}> {props.data.desc} </p>
    </section>
  )

}


export default Main