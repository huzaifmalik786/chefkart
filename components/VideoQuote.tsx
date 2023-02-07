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
      className={`${Styles.video_wrapper} ${(props.index)%2 !==  0 ? Styles.video_reverse : {}}`}
      // style={(props.index)%2 ==  0 ? {} : {flexDirection: 'row-reverse'}}
    >
      <div className={Styles.video_text}>
        <div className={Styles.image} >
          <Image src={"/comma.svg"} alt="comma" fill />

        </div>
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
        className={Styles.pause_button}
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
