import React from 'react'
import style from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
function Footer() {
  let hrf=window.location.pathname;

  return (
    <div className={style.footer}>
    <div className={style.container}>
        <div className={style.logo}> <h1 className={style.logoName}>mj book</h1></div>
        <div className={style.headerLinks}>
          <ul className={style.linkList}>
          <li id = 'link'  className={style.link}><Link   className={style.link} 
            style={hrf=='/'? {color:'aqua'}:{color:'white'}}
            to='/'> Home</Link></li>
            <li id = 'link' className={style.link}><Link   className={style.link} 
            style={hrf=='/book'? {color:'aqua'}:{color:'white'}}
            to='/book'>  Book</Link></li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/bio' 
            style={hrf=='/bio'? {color:'aqua'}:{color:'white'}}
            >Bio</Link> </li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/contact'
            style={hrf=='/contact'? {color:'aqua'}:{color:'white'}}
            >Contact</Link></li>
          </ul>
        </div>
        <ul className={style.aboutSocial}>
            <svg className={style.midea}><FacebookIcon style={{fontSize:'40px'}} className={style.icon}/></svg>
            <svg className={style.midea}><InstagramIcon style={{fontSize:'40px'}} className={style.icon}/></svg>
            <svg className={style.midea}><TwitterIcon style={{fontSize:'40px'}}  className={style.icon}/></svg>
        </ul>

    </div>
    <hr className={style.hr} />
    <h1 className={style.copy}>Copyright © 2024 Amjad | Powered by Amjad</h1>
    </div>
  )
}

export default Footer