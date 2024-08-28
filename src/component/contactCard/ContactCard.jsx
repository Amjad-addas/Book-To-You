import React from 'react'
import style from './contact-card.module.css'
import Input from '../input/Input'
import { Email } from '@mui/icons-material'
import Social from '../soical/Social'
import Btn from '../../Btn'
function ContactCard() {
  return (
    <div className={style.cardContainer}>
            <div className={style.container}>
        <h1 className={style.h1Container}>Get In Touch</h1>
        <h4 className={style.h4Container}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</h4>
        <div className={style.email}>
            <Email style={{backgroundColor:'white',color:'#996a5d',fontSize:'28px'}} />
            <span>amjad.addas99@gmail.com</span>
        </div>
        <hr className={style.hr} />
        <div className={style.card}>
            <h1 className={style.h1Card}>Send Me a Message</h1>
            <Input 
            placeholder='Your Name'
            />
            <Input 
            placeholder='Email'
            />
            <Input 
            placeholder='Subject'
            />
            <Input 
            placeholder='message'
            />
            <Btn title='follow me'/>
        </div>
        <div className={style.social}>
            <h1 className={style.h1Social}> Follow Me</h1>
            <Social/>
        </div>
    </div>
    </div>
  )
}

export default ContactCard