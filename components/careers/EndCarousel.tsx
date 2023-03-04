import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/careers/endcarousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { image_type } from "../../interfaces/interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseWindowDimensions from "../WindowSize";
type Props = {
  data: {
    heading: string;
    description: string;
    carousel: {
      heading: string;
      badge: string;
      image: image_type;
    }[]

  }
};

interface ArrowProps {
  onClick?: () => void;
}

const Images = [
  {
    heading: "Lorem ipsum dolor sit amet, consectetur",
    badge: "Lorem ipsum",
    image: {
      data: {
        attributes: {
          url: "/footer_carousel.png",
          alternativeText: ""
        }
      }
    }
  },
  {
    heading: "Lorem ipsum dolor sit amet, consectetur",
    badge: "Lorem ipsum",
    image: {
      data: {
        attributes: {
          url: "/footer_carousel.png",
          alternativeText: ""
        }
      }
    }
  },
  {
    heading: "Lorem ipsum dolor sit amet, consectetur",
    badge: "Lorem ipsum",
    image: {
      data: {
        attributes: {
          url: "/footer_carousel.png",
          alternativeText: ""
        }
      }
    }
  },
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

const MobileButtonGroup = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={Styles.carousel_buttons}>
      <button onClick={() => previous()} className={Styles.prev}>
        <Image src={"/prev_big.svg"} fill alt="prev" />
      </button>

      <button onClick={() => next()} className={Styles.next}>
        <Image src={"/next_big.svg"} fill alt="prev" />
      </button>
    </div>
  );
};
const NextArrow: React.FC<ArrowProps> = ({onClick}) => {
  const {width}= UseWindowDimensions();
  return (
    <button
      className={Styles.prev}
      onClick={onClick}
      style={width>450?{
        backgroundColor: "transparent",
        position: "absolute",
        width: "3.88vw",
        zIndex: '1',
        top: "19.9vw",
        right: "1.31vw",
        aspectRatio: "1/1"
      }:{
        backgroundColor: "transparent",
        position: "absolute",
        width: "7.2vw",
        zIndex: '1',
        top: "44.45vw",
        right: "38.31vw",
        aspectRatio: "1/1"
      }}
    >
      <Image src={"/next_big.svg"} fill alt="prev" />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({onClick}) => {
  const {width}= UseWindowDimensions();
  return (
    <button
      className={Styles.prev}
      onClick={onClick}
      style={width>450?{
        backgroundColor: "transparent",
        position: "absolute",
        width: "3.11vw",
        zIndex: '1',
        top: "20vw",
        aspectRatio: "1/1",
        left: "1.31vw"
      }:{
        backgroundColor: "transparent",
        position: "absolute",
        width: "6vw",
        zIndex: '1',
        top: "45vw",
        aspectRatio: "1/1",
        left: "38.31vw"
      }}
    >
      <Image src={"/prev_big.svg"} fill alt="prev" />
    </button>
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
      items: 1,
      slidesToSlide: 1,
      // partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
    },
  };
  return (
    <div className={Styles.end_carousel}>
      <div className={Styles.carousel_header}>
        <h1>{props.data?.heading || "Lorem Ipsum Dolor"}</h1>
        <p>{props.data?.description || "Our values outline who we are, what we hope to accomplish, "}</p>
      </div>
      <div className={Styles.carousel_wrapper}>
        <Slider
            draggable
           autoplay
            speed={1000}
            autoplaySpeed={2000}
           infinite={true}
           slidesToShow= {1}
           slidesToScroll= {1}
           nextArrow={<NextArrow />}
           prevArrow= {<PrevArrow />}
           className={Styles.carousel}
        >
        {(props.data?.carousel || Images).map((img, key) => {
            return (
              <div key={key} className={Styles.items}>
                <Image src={img.image.data.attributes.url} alt={img.image.data.attributes.alternativeText || "food"} fill className={Styles.img} />
                <div className={Styles.item_overlay}>
                  <div className={Styles.item_content}>
                    <div className={Styles.item_label}>
                      <span>{img.badge || "Lorem ipsum "}</span>
                    </div>
                    <div className={Styles.item_heading}>
                      <h4>{img.heading || "Lorem ipsum dolor sit amet, consectetur"} </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* <Carousel
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
          {(props.data.carousel || Images).map((img, key) => {
            return (
              <div key={key} className={Styles.items}>
                <Image src={img.image.data.attributes.url} alt={img.image.data.attributes.alternativeText || "food"} fill className={Styles.img} />
                <div className={Styles.item_overlay}>
                  <div className={Styles.item_content}>
                    <div className={Styles.item_label}>
                      <span>{img.badge || "Lorem ipsum "}</span>
                    </div>
                    <div className={Styles.item_heading}>
                      <h4>{img.heading || "Lorem ipsum dolor sit amet, consectetur"} </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel> */}
        {/* <MobileButtonGroup/> */}
      </div>
    </div>
  );
};

export default EndCarousel;
