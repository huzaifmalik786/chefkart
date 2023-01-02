import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/careers/endcarousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const Images = [
  { img: "/footer_carousel.png", id: 1 },
  { img: "/footer_carousel.png", id: 2 },
  { img: "/footer_carousel.png", id: 3 },
  { img: "/footer_carousel.png", id: 4 },
  { img: "/footer_carousel.png", id: 5 },
];

const ButtonGroup = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={Styles.custom_button_group}>
      <button onClick={() => previous()} className={Styles.prev}>
        <Image src={"/prev_big.svg"} fill alt="prev" />
      </button>

      <button onClick={() => next()} className={Styles.next}>
        <Image src={"/next_big.svg"} fill alt="prev" />
      </button>
    </div>
  );
};

const EndCarousel = (props: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 120,
    },
  };
  return (
    <div className={Styles.end_carousel}>
      <div className={Styles.carousel_header}>
        <h1>Lorem Ipsum Dolor</h1>
        <p>Our values outline who we are, what we hope to accomplish, </p>
      </div>
      <div className={Styles.carousel_wrapper}>
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          // autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={900}
          rewindWithAnimation
          customTransition="transform 900ms ease-in"
          ssr
          infinite
          containerClass={Styles.carousel}
          itemClass={Styles.item}
          // deviceType={device}
          arrows={false}
          // renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          partialVisbile
          renderDotsOutside
        >
          {Images.map((img) => {
            return (
              <div key={img.id} className={Styles.items}>
                <Image src={img.img} alt="food" fill className={Styles.img} />
                <div className={Styles.item_overlay}>
                  <div className={Styles.item_content}>
                    <div className={Styles.item_label}>
                      <span>Lorem ipsum </span>
                    </div>
                    <div className={Styles.item_heading}>
                      <h4>Lorem ipsum dolor sit amet,{"\n"} consectetur </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default EndCarousel;
