import React, { useEffect, useState } from "react";
import Styles from "../../styles/components/homepage/fooddisplay.module.scss";

import "react-multi-carousel/lib/styles.css";
import CircularCarousel from "./CircularCarousel";

import UseWindowDimensions  from '../WindowSize';
import Reveal from "../Reveal";

type Props = {};
type styleType = {
  color: string;
  marginTop: string;
  // width: string;
  position: "absolute" | "fixed" | "relative" | "static" | "sticky";
  transition: string;
};
const words = ["Indian?", "Italian?", "Chinese?", "Mexican?"];

const Images = [
  { img: "/food-1.png", id: 1 },
  { img: "/food-2.png", id: 2 },
  { img: "/food-3.png", id: 3 },
  { img: "/food-4.png", id: 4 },
  { img: "/food-5.png", id: 5 },
];

const FoodDisplay = (props: Props) => {
  const { width, height } = UseWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const wordElements = words.map((word, index) => {
    const style: styleType = {
      color: "#FF8811",
      marginTop: "",
      // width: '8.3vw',
      position: "absolute",
      transition: "margin-top 0.7s, width 0.5s ease-in-out",
    };
    if (index === currentIndex && index === 0) {
      style.marginTop = "0px";
      style.position = "relative";
      // style.width = '10.41vw'
    } else if (index === currentIndex && index === 1) {
      style.marginTop = "0px";
      style.color = "#FF6978";
      style.position = "relative";
      //  style.width = '10.41vw'
    } else if (index === currentIndex && index === 2) {
      style.marginTop = "0px";
      style.color = "#4F4789";
      style.position = "relative";
      //  style.width = '12.8vw'
    } else if (index === currentIndex && index === 3) {
      style.marginTop = "0px";
      style.color = "#214E34";
      style.position = "relative";
      //  style.width = '13.3vw'
    } else {
      if(width<=450){
        style.marginTop = `${index > currentIndex ? "6.47vw" : `-6.47vw`}`;
      }
      else{
        style.marginTop = `${index > currentIndex ? "3.47vw" : `-3.47vw`}`;
      }
    }

    return (
      <div className={Styles.slider_word} key={index} style={style}>
        {word}
      </div>
    );
  });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % words.length);
    }, 2000)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={Styles.ellipse}>
      <div className={Styles.food_display_wrapper}>
        <Reveal>
        <div className={Styles.food_heading}>
          {/* <h3>
          Feeling <span style={{ color: "#FF8811" }}>Indian?</span> */}
          {/* <span style={{ color: "#FF6978" }}>Chinease?</span>
            <span style={{ color: "#4F4789" }}>Italian?</span>
            <span style={{ color: "#214E34" }}>Mexican?</span> */}
          {/* you got it, without
          <br /> the ridiculous spends ordering online
        </h3> */}
          <div className={Styles.heading_text}>
            
            <div style={{ display: "flex" }}>
              {" "}
              Feeling &nbsp; <div className={Styles.slider}>{wordElements}</div>
              &nbsp; you got it,
            </div>
            without the ridiculous spends ordering online
          </div>
          {/* <div className={Styles.heading_text}>
            
            <div style={{ display: "flex" }}>
              {" "}
              Feeling &nbsp; <div className={Styles.slider}>{wordElements}</div>
              &nbsp; you got
            </div>
            the ridiculous spends ordering online
          </div> */}
        </div>
        </Reveal>

        {/* <div className={Styles.carousel_wrapper}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          transitionDuration={900}
          rewindWithAnimation
          // customTransition="transform 900ms smooth 0s"
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
      </div> */}
        <CircularCarousel />
      </div>
    </div>
  );
};

export default FoodDisplay;
