import Image from 'next/image'
import React from 'react'
import SocialIcon from '../SocialIcon'
import Styles from '../../styles/components/about/social.module.scss'
const Social = () => {
  return (
    <div className={Styles.about_us_social}>
        <h2>Lets get Social</h2>
        <div className={Styles.icon_container}>
            <SocialIcon />
            <SocialIcon />
            <SocialIcon />
            <SocialIcon />
        </div>
    </div>
  )
}

export default Social