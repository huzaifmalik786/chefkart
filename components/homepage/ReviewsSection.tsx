import React from "react";
import { image_type, ReviewsCardType } from "../../interfaces/interfaces";
import TestimonialCarousel from "../TestimonialCarousel";
import VideoQuote from "../VideoQuote";
import Styles from "../../styles/components/homepage/ReviewsSection.module.scss";
import Reveal from "../Reveal";

const ReviewsData: ReviewsCardType[] = [
  {
    review: "Ever Since Geeta Didi has started Working my Kitchen is no longer a headache for me",
    name: "Rishi",
    video: {
      data: {
        attributes: {
          url: "/review-video-1.png"
        }
      }
    }
  },
];
type Props={
  data:{
    section_heading: string;
    review_cards: {
      review: string;
      name: string;
      stars: number;
      image: image_type;
    }[]
    video_review: ReviewsCardType
    
  }
}
const ReviewsSection = (props:Props) => {
  return (
    <div className={Styles.review_section}>
      <Reveal>
      <h3>{props.data?.section_heading || "Don’t take our word for it"}</h3>
      </Reveal>
      <Reveal>
      <div className={Styles.video_review}>
        <VideoQuote card={ props.data?.video_review} index={0} />
      </div>
      </Reveal>
      <Reveal>
      <div className={Styles.cards_review}>
        <TestimonialCarousel cards={props.data?.review_cards}  />
      </div>
      </Reveal>
    </div>
  );
};

export default ReviewsSection;
