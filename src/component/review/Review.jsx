import React from 'react'
import style from './review.module.css'
import Card from '../card/Card'
import img1 from '../../images/testimonials-image.png'
import img2 from '../../images/testimonials-image02.png'
import img3 from '../../images/testimonials-image03.png'
import img4 from '../../images/testimonials-image04.png'
import Btn from '../../Btn'
function Review() {
  return (
    <div className={style.containerR}>
        <div className={style.leader}>
            <h1 className={style.title}>What Readers Are Saying</h1>
            <span className={style.saying}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque lauda ntium.</span>
            <Btn title='Read All Series'/>
        </div>
        <div className={style.right}>
            <Card
            prag='Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.'
            img={img1}
            name='Mike Sendler'
            rev='Review on Book 1'
            />
            <Card
            prag='Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.'
            img={img2}
            name='Mike Sendler'
            rev='Review on Book 1'
            />
            <Card
            prag='Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.'
            img={img3}
            name='Mike Sendler'
            rev='Review on Book 1'
            />
            <Card
            prag='Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.'
            img={img4}
            name='Mike Sendler'
            rev='Review on Book 1'
            />
        </div>
    </div>
  )
}

export default Review