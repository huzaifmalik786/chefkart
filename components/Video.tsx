import Image from 'next/image';
import React, { useRef, useState } from 'react'
// import Styles from '../styles/components/join-as-chef/'
type Props = {
    link: string;
}
const Video = (props: Props) => {
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
    <div>
        {/* <video
          ref={videoRef}
          src={props.link}
          loop
          // controls
          className={Styles.video}
          // onClick={() => setPaused(!paused)}
          // paused={paused}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px"
          }}
          onClick={togglePause}
        >
          {paused ? <Image src={'/Play Button Circled.svg'} alt="" fill /> : ""}
        </div> */}
    </div>
  )
}

export default Video