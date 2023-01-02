import React from "react";
import Styles from "../../styles/components/testimonials/userreviews.module.scss";
import VideoQuote from "../VideoQuote";
import { ReviewsCardType } from "../../interfaces/interfaces";

type Props = {};

const ReviewsData: ReviewsCardType[] = [
  {
    quote: `Ever Since Geeta Didi has ${"\n"} started Working my Kitchen ${"\n"} is no longer a headache for ${"\n"} me`,
    name: "Rishi",
    video: "/review-video-1.png",
    rev: false,
  },
  {
    quote: `My cook is coming on regular ${"\n"} basis, I’ve been eating well, ${"\n"}healthy diet. My health has${"\n"} been better`,
    name: "Rahul",
    video: "/review-video-2.png",
    rev: true,
  },
  {
    quote: `Its been 5 months. My  ${"\n"}business has picked up and ${"\n"} I’m no longer worried about  ${"\n"}kitchen`,
    name: "Sakhi",
    video: "/review-video-3.png",
    rev: false,
  },
  {
    quote: `After Searching online we got${"\n"} to know about Chefkart. It${"\n"} was so easy. Our life is now${"\n"} Sorted`,
    name: "Shikha & Aneesh",
    video: "/review-video-4.png",
    rev: true,
  },
];

const UserReviews = (props: Props) => {
  return (
    <div className={Styles.reviews}>
      {ReviewsData.map((card, index) => {
        return <VideoQuote card={card} key={index} />;
      })}
    </div>
  );
};

export default UserReviews;
