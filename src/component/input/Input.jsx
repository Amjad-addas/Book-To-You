import React from 'react'
import style from './input.module.css'
function Input(props) {
  return (
    <input className={style.input} type="text" placeholder={props.placeholder} value="" />    
)
}

export default Input