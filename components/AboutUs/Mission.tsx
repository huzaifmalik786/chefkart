import Image from 'next/image'
import React, { useState } from 'react'
import Styles from '../../styles/components/about/vision.module.scss'
import UseWindowDimensions from '../WindowSize'
const Mission = () => {
  const {width}= UseWindowDimensions();
  const [hidden,sethidden]= useState("content");

  const paragraph="We’re doing things bigly, I mean really quite big. The way we operate is different from other companies because we disrupt. We break the code, we crack the code as well."
  console.log(paragraph.substring(0,82));
  return (
    <div className={Styles.vision_container} style={width<=472?{flexDirection: "column-reverse", marginBottom:"5.56vw"}:{}}>
        <div className={Styles.right_section}>
            <div className={Styles.vison_image} style={width>472?{width: '29.36vw', height: '27.2vw'}:{height:"70vw"}}>
                <Image src='/M_F_Home chef_refine 1.png' alt="mission_image" fill />

                <div className={Styles.bg_orange}></div>
            </div>
        </div>
        <div className={Styles.left_section}>
            <span>Mission</span>
            <h2>Experience with at-home cooking services like never before!</h2>
            {width<=450?(
              <div>
                <p>{paragraph.substring(0,82)}
                  <button className={Styles.contentbutton} onClick={()=>sethidden("button")}><span>{hidden!="button"?"...Read More":""}</span></button>
                  <span className={Styles.extracontent}>{hidden!="content"?`${paragraph.substring(82)}`:""}</span></p>
              </div>
            ):(
              <div>
                <p>{paragraph}</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Mission