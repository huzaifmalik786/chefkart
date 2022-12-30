import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/about/vision.module.scss'

const Vision = () => {
  return (
    <div className={Styles.vision_container}>
        <div className={Styles.left_section}>
            <span>Vision</span>
            <h2>We are dedicated to providing you with a smooth and safe experience.</h2>
            <p>With a vision to operate and manage millions of kitchens across the globe, ChefKart is providing at-home cooking services in a way that has never been experienced before. </p>
        </div>
        <div className={Styles.right_section}>
            <div className={Styles.vison_image}>
                <Image src='/iStock-1223383996 1.png' alt="vision_image" fill />
            </div>
        </div>
    </div>
  )
}

export default Vision