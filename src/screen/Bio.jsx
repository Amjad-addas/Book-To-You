import React from 'react'
import Subscribe from '../component/subscribe/Subscribe'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import HeroBooks from '../component/bookScreen/HeroBooks'
import Difien from '../component/difne/Difien'
import img1 from '../images/about-image-02.png'
import Award from '../component/award/Award'
import Parg from '../component/parg/Parg'
import img0 from '../images/about-image.png'
import img from '../images/insta-feed-2.jpg'
import img2 from '../images/about-image-03.png'
import Follow from '../component/follow/Follow'
function Bio() {
  return (
    <>
    <Header/>
    <HeroBooks
    title='Bio'
    p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
    />
 <Difien
    img={img1}
    title='My Story'
    di='t'
    k='f'
    c='t'
    p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'    
    />
    <Difien
    img={img0}
    title='Personal Life'
    k='f'
    c='f'
    p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    
    />
    <Award/>
    <Parg/>
    <Follow/>
    <img
    src={img}
    style={{width:'100%'}}
    />
        <Difien
    img={img2}
    title='Need a Speaker for Your Upcoming Event?'
    c='f'
    k='t'
    p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    />
    <Subscribe/>

    <Footer/>
    </>
  )
}

export default Bio