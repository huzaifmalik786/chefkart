import React from "react";
import { image_type } from "../../interfaces/interfaces";

import Styles from "../../styles/components/testimonials/ourword.module.scss";
import TestimonialCarousel from "../TestimonialCarousel";

type Props = {
  heading: string;
  carousel_data: {
    review: string;
    name: string;
    stars: number;
    image: image_type
  }[]
};

const OurWord = (props: Props) => {
  return (
    <div className={Styles.testimonial_wrapper}>
      <h2>{props?.heading || "Don’t take our word for it"}</h2>
      <TestimonialCarousel cards={props?.carousel_data} />
    </div>
  );
};

export default OurWord;
