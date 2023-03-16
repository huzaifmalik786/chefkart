import React, { useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/investor-relation/investorcarousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { investor_type } from "../../interfaces/interfaces";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data: investor_type[]
};
interface ArrowProps {
  onClick?: () => void;
}

const InvestorsData: investor_type[] = [
  {
    heading: "Our Investors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "Deepinder Goyal",
    designation: "Lorem ipsum dolor sit amet",
    image: {
      data: {
        attributes: {
          url: "/investor-1.png",
          alternativeText: "investor-image"
        }
      }
    },
    company_logos: {
      data: [
        {
          attributes: {
            url: "/uber.svg",
            alternativeText: "logo"

          }
        },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
        {
          attributes: {
            url: "/uber.svg",
            alternativeText: "logo"

          }
        },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
      ],
    }
  },
  {
    heading: "Our Investors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "Deepinder Goyal",
    designation: "Lorem ipsum dolor sit amet",
    image: {
      data: {
        attributes: {
          url: "/investor-1.png",
          alternativeText: "investor-image"
        }
      }
    },
    company_logos: {
      data: [
        {
          attributes: {
            url: "/uber.svg",
            alternativeText: "logo"

          }
        },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
        {
          attributes: {
            url: "/uber.svg",
            alternativeText: "logo"

          }
        },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
        {
          attributes: {
            url: "/walmart.svg",
            alternativeText: "logo"
          },

          },
      ],
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

const ButtonGroup = ({ next, previous, ...rest }: any) => {

  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={Styles.button_group}>
      <button
        onClick={() => previous()}
        className={currentSlide === 0 ? "disable" : Styles.prev}
      >
        <Image src={"/prev_big.svg"} fill alt="prev" />
      </button>

      <button onClick={() => next()} className={Styles.next}>
        <Image src={"/next_big.svg"} fill alt="prev" />
      </button>
    </div>
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
        top: "10vw",
        right: "1.31vw",
        aspectRatio: "1/1"
      }}
    >
      <Image src={"/next_big.svg"} fill alt="prev" />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({onClick}) => {
  return (
    <button
      className={Styles.prev}
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        width: "3.01vw",
        zIndex: '1',
        top: "10.3vw",
        aspectRatio: "1/1",
        left: "1.31vw"
      }}
    >
      <Image src={"/prev_big.svg"} fill alt="prev" />
    </button>
  );
};

const InvestorCarousel = (props: Props) => {
  const {width}= UseWindowDimensions();

  const [fullText, setFullText] = useState(false);

  

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 540 },
  //     items: 2,
  //     slidesToSlide: 1,
  //     partialVisibilityGutter: 160,
  //   },
  //   mobile: {
  //     breakpoint: { max: 540, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //     // partialVisibilityGutter: 120,
  //   },
  // };
  return (
    <div className={Styles.investorcarousel_wrapper}>
      <div className={Styles.heading}>
            <h2>{props?.data[0]?.heading}</h2>
      </div>
      <Slider
         draggable
         slidesToShow={1}
        //  autoplay
         infinite={false}
         arrows={width<=450?false:true}
         speed={1000}
         autoplaySpeed={2000}
         slidesToScroll={1}
         className={Styles.carousel}
         nextArrow={<NextArrow/>}
         prevArrow={<PrevArrow/>}
         
      >
      {(props.data || InvestorsData).map((investor, index) => {
          return (
            <div className={Styles.card} key={index}>
              <div className={Styles.investor_about}>
                
                <div className={Styles.desc} style={fullText ? {maxHeight: "none"} : {}}>
                  <p>{investor?.description?.substring(0, 70)}
                  <span style={fullText || investor.description?.length<70 || !investor.description ? {display: "none"} : {}} onClick={()=> setFullText(true)} className={Styles.read_more}>..Read more</span>
                  <span style={fullText ? {display: "inline"} : {}} className={Styles.overflow_text}>{(investor.description)?.substring(70)}</span></p>
                </div>
                <div className={Styles.investor_name}>
                  <h5>{investor.name}</h5>
                  <p>{investor.designation}</p>
                </div>
                <div className={Styles.logo_container}>
                  {investor?.company_logos?.data?.map((logo, key) => {
                    return (
                      <div key={key} className={Styles.logo}>
                        <Image src={logo.attributes.url} alt="logo" fill />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
              <div className={Styles.investor_img}>
                <Image src={investor.image?.data?.attributes?.url} alt={investor.image?.data?.attributes?.alternativeText || "investor-photo"} fill />
              </div>
              <div className={Styles.investor_name_mobile_only}>
                  <h5>{investor.name}</h5>
                  <p>{investor.designation}</p>
                </div>

              </div>
            </div>
          );
        })}
      </Slider>
      {/* <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        // autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        ssr
        infinite={false}
        containerClass={Styles.carousel}
        itemClass={Styles.item}
        // deviceType={device}
        arrows={false}
        customDot={<CustomDot />}
        customButtonGroup={<ButtonGroup />}
        partialVisbile
        // renderDotsOutside
      >
        {(props.data || InvestorsData).map((investor, index) => {
          return (
            <div className={Styles.card} key={index}>
              <div className={Styles.investor_about}>
                <div className={Styles.heading}>
                  <h2>{investor.heading}</h2>
                </div>
                <div className={Styles.desc} style={fullText ? {maxHeight: "none"} : {}}>
                  <p>{(investor.description).substring(0, 70)}<span style={fullText ? {display: "none"} : {}} onClick={()=> setFullText(true)} className={Styles.read_more}>..Read more</span><span style={fullText ? {display: "inline"} : {}} className={Styles.overflow_text}>{(investor.description).substring(71)}</span></p>
                </div>
                <div className={Styles.investor_name}>
                  <h5>{investor.name}</h5>
                  <p>{investor.designation}</p>
                </div>
                <div className={Styles.logo_container}>
                  {investor.company_logos.data.map((logo, key) => {
                    return (
                      <div key={key} className={Styles.logo}>
                        <Image src={logo.attributes.url} alt="logo" fill />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
              <div className={Styles.investor_img}>
                <Image src={investor.image?.data?.attributes?.url} alt={investor.image?.data?.attributes?.alternativeText || "investor-photo"} fill />
              </div>
              <div className={Styles.investor_name_mobile_only}>
                  <h5>{investor.name}</h5>
                  <p>{investor.designation}</p>
                </div>

              </div>
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default InvestorCarousel;
