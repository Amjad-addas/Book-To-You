import Certification from '../certification/Certification'
import style from './award.module.css'
import React from 'react'
import img1 from '../../images/award01.png'
import img2 from '../../images/award02.png'
import img3 from '../../images/award03.png'
function Award() {
  return (
    <div className={style.container}>
        <h1> Award </h1>
        <div className={style.certifcationContainer}>
        <Certification
        img={img1}
        time='Best Author Award 2016'
        p='Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit'
        />
        <Certification
        img={img2}
        time='Worlds #1 Best-selling Book 2014'
        p='Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit'
        />
        <Certification
        img={img3}
        time='NYT Best-selling Author 2013'
        p='Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit'
        />
        </div>

    </div>
  )
}

export default Award