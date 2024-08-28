import React from 'react'
import style from './foolo.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import Btn from '../../Btn';
function Follow() {
  return (
    <div className={style.container}>
           <InstagramIcon style={{fontSize:'50px',color:'#996a5d'}} /> 
           <h1>Follow @Amjad </h1>
           <p>Leo nulla cras augue eros, diam vivamus et lectus volutpat at facilisi tortor porta. </p>
           <Btn
           title='Viste Instagram'
           />
    </div>
  )
}

export default Follow