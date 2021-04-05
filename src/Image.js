import React from 'react'
import style from './css/image.module.css'

function Image(props) {

  function imgStyle(side) {
    switch (side) {
      case 'left':
        return style.img_left;
      case 'right':
        return style.img_right;
      default:
        return "";
    }
  }

  function wrapperStyle(side) {
    switch (side) {
      case 'left':
        return style.imgWrapper_left;
      case 'right':
        return style.imgWrapper_right;
      default:
        return "";
    }
  }

  return (
    <div className={style.imgContainer}>
      {/* <div className={` ${style.imgWrapper} ${wrapperStyle(props.side)} `} > */}
      <img
        className={` ${style.img} ${imgStyle(props.side)} `}
        src={props.img}
        alt=""
      />
    </div>
    // </div>
  )
}

export default Image
