import React from "react";
import { image_type } from "../../interfaces/interfaces";
import TestimonialCarousel from "../TestimonialCarousel";

type Props = {
  data: {
    review: string;
    name: string;
    stars: number;
    image: image_type
  }[]
};

const Testimonial = (props: Props) => {
  return (
    <div style={{ paddingTop: "10vw", paddingBottom: "6.35vw" }}>
      <TestimonialCarousel cards={props.data} />
    </div>
  );
};

export default Testimonial;
