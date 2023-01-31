import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/testimonials/herovideo.module.scss";

type Props = {
  
};

const HeroVideo = (props: Props) => {
  return (
    <div className={Styles.hero_video_wrapper}>
      <Image src={"/testimonial_hero.png"} alt="testimonial-video" fill />
      <div className={Styles.hero_heading}>
        <h1>What People Think About Us</h1>
      </div>
    </div>
  );
};

export default HeroVideo;
