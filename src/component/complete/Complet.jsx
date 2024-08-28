import React from 'react'
import style from './complet.module.css'
import Btn from '../../Btn'
import img from '../../images/bundle.png'
function Complet() {
  return (
    <div className={style.container}>  
        <div className={style.explane}>
            <h1 className={style.h1}>Buy a Complete
            Series</h1>
            <p className={style.p}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magn.</p>
            <Btn title='2400$ purchase'/>
        </div>
        <img style={{width:'100%'}} src={img} alt="" />
    </div>
  )
}

export default Complet