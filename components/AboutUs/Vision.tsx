import Image from 'next/image'
import React, { useState } from 'react'
import Styles from '../../styles/components/about/vision.module.scss'
import UseWindowDimensions from '../WindowSize'

const Vision = () => {
  const [hidden,sethidden]= useState("content");
  const {width}= UseWindowDimensions();
  const paragraph="With a vision to operate and manage millions of kitchens across the globe, ChefKart is providing at-home cooking services in a way that has never been experienced before."
  return (
    <div className={Styles.vision_container}>
        <div className={Styles.left_section}>
            <span>Vision</span>
            <h2>We are dedicated to providing you with a smooth and safe experience.</h2>
            {width<=472?(
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
        <div className={Styles.right_section}>
            <div className={Styles.vison_image}>
                <Image src='/iStock-1223383996 1.png' alt="vision_image" fill />
            </div>
        </div>
    </div>
  )
}

export default Vision