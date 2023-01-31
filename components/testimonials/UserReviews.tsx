import React from "react";
import Styles from "../../styles/components/testimonials/userreviews.module.scss";
import VideoQuote from "../VideoQuote";
import { ReviewsCardType } from "../../interfaces/interfaces";

type Props = {
  data: ReviewsCardType[]
};

const ReviewsData: ReviewsCardType[] = [
  {
    review: `Ever Since Geeta Didi has started Working my Kitchen is no longer a headache for me`,
    name: "Rishi",
    video: {
      data: {
        attributes: {
          url: "/review-video-1.png"
        }
      }
    }
  },
  {
    review: `My cook is coming on regular  basis, I’ve been eating well, healthy diet. My health has been better`,
    name: "Rahul",
    video: {
      data: {
        attributes: {
          url: "/review-video-1.png"
        }
      }
    }
  },
  {
    review: `Its been 5 months. My  business has picked up and  I’m no longer worried about  kitchen`,
    name: "Sakhi",
    video: {
      data: {
        attributes: {
          url: "/review-video-1.png"
        }
      }
    }
  },
  {
    review: `After Searching online we got to know about Chefkart. It was so easy. Our life is now Sorted`,
    name: "Shikha & Aneesh",
    video: {
      data: {
        attributes: {
          url: "/review-video-1.png"
        }
      }
    }
  },
];

const UserReviews = (props: Props) => {
  return (
    <div className={Styles.reviews}>
      {(props.data || ReviewsData).map((card, index) => {
        return <VideoQuote card={card} key={index} index={index} />
      })}
    </div>
  );
};

export default UserReviews;
