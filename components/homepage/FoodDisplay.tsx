import React from "react";
import Styles from "../../styles/components/homepage/fooddisplay.module.scss";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={Styles.food_display_wrapper}>
      <div className={Styles.food_heading}>
        <h3>
          Feeling Indian? you got it, without
          <br /> the ridiculous spends ordering online
        </h3>
      </div>
      <div className={Styles.carousel_wrapper}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          // autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={900}
          rewindWithAnimation
          customTransition="transform 900ms ease-in"
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
                <Image src={img.img} alt="food" height={"500"} width={500} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodDisplay;
