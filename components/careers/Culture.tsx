import React, { useState } from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/culture.module.scss";
import CultureCard from "./CultureCard";
import { CultureCardType } from "../../interfaces/interfaces";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  data: {
    heading: string;
    description: string;
    culture_cards: CultureCardType[]
  }
};

const CultureCardData: CultureCardType[] = [
  {
    text: "Lorem ipsum dolor sit ",
    image:{
      data: {
        attributes: {
          url: "/Synchronize.svg",
          alternativeText: ""
        }
      }
    } ,
  },
  {
    text: "Lorem ipsum dolor sit ",
    image:{
      data: {
        attributes: {
          url: "/TickBox.svg",
          alternativeText: ""
        }
      }
    } ,
  },
  {
    text: "Lorem ipsum dolor sit ",
    image: {
      data: {
        attributes: {
          url: "/Idea.svg",
          alternativeText: ""
        }
      }
    }
  },
  {
    text: "Lorem ipsum dolor sit ",
    image: {
      data: {
        attributes: {
          url: "/TelegramApp.svg",
          alternativeText: ""
        }
      }
    }
  },
];
const colors = ["#ff961f", "#571C5E", "#000000", "#2D4739"]
const Culture = (props: Props) => {
  const [fullText, setFullText] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 4,
      slidesToSlide: 1,
      // partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
    },
  };
  
  
  const text = "Our values outline who we are, what we hope to accomplish, and most crucially, how we intend to carry it out. They lay out our collective course and direct each and every move we make."
  return (
    <div className={Styles.culture_wrapper}>
      <div className={Styles.culture_header}>
        <h3>{props.data.heading || "Culture"}</h3>
        <p style={fullText ? {maxHeight: "none"} : {}}>
          {((props.data.description).substring(0,82) || text.substring(0,82))} <span style={fullText ? {display: "none"} : {}} onClick={()=> setFullText(true)} className={Styles.read_more}>..Read more</span> <span style={fullText ? {display: "inline"} : {}} className={Styles.overflow_text}>{(props.data.description).substring(83) || text.substring(83)}</span>
        </p>
        
      </div>
      <div className={Styles.card_wrapper}>
        {/* {(props.data.culture_cards || CultureCardData).map((card, key) => {
          return <CultureCard card={card} key={key} bg_color={colors[key]} index={key+1} />;
        })} */}
      </div>
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
        // infinite={false}
        arrows={false}
        containerClass={Styles.carousel_container}
        itemClass={Styles.item}
        // deviceType="mobile"
        partialVisbile
      >
        {(props.data.culture_cards || CultureCardData).map((card, key) => {
          return <CultureCard card={card} key={key} bg_color={colors[key]} index={key+1} />;
        })}
      </Carousel>
    </div>
  );
};

export default Culture;
