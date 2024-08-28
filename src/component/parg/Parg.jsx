import style from './parg.module.css'
import React from 'react'

function Parg() {
  return (
    <div className={style.pragContainer}>
    <p className={style.parg}>"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatemt."</p>
    <span className={style.name}>Amjad Addas</span>
    </div>
  )
}

export default Parg