import Image from 'next/image'
import React from 'react'
import SocialIcon from '../SocialIcon'
import Styles from '../../styles/components/about/social.module.scss'
const Social = () => {
  return (
    <div className={Styles.about_us_social}>
        <h2>Lets get Social</h2>
        <div className={Styles.icon_container}>
            <SocialIcon image='/Vector.svg' width='1.82vw' height='1.81vw' />
            <SocialIcon image='/Vector (1).svg' width='1.9vw' height='1.54vw' />
            <SocialIcon image='/Vector (2).svg' width='1.64vw' height='1.64vw' />
            <SocialIcon image='/Vector (3).svg' width='1.82vw' height='1.82vw' />
            <SocialIcon image='/g5.svg' width='1.51vw' height='1vw' />
            
        </div>
    </div>
  )
}

export default Social