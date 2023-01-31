import Image from 'next/image'
import React from 'react'
import SocialIcon from '../SocialIcon'
import Styles from '../../styles/components/about/social.module.scss'
import useWindowDimensions from '../WindowSize'
const Social = () => {
  const {width}= useWindowDimensions()
  return (
    <div className={Styles.about_us_social}>
        <h2>Lets get Social</h2>
        <div className={Styles.icon_container}>
            <SocialIcon image='/Vector.svg' width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />
            <SocialIcon image='/Vector (1).svg' width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />
            <SocialIcon image='/Vector (2).svg' width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />
            <SocialIcon image='/Vector (3).svg' width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />
            <SocialIcon image='/g5.svg' width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />
            
        </div>
    </div>
  )
}

export default Social