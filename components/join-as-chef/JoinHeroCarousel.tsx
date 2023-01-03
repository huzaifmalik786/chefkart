import React from "react";

import Styles from "../../styles/components/join-as-chef/joinherocarousel.module.scss";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const Images = [
  { img: "/join-carousel.png", id: 1 },
  { img: "/join-carousel.png", id: 2 },
  { img: "/join-carousel.png", id: 3 },
];

const CustomDot = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = [1, 2, 3, 4, 5];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? Styles.active : Styles.inactive}
      onClick={() => onClick()}
    >
      {/* {React.Children.toArray(carouselItems)[index]} */}
      <p />
    </button>
  );
};

const JoinHeroCarousel = (props: Props) => {
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
  return (
    <div className={Styles.carousel_wrapper}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        // autoPlay={true}
        // autoPlaySpeed={2000}
        // transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        ssr
        infinite
        arrows={false}
        containerClass={Styles.hero_carousel}
        itemClass={Styles.item}
        deviceType={"desktop"}
        customDot={<CustomDot />}
        // centerMode

        // partialVisbile
      >
        {Images.map((img) => {
          return (
            <div key={img.id} className={Styles.items}>
              <div className={Styles.carousel_img}>
                <Image src={img.img} alt="food" fill />
              </div>
              <div className={Styles.carousel_text}>
                <h1>Lorem Ipsum,</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <button>Sign up now</button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default JoinHeroCarousel;
