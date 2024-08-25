import { Style } from '@mui/icons-material'
import React, { useState } from 'react'





function Btn( props,) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    const styles = {

        backgroundColor: isHover ? '#e65830' : '#996a5d',
        color:'white',

        outline:'none',
        padding:'8px 20px',
        fontWeight:'600',
        borderRadius:'5px',
        fontSize:'larger',
        cursor:"pointer",
        transition:"0.3s",
        border:'none',


    }
    
  return (
    <button 
    style={styles}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >{props.title}</button>
  )
}

export default Btn