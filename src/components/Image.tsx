import React from "react";
import style from "../css/image.module.css";

function Image(props) {
  function imgStyle(side) {
    switch (side) {
      case "left":
        return style.img_left;
      case "right":
        return style.img_right;
      default:
        return "";
    }
  }

  return (
    <div className={style.imgContainer}>
      <img
        className={` ${style.img} ${imgStyle(props.side)} `}
        src={props.img}
        alt=""
      />
    </div>
  );
}

export default Image;
