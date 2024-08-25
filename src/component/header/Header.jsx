import React from 'react'
import ShopIcon from '@mui/icons-material/Shop';
import style from './header.module.css'
import { Icon } from '@mui/material';
function Header() {
  return (
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