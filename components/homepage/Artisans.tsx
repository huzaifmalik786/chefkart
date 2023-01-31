import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Styles from "../../styles/components/homepage/artisans.module.scss";
import "react-multi-carousel/lib/styles.css";
import useFetchData from "../../lib/api";
import { chefType } from "../../interfaces/interfaces";

type Props={
  data: {
    heading: string;
    chef_array: chefType[]
  }
}

const chef_array: chefType[] = [
  {
    id: 0,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 1,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 2,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 3,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 4,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 4,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
];
const Artisans = (props: Props) => {
  
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
      // partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
    },
  };


  return (
    <div className={Styles.chef_container}>
      <h3>{props.data.heading || "Meet the Food Artisans"}</h3>

      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        // ssr
        centerMode
        infinite
        arrows={false}
        containerClass={Styles.artisans}
        itemClass={Styles.item}
        // partialVisbile
      >
        {(props.data.chef_array || chef_array).map((c, key) => {
          return (
            
            <div key={key} className={Styles.item}>
              <Image src={c.image} alt="" fill />
              <div className={Styles.inset}></div>
              <div className={Styles.upper_content}>
                <div className="">
                <p className={Styles.name}>{c.name}</p>
                <div className={Styles.rating}>
                  <div className={Styles.badge}>
                    {c.rating}{" "}
                    <div className={Styles.star}>
                      {" "}
                      <Image src="/star.png" fill alt="" />
                    </div>
                  </div>{" "}
                  <span className={Styles.experience}>&nbsp; • &nbsp;{c.experience} yrs experience</span>
                </div>
                </div>

                <div className={Styles.hover_overlay}>
                    <p className={Styles.specialize_heading}>Specializes in:</p>
                    <div className={Styles.pills_container}>
                    {
                        (c.specialization).map((s, key)=>{
                            return(
                                <span className={Styles.pills} key={key}>{s.feature}</span>
                            )
                        })
                    }
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

export default Artisans;
