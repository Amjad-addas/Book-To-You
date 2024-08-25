import React from 'react'
import style from './book.module.css'
import img1 from '../../images/book-cover1.png'
import img2 from '../../images/book-cover2.png' 
import img3 from '../../images/book-cover3.png'
import img4 from '../../images/book-cover4.png'
function Books(){
  return (
    <div className={style.container}>
        <div className={style.bookDesc}>
            <span className={style.subtitle}>Complete Series</span>
            <h1 className={style.title}>Smoke And The Heart</h1>
            <p className={style.desc}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <button className={style.bbook}>Buy Complet series</button>
        </div>
        <div className={style.books}>
            <img className={style.img} src={img1} alt="" />
            <img className={style.img} src={img2} alt="" />
            <img className={style.img} src={img3} alt="" />
            <img className={style.img} src={img4} alt="" />
        </div>

    </div>
  )
}

export default Books