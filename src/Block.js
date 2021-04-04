import style from './css/block.module.css'

function Block(props) {

  function isInfra() {
    return props.isInfra ? true : false
  }

  function hasMainTitle(title) {
    return title !== undefined ? true : false
  }

  function isLeftImg() {
    return props.side === 'left' ? true : false
  }

  function isRightImg() {
    return props.side === 'right' ? true : false
  }

  return (
    <article className={`${style.article} ${isInfra() && style.infra}`}>
      {
        hasMainTitle(props.data.title) &&
        <h2 className={style.article__title}> {props.data.title} </h2>
      }

      <div
        className={`
          ${style.content}
          ${isRightImg() && style.content_right}
        ` }
      >
        <div className={style.imgContainer}>
          <img
            className={`
              ${style.img} 
              ${isLeftImg() && style.imgLeft}
              ${isRightImg() && style.imgRight}
            `}
            src={props.img} alt="" />
        </div>


        <section className={`${style.blockSection} `}>

          {props.children}

          {props.data.desc.map(({ title, desc }) => (
            <div className={style.block}>
              <h2 className={`${style.block__title} ${isInfra() && style.infra}`}> {title} </h2>

              <p className={`${style.block__desc} ${isInfra() && (style.infra)} ${isInfra() && style.block__last}`}> {desc} </p>
            </div>
          ))}

        </section>
      </div>
    </article>
  )

}

export default Block