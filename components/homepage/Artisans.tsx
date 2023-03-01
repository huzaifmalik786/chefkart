import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Styles from "../../styles/components/homepage/artisans.module.scss";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../../lib/api";
import { chefType } from "../../interfaces/interfaces";
import UseWindowDimensions from "../WindowSize";
import Slider from "react-slick";

type Props={
  data: {
    heading: string;
    chef_array: chefType[]
  }
}

const chef_array: chefType[] = [
  {
    id: 0,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 1,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 2,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 3,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 4,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
  {
    id: 4,
    image: {
      data: {
        attributes: {
          url: "/pricing_signup.png",
          alternativeText: "chef"
        }
      }
    },
    name: "Rajesh Rathod",
    rating: 4.2,
    experience: "10+",
    specialization: [{feature: "North Indian"}, {feature: "South Indian"}, {feature: "Chinese"}, {feature: "Continental"}],
  },
];
const Artisans = (props: Props) => {
  const [slide,setslides]= useState<number>((props.data.chef_array).length);
  // const slide= props.data.chef_array.length;
  const {width}= UseWindowDimensions();
  const responsive=[
    {
      breakpoint: 3000,
      settings: {
        slidesToShow:slide>3?3.6:slide,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.1,
      }
    },
    {
      breakpoint: 310,
      settings: {
        slidesToShow: 1,
      }
    }
  ]


  return (
    <div className={Styles.chef_container}>
      <h3>{props.data.heading || "Meet the Food Artisans"}</h3>

      <Slider
        infinite={true}
        arrows={false}
        speed={1000}
        autoplay
        centerMode
        autoplaySpeed={2000}
        slidesToScroll={1}
        draggable
        responsive= {responsive}
      >
       {(props.data?.chef_array || chef_array).map((c, key) => {
          return (
            
            <div key={key} className={Styles.item}>
              <Image src={c.image?.data?.attributes?.url} alt="" fill />
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
                  <span className={Styles.experience}>&nbsp; • &nbsp;{c?.experience} yrs experience</span>
                </div>
                </div>

                <div className={width<=450?Styles.overlay: Styles.hover_overlay}>
                    <p className={Styles.specialize_heading}>Specializes in:</p>
                    {width<=450?(
                      <div className={Styles.pills_container}>
                      {
                          (c.specialization).map((s, key)=>{
                            if(key<3)
                              return(
                                  <span className={Styles.pills} key={key}>{s?.feature}</span>
                              )
                          })
                      }
                      <div className={Styles.button}>
                        <button style={{background:"none",fontSize:"2.7vw"}}>
                            {c.specialization.length>3?`+${c?.specialization.length-3} more`:""}
                        </button>
                      </div>
                      </div>
                    ):(
                      <div className={Styles.pills_container}>
                      {
                          (c.specialization).map((s, key)=>{
                              return(
                                  <span className={Styles.pills} key={key}>{s.feature}</span>
                              )
                          })
                      }
                      </div>
                    )}
                    
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Artisans;
