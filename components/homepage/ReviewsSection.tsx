import React from "react";
import { ReviewsCardType } from "../../interfaces/interfaces";
import TestimonialCarousel from "../TestimonialCarousel";
import VideoQuote from "../VideoQuote";
import Styles from "../../styles/components/homepage/ReviewsSection.module.scss";

const ReviewsData: ReviewsCardType[] = [
  {
    quote: `Ever Since Geeta Didi has ${"\n"} started Working my Kitchen ${"\n"} is no longer a headache for ${"\n"} me`,
    name: "Rishi",
    video: "/review-video-1.png",
    rev: false,
  },
];

const ReviewsSection = () => {
  return (
    <div className={Styles.review_section}>
      <h3>Don’t take our word for it</h3>

      <div className={Styles.video_review}>
        <VideoQuote card={ReviewsData[0]} />
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default ReviewsSection;
