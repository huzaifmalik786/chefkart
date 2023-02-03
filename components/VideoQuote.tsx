import React, { useRef, useState } from "react";
import Image from "next/image";
import Styles from "../styles/components/videoquote.module.scss";
import { ReviewsCardType } from "../interfaces/interfaces";
import Video from "./Video";

type Props = {
  card: ReviewsCardType;
  index: number
};

const VideoQuote = (props: Props) => {
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
    <div
      className={Styles.video_wrapper}
      style={(props.index)%2 ==  0 ? {} : {flexDirection: 'row-reverse'}}
    >
      <div className={Styles.video_text}>
        <Image className={Styles.image} src={"/comma.svg"} alt="comma" height={33} width={41} />
        <p className={Styles.quote}>{props.card.review}</p>

        <p className={Styles.name}> {props.card.name}</p>
      </div>
      <div className={Styles.video_container}>
        <video
          ref={videoRef}
          src={props.card.video.data?.attributes.url}
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
        {/* <Video link={props.card.video.data?.attributes.url} /> */}
      </div>
    </div>
  );
};

export default VideoQuote;
