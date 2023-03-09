import React, { useState } from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/careershero.module.scss";
import { image_type } from "../../interfaces/interfaces";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselData = [
  {
    image: '/career-hero-1.png'
  },
  {
    image: '/career-hero-2.png'
  },
  {
    image: '/career-hero-3.png'
  },

]
type Props = {
  data: {
    heading: string
    description: string;
    button_text: string;
    images: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }[]
    }
  }
};

const CareersHero = (props: Props) => {
  const [slide,setslide]= useState(carouselData.length);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 540 },
  //     items: 2,
  //     slidesToSlide: 1,
  //     // partialVisibilityGutter: 160,
  //   },
  //   mobile: {
  //     breakpoint: { max: 540, min: 0 },
  //     items: 2,
  //     slidesToSlide: 1,
  //     // partialVisibilityGutter: 120,
  //   },
  // };
  const responsive=[
    {
      breakpoint: 450,
      settings: {
        slidesToShow:1.6,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1.4,
      }
    }
  ]

  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.subcontainer}>
      <div className={Styles.hero_content}>
        <h2>{props.data.heading || "Bring your ambition to make a difference"}</h2>
        <h4>{props.data.description || "Be a part of our family"}</h4>
        <button>{props.data.button_text || "VIEW OPEN POSITIONS"}</button>
      </div>
      <div className={Styles.img_container}>
        {
          props.data.images.data && props.data.images.data[0]  && <div className={Styles.img1}>
          <Image
            src={props.data.images.data[0].attributes.url}
            alt="img"
            // height={489}
            // width={326}
            fill
          />
        </div>
        }
        {
          props.data.images.data && props.data.images.data[1] && <div className={Styles.img2}>
          <Image
            src={props.data.images.data[1].attributes.url}
            alt="img"
            // height={366}
            // width={244}
            fill
          />
        </div>
        }
        {
           props.data.images.data  && props.data.images.data[2] && <div className={Styles.img3}>
           <Image
             src={props.data.images.data[2].attributes.url}
             alt="img"
             // height={366}
             // width={158}
             fill
           />
         </div>
        }
        
        
      </div>
      </div>
      <Slider
        draggable
        responsive={responsive}
        autoplay={false}
        infinite={true}
        arrows={false}
        speed={1000}
        autoplaySpeed={2000}
        slidesToScroll={1}
        className={`careercarousel ${Styles.carousel}`}
        centerMode
      >
        {
          (props.data?.images.data || carouselData).map((item, key)=>{
            return(
              <div key={key} className={`item ${Styles.item}`}>
                <Image
                  src={item?.attributes?.url}
                  alt="img"
                  // height={489}
                  // width={326}
                  fill
                />
            </div>
            )

          })
        }
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
        // centerSlidePercentage={33.33}
        ssr
        infinite
        arrows={false}
        containerClass={Styles.carousel}
        itemClass={Styles.item}
        // deviceType="mobile"
        // centerMode
        partialVisbile
        {...props}
      >
        {
          (carouselData).map((item, key)=>{
            return(
              <div key={key} className={Styles.item}>
                <Image
                  src={item.image}
                  alt="img"
                  // height={489}
                  // width={326}
                  fill
                />
            </div>
            )

          })
        }
      </Carousel> */}
    </div>
  );
};

export default CareersHero;
