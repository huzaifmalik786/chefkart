import React, { ReactNode, useState, useEffect } from "react";
import Styles from "../styles/components/blogarticlecarousel.module.scss";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogType } from "../interfaces/interfaces";
import UseWindowDimensions from "./WindowSize";
// import { isMobile, isDesktop, isTablet } from "react-device-detect";

type Props = {
  isDots: boolean;
  isArrow: boolean;
  isFull: boolean;
  isInfinite: boolean;
  isSmall?:boolean;
  cards: blogType[]
};
const Images: blogType[] = [
  {
    id: 1,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "blog_image"
        }
      }
    },
    heading: "Lorem ipsum dolor sit amet", read_time: "15 ", tag: "Recipe"
  },
  {
    id: 2,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "blog_image"
        }
      }
    },
    heading: "Lorem ipsum dolor sit amet", read_time: "15 ", tag: "Recipe"
  },
  {
    id: 3,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "blog_image"
        }
      }
    },
    heading: "Lorem ipsum dolor sit amet", read_time: "15 ", tag: "Recipe"
  },
  {
    id: 4,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "blog_image"
        }
      }
    },
    heading: "Lorem ipsum dolor sit amet", read_time: "15 ", tag: "Recipe"
  },
 
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
  const {width}= UseWindowDimensions();
  const [device, setDevice] = useState<string>();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 3,
      slidesToSlide: 1,
      // partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: props.isSmall?2:1.2,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
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
        {(props.cards || Images).map((blog, key) => {
          return (
            <div key={key} className={Styles.items} style={props.isSmall && width<=450?{width:"43.33vw",height:"51.38vw", borderRadius:"1.1vw"}:{}}>
              <Image src={blog.image?.data?.attributes?.url} alt="food" fill className={Styles.img} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}/>
              <div className={Styles.item_overlay} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}>
                <div className={Styles.item_content}>
                  <div className={Styles.item_label}>
                    <button>{blog.tag} </button>
                    <span />
                    <p>{blog.read_time} min read</p>
                  </div>
                  <div className={Styles.item_heading}>
                    <h2 style={props.isSmall && width<=450?{fontSize:"3.33vw", width:"33.33vw"}:{}}>{blog.heading}</h2>
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
