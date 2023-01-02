import React from "react";

import Styles from "../../styles/components/testimonials/ourword.module.scss";
import TestimonialCarousel from "../TestimonialCarousel";

type Props = {};

const OurWord = (props: Props) => {
  return (
    <div className={Styles.testimonial_wrapper}>
      <h2>Don’t take our word for it</h2>
      <TestimonialCarousel />
    </div>
  );
};

export default OurWord;
