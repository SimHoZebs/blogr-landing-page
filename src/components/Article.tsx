import style from "../css/article.module.css";

import SideImage from "./SideImage";

function Article(props) {
  function isInfra() {
    return props.isInfra ? true : false;
  }

  function hasMainTitle(title) {
    return title !== undefined ? true : false;
  }

  function isRightArticle() {
    return props.side === "right" ? style.block_left : style.block_right;
  }

  function contentStyle(side) {
    switch (side) {
      case "left":
        return style.content_left;
      case "right":
        return style.content_right;
      default:
        return "";
    }
  }

  return (
    <article className={`${style.article} ${isInfra() && style.infra}`}>
      {hasMainTitle(props.data.title) && (
        <h2 className={style.article__title}> {props.data.title} </h2>
      )}

      <div className={` ${style.content} ${contentStyle(props.side)} `}>
        <SideImage side={props.side} img={props.img} />

        <div className={`${style.blockSection} `}>
          {props.data.desc.map(({ title, desc }) => (
            <div key={title} className={`${style.block} ${isRightArticle()}`}>
              <h2
                className={`${style.block__title} ${
                  isInfra() && style.infraTitle
                }`}
              >
                {title}
              </h2>

              <p
                className={`${style.block__desc} ${
                  isInfra() && style.infraDesc
                } ${isInfra() && style.block__last}`}
              >
                {desc}
              </p>
            </div>
          ))}

          {props.children}
        </div>
      </div>
    </article>
  );
}

export default Article;