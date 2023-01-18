import React from "react";
import Image from "next/image";
import Styles from "../styles/components/videoquote.module.scss";
import { ReviewsCardType } from "../interfaces/interfaces";

type Props = {
  card: ReviewsCardType;
};

const VideoQuote = (props: Props) => {
  return (
    <div
      className={`${Styles.video_wrapper} ${
        !props.card.rev ? "" : Styles.video_reverse
      }`}
    >
      <div className={Styles.video_text}>
        <Image src={"/comma.svg"} alt="comma" height={33} width={41} />
        <p className={Styles.quote}>{props.card.quote}</p>

        <p> {props.card.name}</p>
      </div>
      <div className={Styles.video}>
        <Image
          src={props.card.video}
          alt="video"
          fill
          className={Styles.video_img}
        />
      </div>
    </div>
  );
};

export default VideoQuote;
