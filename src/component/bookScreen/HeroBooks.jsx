import React from 'react'
import style from './hero.module.css'
function HeroBooks(props) {
  return (
    <div className={style.container}>
        <h1 className={style.h1}>{props.title}</h1>
        <h4 className={style.h4}>{props.p}</h4>
    </div>
  )
}

export default HeroBooks