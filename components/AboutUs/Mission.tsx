import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/about/vision.module.scss'
const Mission = () => {
  return (
    <div className={Styles.vision_container}>
        <div className={Styles.right_section}>
            <div className={Styles.vison_image} style={{width: '29.36vw', height: '27.2vw', overflow: 'visible'}}>
                <Image src='/M_F_Home chef_refine 1.png' alt="mission_image" fill />

                <div className={Styles.bg_orange}></div>
            </div>
        </div>
        <div className={Styles.left_section}>
            <span>Mission</span>
            <h2>Experience with at-home cooking services like never before!</h2>
            <p>We’re doing things bigly, I mean really quite big. The way we operate is different from other companies because we disrupt. We break the code, we crack the code as well. </p>
        </div>
    </div>
  )
}

export default Mission