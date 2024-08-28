import React from 'react'
import style from './difien.module.css'
import Social from '../soical/Social'
import Btn from '../../Btn'
function Difien(props) {
  return (
    <div className={style.container} style={props.di=='t'?{flexDirection:'row-reverse'}:{}}>
        <img src={props.img} className={style.image} alt="" />
        <div className={style.selfContainer}>
            <h1 className={style.selfeTitle}>{props.title}</h1>
            <p className={style.selfP}>{props.p}</p>
            { props.c=='t'?<Social/>:<></>}
            { props.k=='t'?<Btn title='Contact Me'/>:<></>}
        </div>
    </div>
  )
}

export default Difien