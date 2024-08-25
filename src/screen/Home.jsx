import React from 'react'
import Header from '../component/header/Header';
import HeroBody from '../component/heroBody/HeroBody';
import Feature from '../component/freature/Feature';
import Books from '../component/books/Books';
import Review from '../component/review/Review';
import Ads from '../component/ads/Ads';
import Footer from '../component/footer/Footer';
import Subscribe from '../component/subscribe/Subscribe';

function Home() {
  return (
    <div>
        <Header/>
        <HeroBody/>
        <Feature/>
        <Books/>
        <Review/>
        <Ads/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home