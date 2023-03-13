import React from "react";
import { image_type } from "../../interfaces/interfaces";
import TestimonialCarousel from "../TestimonialCarousel";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data: {
    review: string;
    name: string;
    stars: number;
    image: image_type
  }[]
};

const Testimonial = (props: Props) => {
  const {width}= UseWindowDimensions();
  return (
    <div style={width>450?{ paddingTop: "3vw", paddingBottom: "4.35vw", paddingLeft:"8vw", paddingRight: "8vw" }:{paddingTop: "0", paddingBottom: "15.35vw" }}>
      <TestimonialCarousel cards={props.data} />
    </div>
  );
};

export default Testimonial;
