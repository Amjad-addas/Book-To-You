import React from 'react'
import style from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className={style.footer}>
    <div className={style.container}>
        <div className={style.logo}> <h1 className={style.logoName}>mj book</h1></div>
        <div className={style.headerLinks}>
          <ul className={style.linkList}>
            <li id = 'link'  className={style.link}><link rel='helo' href="#" /> Home</li>
            <li id = 'link' className={style.link}><link rel='helo' href="#" />Book</li>
            <li id = 'link' className={style.link}><link rel='helo' href="#" />Bio</li>
            <li id = 'link' className={style.link}><link rel='helo' href="#" />Contact</li>
          </ul>
        </div>
        <ul className={style.aboutSocial}>
            <svg className={style.midea}><FacebookIcon className={style.icon}/></svg>
            <svg className={style.midea}><InstagramIcon className={style.icon}/></svg>
            <svg className={style.midea}><TwitterIcon  className={style.icon}/></svg>
        </ul>

    </div>
    <hr className={style.hr} />
    <h1 className={style.copy}>Copyright © 2024 Amjad | Powered by Amjad</h1>
    </div>
  )
}

export default Footer