import style from "./ads.module.css";
import React from 'react'
import img1 from '../../images/upcoming-image2.png'
import Btn from "../../Btn";
function Ads() {
  return (
    <div className={style.container}>
        <img src={img1} alt="" className={style.img} />
        <div className={style.right}>
            <h1 className={style.title}>Upcoming Book</h1>
            <p className={style.prag}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <Btn title='Notify Me'/>
        </div>
    </div>
  )
}

export default Ads