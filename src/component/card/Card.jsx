import React from 'react'
import style from './card.module.css'
function Card(props) {
  return (
    <div className={style.container}>
        <p className={style.desc}>{props.prag}</p>
        <div className={style.subContainer}>
            <img src={props.img} alt="" className={style.imgCard}/>
            <div className={style.column}>
                <span className={style.name}>{props.name}</span>
                <span className={style.review}>{props.rev}</span>
            </div>
        </div>
    </div>
  )
}

export default Card