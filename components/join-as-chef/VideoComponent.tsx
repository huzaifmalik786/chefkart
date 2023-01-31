import Image from "next/image";
import React, { useRef, useState } from "react";
import { image_type } from "../../interfaces/interfaces";
import Styles from "../../styles/components/join-as-chef/videocomponent.module.scss";

type Props = {
  data: {
    review: string;
    name: string;
    video: image_type
  }

};

const VideoComponent = (props: Props) => {
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
    <div className={Styles.video_wrapper}>
      <div className={Styles.video_text}>
        <Image src={"/comma.svg"} alt="comma" height={33} width={41} />
        <h2>{props.data.review || "Yeh sirf ek ghar ki nahi, har ghar ki kahani hai."}</h2>
        <p>{props.data.name || "Rishi"}</p>
      </div>
      <div className={Styles.video_container}>
        {/* <Image src={"/join-video.png"} alt="video" width={773} height={468} /> */}
        <video
          ref={videoRef}
          src={props.data.video.data?.attributes.url}
          loop
          className={Styles.video}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "5.55vw",
            height: "5.55vw"
          }}
          onClick={togglePause}
        >
          {paused ? <Image src={'/Play Button Circled.svg'} alt="" fill /> : ""}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
