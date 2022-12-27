import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import Styles from "../../styles/components/homepage/artisans.module.scss";
import "react-multi-carousel/lib/styles.css";

type chef = {
  id: number;
  image: string;
  name: string;
  stars: number;
  experience: string;
  specialization: string[];
};

const chef_array: chef[] = [
  {
    id: 0,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
  {
    id: 1,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
  {
    id: 2,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
  {
    id: 3,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
  {
    id: 4,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
  {
    id: 4,
    image: "/pricing_signup.png",
    name: "Rajesh Rathod",
    stars: 4.2,
    experience: "10+",
    specialization: ["North Indian", "South Indian", "Chinese", "Continental"],
  },
];
const Artisans = () => {
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

  return (
    <div className={Styles.chef_container}>
      <h3>Meet the Food Artisans</h3>

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
        {chef_array.map((c, key) => {
          return (
            
            <div key={c.id} className={Styles.item}>
              <Image src={c.image} alt="" fill />
              <div className={Styles.inset}></div>
              <div className={Styles.upper_content}>
                <div className="">
                <p className={Styles.name}>{c.name}</p>
                <p className={Styles.rating}>
                  <div className={Styles.badge}>
                    {c.stars}{" "}
                    <div className={Styles.star}>
                      {" "}
                      <Image src="/star.png" fill alt="" />
                    </div>
                  </div>{" "}
                  <span className={Styles.experience}>&nbsp; &nbsp;• &nbsp; &nbsp;{c.experience} yrs experience</span>
                </p>
                </div>

                <div className={Styles.hover_overlay}>
                    <p className={Styles.specialize_heading}>Specializes in:</p>
                    <div>
                    {
                        (c.specialization).map((s, key)=>{
                            return(
                                <span className={Styles.pills} key={key}>{s}</span>
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
