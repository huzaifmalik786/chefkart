import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/investor-relation/investorcarousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const InvestorsData = [
  {
    heading: "Our Investors",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "Deepinder Goyal",
    position: "Lorem ipsum dolor sit amet",
    img: "/investor-1.png",
    companyLogoImg: [
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
    ],
  },
  {
    heading: "Our Investors",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "Deepinder Goyal",
    position: "Lorem ipsum dolor sit amet",
    img: "/investor-1.png",
    companyLogoImg: [
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
    ],
  },
  {
    heading: "Our Investors",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "Deepinder Goyal",
    position: "Lorem ipsum dolor sit amet",
    img: "/investor-1.png",
    companyLogoImg: [
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
      "/uber.svg",
      "/walmart.svg",
    ],
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

const InvestorCarousel = (props: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <div className={Styles.investorcarousel_wrapper}>
      <Carousel
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
        {InvestorsData.map((investor, index) => {
          return (
            <div className={Styles.card} key={index}>
              <div className={Styles.investor_about}>
                <div className={Styles.heading}>
                  <h2>{investor.heading}</h2>
                </div>
                <div className={Styles.desc}>
                  <p>{investor.desc}</p>
                </div>
                <div className={Styles.investor_name}>
                  <h5>{investor.name}</h5>
                  <p>{investor.position}</p>
                </div>
                <div className={Styles.logo_container}>
                  {investor.companyLogoImg.map((logo) => {
                    return (
                      <div key={logo} className={Styles.logo}>
                        <Image src={logo} alt="logo" fill />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={Styles.investor_img}>
                <Image src={investor.img} alt="investor-photo" fill />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default InvestorCarousel;
