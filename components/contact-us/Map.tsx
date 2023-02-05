import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/contact-us/map.module.scss'
import Tools from './Tools'
import UseWindowDimensions from '../WindowSize'
const Map = () => {
  const {width}= UseWindowDimensions();
  return (
    <div className={Styles.map_container} style={{overflow:"hidden"}}>
        <Image src='/Rectangle 123.png' alt="" fill />
            <Tools top={width<=450?"30vw":"19.17vw"} left={width<=450?"8.05vw":"19.6vw"} />
            <Tools top={width<=450?"84.4vw":"28.5vw"} left={width<=450?"-38.61vw":"43.5vw"} />
            <Tools top={width<=450?"68.8vw":"37.3vw"} left={width<=450?"50vw":"43.8vw"}/>
            <Tools top={width<=450?"97.7vw":"21.7vw"} left={width<=450?"50vw":"72.3vw"}/>       
    </div>
  )
}

export default Map