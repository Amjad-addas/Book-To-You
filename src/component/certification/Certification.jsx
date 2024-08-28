import style from "./certification.module.css";
import React from 'react'

function Certification(props) {
  return (
    <div className={style.awards}>
        <img src={props.img} className={style.img} alt="" />
        <span className={style.time}>{props.time}</span>
        <p className={style.prag}>{props.p}</p>
    </div>
  )
}

export default Certification