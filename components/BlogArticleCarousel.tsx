import React, { ReactNode, useState, useEffect } from "react";
import Styles from "../styles/components/blogarticlecarousel.module.scss";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { isMobile, isDesktop, isTablet } from "react-device-detect";

type Props = {};

const Images = [
  { img: "/pricing_signup.png", id: 1 },
  { img: "/pricing_signup.png", id: 2 },
  { img: "/pricing_signup.png", id: 3 },
  { img: "/pricing_signup.png", id: 4 },
  { img: "/pricing_signup.png", id: 5 },
];

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
    <div>
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
        // ssr
        // infinite
        arrows={false}
        containerClass={Styles.carousel}
        itemClass={Styles.item}
        // deviceType={device}
        partialVisbile
      >
        {Images.map((img) => {
          return (
            <div key={img.id} className={Styles.items}>
              <Image src={img.img} alt="food" fill className={Styles.img} />
              <div className={Styles.item_overlay}>
                <div className={Styles.item_content}>
                  <div className={Styles.item_label}>
                    <button>Recipe </button>
                    <span />
                    <p>15 min read</p>
                  </div>
                  <div className={Styles.item_heading}>
                    <h3>Lorem ipsum {"\n"}dolor sit amet</h3>
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
