import Image from 'next/image'
import React, { useState } from 'react'
import Styles from '../../styles/components/about/vision.module.scss'
import UseWindowDimensions from '../WindowSize'
const Mission = () => {
  const {width}= UseWindowDimensions();
  const [hidden,sethidden]= useState(false);

  const paragraph="We’re doing things bigly, I mean really quite big. The way we operate is different from other companies because we disrupt. We break the code, we crack the code as well."
  return (
    <div className={Styles.vision_container} style={width<=450?{flexDirection: "column-reverse", marginBottom:"5.56vw"}:{}}>
        <div className={Styles.right_section}>
            <div className={Styles.vison_image} style={width>450?{width: '29.36vw', height: '27.2vw'}:{height:"70vw"}}>
                <Image src='/M_F_Home chef_refine 1.png' alt="mission_image" fill />

                <div className={Styles.bg_orange}></div>
            </div>
        </div>
        <div className={Styles.left_section}>
            <span className={Styles.heading}>Mission</span>
            <h2>Experience with at-home cooking services like never before!</h2>
            <div>
                <p>{(paragraph).substring(0, 82)}<span style={hidden? {display: "none"} : {}} onClick={()=> sethidden(true)} className={Styles.content_button}>..Read more</span><span style={hidden ? {display: "inline"} : {}} className={Styles.extracontent}>{(paragraph).substring(82)}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Mission