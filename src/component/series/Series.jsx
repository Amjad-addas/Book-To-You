import React from 'react'
import style from './series.module.css'
import Story from '../Story'
import img1 from '../../images/book-cover1.png'
import img2 from '../../images/book-cover2.png'
import img3 from '../../images/book-cover3.png'
import img4 from '../../images/book-cover4.png'
function Series() {
  return (
    <div className={style.container}>
        <div className={style.title}>
            <span className={style.spanTitle}>Complete Series Of</span>
            <h1 className={style.h1Title}>Smoke And The Heart</h1>
            <p className={style.pragTitle}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        </div>
        <div className={style.story}>
            <Story img={img1} title='This Dark Road to Mercy'/>
            <Story img={img2} title='Liar Of Dreams'/>
            <Story img={img3} title='Before The Devil Breaks You'/>
            <Story img={img4} title='Now You See Me'/>
        </div>
    </div>
  )
}

export default Series