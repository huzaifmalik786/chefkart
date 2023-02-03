import Image from 'next/image'
import React from 'react'
import SocialIcon from '../SocialIcon'
import Styles from '../../styles/components/about/social.module.scss'
import { image_type } from '../../interfaces/interfaces'
import UseWindowDimensions from '../WindowSize'
type Props = {
  data: {
    heading: string;
    icons: {
      icon: image_type

    }[]
  }
}
const Social = (props: Props) => {
  const {width}= UseWindowDimensions()
  return (
    <div className={Styles.about_us_social}>
        <h2>{props.data.heading || "Lets get Social"}</h2>
        <div className={Styles.icon_container}>
          {
            (props.data.icons).map((item, key)=>{
              return(
                <SocialIcon key={key} image={item.icon.data.attributes.url || '/Vector.svg'} width={width<=472?"5.67vw":"1.82vw"} height={width<=472?"5.67vw":"1.82vw"} />

              )
            })
          }
            {/* <SocialIcon image='/Vector (1).svg' width='1.9vw' height='1.54vw' />
            <SocialIcon image='/Vector (2).svg' width='1.64vw' height='1.64vw' />
            <SocialIcon image='/Vector (3).svg' width='1.82vw' height='1.82vw' />
            <SocialIcon image='/g5.svg' width='1.51vw' height='1vw' /> */}
            
        </div>
    </div>
  )
}

export default Social