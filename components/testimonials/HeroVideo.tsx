import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/testimonials/herovideo.module.scss";

type Props = {
  data: {
    heading: string;
    video: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
};

const HeroVideo = (props: Props) => {
  return (
    <div className={Styles.hero_video_wrapper}>
      {/* <Image src={"/testimonial_hero.png"} alt="testimonial-video" fill /> */}
      <video className={Styles.video} src={props.data.video.data.attributes.url}
          autoPlay 
          loop 
          muted 
          playsInline />
      <div className={Styles.hero_heading}>
        <h1>{props.data.heading || "What People Think About Us"}</h1>
      </div>
    </div>
  );
};

export default HeroVideo;
