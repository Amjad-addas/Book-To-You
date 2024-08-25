import React from 'react'
import style from './subscribe.module.css'
import img from '../../images/susbcribe-image.png'
import Btn from '../../Btn'
function Subscribe() {
  return (
    <div className={style.container}>
        <div className={style.sub}>
            <h1 className={style.h1}>Subscribe Now to Get Regular Updates</h1>
            <div className={style.subContainer}>
                <input type="text" className={style.input} placeholder='Your Email' />
                <Btn title='submit' />
            </div>
        </div>
        <img src={img} alt="" className={style.img} />
    </div>
  )
}

export default Subscribe