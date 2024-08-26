import { Padding, Style } from '@mui/icons-material'
import React, { useState } from 'react'
import Btn from '../Btn';





function Story( props,) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    const styles = {
        margin:'0',
        padding:'15px',
        fontSize:'20px',




    }
    
  return (
    <div  >
        <img src={props.img} alt="" />
        <h1 style={styles}>{props.title}</h1>
        <Btn title='600$ purchase'/>
    </div>
  )
}

export default Story