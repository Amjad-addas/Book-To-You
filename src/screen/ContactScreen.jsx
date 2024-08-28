import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Subscribe from '../component/subscribe/Subscribe'
import HeroBooks from '../component/bookScreen/HeroBooks'
import ContactCard from '../component/contactCard/ContactCard'

function ContactScreen() {
  return (
    <>
        <Header/>
        <HeroBooks
        title='Contact'
        p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
        />
        <ContactCard/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default ContactScreen