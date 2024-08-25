import React from 'react'
import style from './herobody.module.css'
import hero from '../../images/hero-image01.png'
function HeroBody() {
  return (
    <div className={style.container}>
        <div className={style.heroText}>
          <span className={style.ads}>
            New Release
          </span>
          <h1 className={style.mainText}>
              This Dark
              Road to Mercy
          </h1>
          <p className={style.parag}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div className={style.btn}>
            <a className={style.button} href='#'>Purchase</a>
            <a className={style.button}href='#'>read on kind</a>
          </div>
        </div>
        <div className={style.heroImage}>
          <img className={style.imghero} src={hero} alt="#" />
        </div>
    </div>
  )
}

export default HeroBody