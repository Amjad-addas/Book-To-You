import React from 'react'
import style from './freature.module.css'
import img1 from '../../images/featured-logo1.svg'
import img2 from '../../images/featured-logo2.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import img3 from '../../images/featured-logo3.svg'
import img4 from '../../images/featured-logo4.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import img5 from '../../images/featured-logo4.svg'
import img from '../../images/about-image.png'
function Feature() {
  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h2 className={style.title}>As Featured On</h2>
        </div>
        <div className={style.logo}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        </div>
        <div className={style.desc}>
            <div className={style.image}>
                <img src={img} alt="" className={style.img} />
            </div>
            <div className={style.about}>
                <h1 className={style.aboutTitle}>
                A Word From The Author
                </h1>
                <p className={style.aboutparg}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <button className={style.btn}>
                <a href="#" className={style.link}>
                    read more
                </a>
                </button>
                <hr className={style.hr} />
                <span className={style.name}>Kathryn Moris</span>
                <span className={style.aboutD}>Entrepreneur, Writer and Speaker.</span>
                <ul className={style.aboutSocial}>
                    <svg className={style.midea}><FacebookIcon className={style.icon}/></svg>
                    <svg className={style.midea}><InstagramIcon className={style.icon}/></svg>
                    <svg className={style.midea}><TwitterIcon  className={style.icon}/></svg>
                </ul>
                
            </div>
        </div>

    </div>
  )
}

export default Feature