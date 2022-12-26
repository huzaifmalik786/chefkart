import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/join-as-chef/videocomponent.module.scss";

type Props = {};

const VideoComponent = (props: Props) => {
  return (
    <div className={Styles.video_wrapper}>
      <div className={Styles.video_text}>
        <Image src={"/comma.svg"} alt="comma" height={33} width={41} />
        <h2>Yeh sirf ek ghar ki nahi,{"\n"}har ghar ki kahani hai.</h2>
        <p>Rishi</p>
      </div>
      <div className={Styles.video}>
        <Image src={"/join-video.png"} alt="video" width={773} height={468} />
      </div>
    </div>
  );
};

export default VideoComponent;
