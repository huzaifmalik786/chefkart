import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/contact-us/map.module.scss'
import Tools from './Tools'
import UseWindowDimensions from '../WindowSize'
const Map = () => {
  const {width}= UseWindowDimensions();
  return (
    <div className={Styles.map_container} style={{overflow:"hidden"}}>
      <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9886081024615!2d77.08044621427601!3d28.41960060043862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1678190359382!5m2!1sen!2sin"></iframe>
        {/* <Image src='/Rectangle 123.png' alt="" fill />
            <Tools top={width<=450?"30vw":"19.17vw"} left={width<=450?"8.05vw":"19.6vw"} />
            <Tools top={width<=450?"84.4vw":"28.5vw"} left={width<=450?"-38.61vw":"43.5vw"} />
            <Tools top={width<=450?"68.8vw":"37.3vw"} left={width<=450?"50vw":"43.8vw"}/>
            <Tools top={width<=450?"97.7vw":"21.7vw"} left={width<=450?"50vw":"72.3vw"}/>        */}
    </div>
  )
}

export default Map