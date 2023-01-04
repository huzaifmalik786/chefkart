import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/contact-us/map.module.scss'
import Tools from './Tools'
const Map = () => {
  return (
    <div className={Styles.map_container}>
        <Image src='/Rectangle 123.png' alt="" fill />
        <Tools top='19.7vw' left='19.6vw' />
        <Tools top='28.5vw' left='43.5vw' />
        <Tools top='37.3vw' left='43.8vw' />
        <Tools top='21.7vw' left='72.3vw' />
    </div>
  )
}

export default Map