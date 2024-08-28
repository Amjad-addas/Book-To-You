import React from 'react'
import ShopIcon from '@mui/icons-material/Shop';
import style from './header.module.css'
import { Link } from 'react-router-dom';
function Header() {


  let hrf=window.location.pathname;
  

  return (
    <div className={style.container}>
        <div className={style.logo}> <h1 className={style.logoName}>mj book</h1></div>
        <div className={style.headerLinks}>
          <ul className={style.linkList}>
            
            <li id = 'link'  className={style.link}><Link   className={style.link} 
            style={hrf=='/'? {color:'aqua'}:{color:'black'}}
            to='/'> Home</Link></li>
            <li id = 'link' className={style.link}><Link   className={style.link} 
            style={hrf=='/book'? {color:'aqua'}:{color:'black'}}
            to='/book'>  Book</Link></li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/bio' 
            style={hrf=='/bio'? {color:'aqua'}:{color:'black'}}
            >Bio</Link> </li>
            <li id = 'link' className={style.link}><Link  className={style.link} to='/contact'
            style={hrf=='/contact'? {color:'aqua'}:{color:'black'}}
            >Contact</Link></li>
                  
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