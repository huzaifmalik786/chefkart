import React from "react";
import Styles from "../../styles/components/homepage/fooddisplay.module.scss";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type Props = {};

const Images = [
  { img: "/food-1.png", id: 1 },
  { img: "/food-2.png", id: 2 },
  { img: "/food-3.png", id: 3 },
  { img: "/food-4.png", id: 4 },
  { img: "/food-5.png", id: 5 },
];

const FoodDisplay = (props: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  setTimeout(() => {
    console.log("Hello, World!");
  }, 3000);

  return (
    <div className={Styles.food_display_wrapper}>
      <div className={Styles.food_heading}>
        <h3>
          Feeling <span style={{ color: "#FF8811" }}>Indian?</span>
          <span style={{ color: "#FF6978" }}>Chinease?</span>
          <span style={{ color: "#4F4789" }}>Italian?</span>
          <span style={{ color: "#214E34" }}>Mexican?</span>
          you got it, without
          <br /> the ridiculous spends ordering online
        </h3>
      </div>

      <div className={Styles.carousel_wrapper}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={900}
          rewindWithAnimation
          customTransition="transform 900ms smooth"
          ssr
          infinite
          arrows={false}
          containerClass={Styles.carousel}
          itemClass={Styles.item}
          deviceType={"desktop"}
          centerMode
          // partialVisbile
        >
          {Images.map((img) => {
            return (
              <div key={img.id} className={Styles.items}>
                <Image className={Styles.photo} src={img.img} alt="food" fill />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodDisplay;
