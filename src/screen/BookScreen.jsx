import React from 'react'
import Header from '../component/header/Header';
import HeroBody from '../component/heroBody/HeroBody';
import Ads from '../component/ads/Ads';
import Footer from '../component/footer/Footer';
import Subscribe from '../component/subscribe/Subscribe';
import HeroBooks from '../component/bookScreen/HeroBooks';
import Series from '../component/series/Series';
import Complet from '../component/complete/Complet';

function BookScreen() {
  return (
    <div>
    <Header/>
    <HeroBooks
    title="Book"
    p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
    />
    <HeroBody color='true'/>
    <Series/>
    <Complet/>

    <Ads/>
    <Subscribe/>
    <Footer/>
</div>
  )
}

export default BookScreen