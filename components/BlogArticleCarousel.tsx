import React, { ReactNode, useState, useEffect } from "react";
import Styles from "../styles/components/blogarticlecarousel.module.scss";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { isMobile, isDesktop, isTablet } from "react-device-detect";

type Props = {
  isDots: boolean;
  isArrow: boolean;
  isFull: boolean;
  isInfinite: boolean;
  
};
type blog = {
  img: string;
  id: number;
}
const Images: blog[] = [
  { img: "/pricing_signup.png", id: 1 },
  { img: "/pricing_signup.png", id: 2 },
  { img: "/pricing_signup.png", id: 3 },
  { img: "/pricing_signup.png", id: 4 },
  { img: "/pricing_signup.png", id: 5 },
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

const ButtonGroup = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={Styles.button_group}>
      <button onClick={() => previous()} className={Styles.prev}>
        <Image src={"/prev_white.svg"} fill alt="prev" />
      </button>

      <button onClick={() => next()} className={Styles.next}>
        <Image src={"/next_white.svg"} fill alt="prev" />
      </button>
    </div>
  );
};

const BlogArticleCarousel = (props: Props) => {
  const [device, setDevice] = useState<string>();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  // useEffect(() => {
  //   if (isMobile) {
  //     setDevice("mobile");
  //   } else if (isDesktop) {
  //     setDevice("desktop");
  //   } else if (isTablet) {
  //     setDevice("tablet");
  //   }
  // }, []);

  // console.log(device);

  return (
    <div className={Styles.blogcarousel_wrapper}>
      <Carousel
        swipeable
        draggable
        showDots={props.isDots}
        responsive={responsive}
        // autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        ssr
        infinite={props.isInfinite}
        containerClass={!props.isFull ? Styles.carousel : Styles.full_carousel}
        itemClass={Styles.item}
        // deviceType={device}
        arrows={false}
        customDot={<CustomDot />}
        customButtonGroup={props.isArrow ? <ButtonGroup /> : null}
        partialVisbile
        renderDotsOutside
      >
        {Images.map((blog, key) => {
          return (
            <div key={key} className={Styles.items}>
              <Image src={blog.img} alt="food" fill/>
              <div className={Styles.item_overlay}>
                <div className={Styles.item_content}>
                  <div className={Styles.item_label}>
                    <button>Recipe </button>
                    <span />
                    <p>15 min read</p>
                  </div>
                  <div className={Styles.item_heading}>
                    <h2>Lorem ipsum {"\n"}dolor sit amet</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BlogArticleCarousel;
