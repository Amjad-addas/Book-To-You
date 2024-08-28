import React from 'react'
import style from './social.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Social() {
  return (
    <ul className={style.aboutSocial}>
    <svg className={style.midea}><FacebookIcon className={style.icon}/></svg>
    <svg className={style.midea}><InstagramIcon className={style.icon}/></svg>
    <svg className={style.midea}><TwitterIcon  className={style.icon}/></svg>
</ul>
  )
}

export default Social