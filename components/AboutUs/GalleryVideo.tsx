import React, { useRef, useState } from "react";
import Image from "next/image";
import Styles from '../../styles/components/about/galleryvideo.module.scss'

type Props = {
    video: string;
}

const GalleryVideo=(props:Props)=>{
    const [paused, setPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const togglePause = () => {
      if(videoRef.current){
        if (videoRef.current.paused) {
          videoRef.current.play();
          setPaused(false)
        } else {
          videoRef.current.pause();
          setPaused(true)
    
        }
  
      }
    };
    return (
        <>
        <div className={Styles.video_container}>
        <video
          ref={videoRef}
          src={props.video}
          loop
          className={Styles.video}
        />
        <div
        className={Styles.pause_button}
          onClick={togglePause}
        >
          {paused ? <Image src={'/Play Button Circled.svg'} alt="" fill /> : ""}
        </div>
        </div>   
        </>
    )
}

export default GalleryVideo;