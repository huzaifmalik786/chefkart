import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/careershero.module.scss";
import { image_type } from "../../interfaces/interfaces";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      // partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
    },
  };

  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.subcontainer}>
      <div className={Styles.hero_content}>
        <h2>{props.data.heading || "Bring your ambition to make a difference"}</h2>
        <h4>{props.data.description || "Be a part of our family"}</h4>
        <button>{props.data.button_text || "VIEW OPEN POSITIONS"}</button>
      </div>
      <div className={Styles.img_container}>
        <div className={Styles.img1}>
          <Image
            src={props.data.images.data[0].attributes.url || "/career-hero-1.png"}
            alt="img"
            // height={489}
            // width={326}
            fill
          />
        </div>
        <div className={Styles.img2}>
          <Image
            src={props.data.images.data[1].attributes.url ||"/career-hero-2.png"}
            alt="img"
            // height={366}
            // width={244}
            fill
          />
        </div>
        <div className={Styles.img3}>
          <Image
            src={props.data.images.data[2].attributes.url || "/career-hero-3.png"}
            alt="img"
            // height={366}
            // width={158}
            fill
          />
        </div>
      </div>
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
      </Carousel>
    </div>
  );
};

export default CareersHero;
