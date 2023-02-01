import Image from 'next/image'
import React, { useState } from 'react'
import Styles from '../../styles/components/about/vision.module.scss'
import useWindowDimensions from '../WindowSize'
const Mission = () => {
  const {width}= useWindowDimensions();
  const [hidden,sethidden]= useState("content");

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
            {width<=472?(
              <div>
                <p>We’re doing things bigly, I mean really quite big. The way we operate
                  <button className={Styles.contentbutton} onClick={()=>sethidden("button")}><span>{hidden!="button"?"...Read More":""}</span></button>
                  <span className={Styles.extracontent}>{hidden!="content"?" is different from other companies because we disrupt. We break the code, we crack the code as well.":""}</span></p>
              </div>
            ):(
              <div>
                <p>With a vision to operate and manage millions of kitchens across the globe, ChefKart is providing at-home cooking services in a way that has never been experienced before.</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Mission