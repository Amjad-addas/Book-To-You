import React from 'react'
import ShopIcon from '@mui/icons-material/Shop';
import style from './header.module.css'
import { Icon } from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className={style.container}>
        <div className={style.logo}> <h1 className={style.logoName}>mj book</h1></div>
        <div className={style.headerLinks}>
          <ul className={style.linkList}>
            <li id = 'link'  className={style.link}><Link   className={style.link}    to='/'> Home</Link></li>
            <li id = 'link' className={style.link}><Link   className={style.link}  to='/book'>  Book</Link></li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/bio'  >Bio</Link> </li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/contact' >Contact</Link></li>
          </ul>
        </div>
        <div className={style.cart}>
           <ShopIcon
           style={{fontSize:'40px',
            outline:'2px aqua solid'
           }}
           />
        </div>
    </div>
  )
}

export default Header