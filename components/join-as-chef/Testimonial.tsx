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
    <div style={width>450?{ paddingTop: "10vw", paddingBottom: "6.35vw", paddingLeft:"11vw", paddingRight: "11vw" }:{paddingTop: "10vw", paddingBottom: "15.35vw" }}>
      <TestimonialCarousel cards={props.data} />
    </div>
  );
};

export default Testimonial;
