import React, { ReactNode, useState, useEffect } from "react";
import Styles from "../styles/components/blogarticlecarousel.module.scss";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogType, image_type } from "../interfaces/interfaces";
import UseWindowDimensions from "./WindowSize";
import Link from "next/link";
// import { isMobile, isDesktop, isTablet } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  isDots: boolean;
  isArrow: boolean;
  isFull: boolean;
  isInfinite: boolean;
  isSmall?:boolean;
  cards: blogType[]
};

interface ArrowProps {
  onClick?: () => void;
}
const Images: blogType[] = [
  {
    attributes: {
      slug: 'first-blog',
      image: {
        data: {
          attributes: {
            url: "/pricing_signup.png",
            alternativeText: "blog_image"
          }
        }
      },
      title: "Lorem ipsum dolor sit amet", time_to_read: "15 ", 
      tags:[
        {
        feature: "Recipe"
      }
    ]
    }
  },
  {
    attributes: {
      slug: 'first-blog',
      image: {
        data: {
          attributes: {
            url: "/pricing_signup.png",
            alternativeText: "blog_image"
          }
        }
      },
      title: "Lorem ipsum dolor sit amet", time_to_read: "15 ", 
      tags:[
        {
        feature: "Recipe"
      }
    ]
    }
  },
  {
    attributes: {
      slug: 'first-blog',
      image: {
        data: {
          attributes: {
            url: "/pricing_signup.png",
            alternativeText: "blog_image"
          }
        }
      },
      title: "Lorem ipsum dolor sit amet", time_to_read: "15 ", 
      tags:[
        {
        feature: "Recipe"
      }
    ]
    }
  },
  {
    attributes: {
      slug: 'first-blog',
      image: {
        data: {
          attributes: {
            url: "/pricing_signup.png",
            alternativeText: "blog_image"
          }
        }
      },
      title: "Lorem ipsum dolor sit amet", time_to_read: "15 ", 
      tags:[
        {
        feature: "Recipe"
      }
    ]
    }
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

// const ButtonGroup = ({ next, previous, ...rest }: any) => {
//   const {
//     carouselState: { currentSlide },
//   } = rest;
//   return (
//     <div className={Styles.button_group}>
//       <button onClick={() => previous()} className={Styles.prev}>
//         <Image src={"/prev_white.svg"} fill alt="prev" />
//       </button>

//       <button onClick={() => next()} className={Styles.next}>
//         <Image src={"/next_white.svg"} fill alt="prev" />
//       </button>
//     </div>
//   );
// };

const PrevArrow: React.FC<ArrowProps> = ({onClick}) => {
  return (
    <button
      className={Styles.prev}
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        width: "3.88vw",
        zIndex: '1',
        top: "40%",
        aspectRatio: "1/1",
        left: "1.31vw"
      }}
    >
      <Image src={"/prev_white.svg"} fill alt="prev" />
    </button>
  );
};
const NextArrow: React.FC<ArrowProps> = ({onClick}) => {
  return (
    <button
      className={Styles.prev}
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        width: "3.88vw",
        zIndex: '1',
        top: "40%",
        right: "1.31vw",
        aspectRatio: "1/1"
      }}
    >
      <Image src={"/next_white.svg"} fill alt="prev" />
    </button>
  );
};


const BlogArticleCarousel = (props: Props) => {
  const {width}= UseWindowDimensions();
  const [slides, setSlides] = useState<number>(props.cards.length);
  const responsive = [
    // {
    //   breakpoint: 1280,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: props.isSmall?2:1.3,
        slidesToScroll: 1
      }
    }
  ]

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
      {
        slides < 3 && width > 450 ? (
          <div style={{display: "grid", placeContent: "center"}}>
            <Slider
     infinite={true}
     arrows = {props.isArrow}
     prevArrow= {<PrevArrow  />}
     nextArrow={<NextArrow />}
     speed={500}
     slidesToShow = {slides <= 2? slides : 2.8}
     slidesToScroll={1}
     responsive={responsive}
     autoplay={true}

    //  style={{width: "70vw", }}
     >
     {(props.cards || Images).map((blog, key) => {
          return (
            <Link href={`/blogs/${blog.attributes.slug}`} key={key}>
            <div className={Styles.items} style={props.isSmall && width<=450?{width:"43.33vw",height:"51.38vw", borderRadius:"1.1vw"}:{
              marginRight: "0.7vw"
            }}>
              <Image src={blog.attributes.image?.data?.attributes?.url} alt="food" fill className={Styles.img} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}/>
              <div className={Styles.item_overlay} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}>
                <div className={Styles.item_content}>
                  <div className={Styles.item_label}>
                    <button>{blog.attributes.tags[0].feature} </button>
                    <span />
                    <p>{blog.attributes.time_to_read} min read</p>
                  </div>
                  <div className={Styles.item_heading}>
                    <h2 style={props.isSmall && width<=450?{fontSize:"3.33vw", width:"33.33vw"}:{}}>{blog.attributes.title}</h2>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
     </Slider>
          </div>
        ) : (
          <Slider
     infinite={false}
     arrows = {props.isArrow}
     prevArrow= {<PrevArrow  />}
     nextArrow={<NextArrow />}
     speed={500}
     slidesToShow = {slides <= 2? slides : 2.8}
     slidesToScroll={1}
     responsive={responsive}
     autoplay={true}
     >
     {(props.cards || Images).map((blog, key) => {
          return (
            <Link href={`/blogs/${blog.attributes.slug}`} key={key}>
            <div className={Styles.items} style={props.isSmall && width<=450?{width:"43.33vw !important",height:"51.38vw", borderRadius:"1.1vw"}:{}}>
              <Image src={blog.attributes.image?.data?.attributes?.url} alt="food" fill className={Styles.img} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}/>
              <div className={Styles.item_overlay} style={props.isSmall && width<=450?{borderRadius:"1.1vw"}:{}}>
                <div className={Styles.item_content}>
                  <div className={Styles.item_label}>
                    <button>{blog.attributes.tags[0].feature} </button>
                    <span />
                    <p>{blog.attributes.time_to_read} min read</p>
                  </div>
                  <div className={Styles.item_heading}>
                    <h2 style={props.isSmall && width<=450?{fontSize:"3.33vw", width:"33.33vw"}:{}}>{blog.attributes.title}</h2>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
     </Slider>
        ) 
      }
     
        
      
    </div>
  );
};

export default BlogArticleCarousel;
