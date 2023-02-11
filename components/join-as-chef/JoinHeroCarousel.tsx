import React, { useState } from "react";
import Styles from "../../styles/components/join-as-chef/joinherocarousel.module.scss";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../careers/Modal";
import SignupForm from "../Forms/SignupForm";
import ThankYou from "../Forms/ThankYou";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  data: {
    image: image_type
    heading: {
      text: string;
      highlight: string;
    }[]
    description: {
      text: string;
      highlight: string;
    }[]

    button: {
      button_text: string;
    }

  }[]
};

const Images = [
{
  image: {
    data: {
      attributes: {
        url: '/join-carousel-1.png'
      }
    }
  }
}
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

const JoinHeroCarousel = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false)
  
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
  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed)
  }

  return (
    <>
    {
      secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal}><ThankYou /></Modal>
    }
    {
      openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><SignupForm setOpenModal={handlemodalClosed} openModal={openModal} /></Modal>
    }
    <div className={Styles.carousel_wrapper}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={1200}
        rewindWithAnimation
        customTransition="transform 1200ms ease-out"
        ssr
        infinite
        arrows={false}
        containerClass={Styles.hero_carousel}
        itemClass={Styles.item}
        deviceType={"desktop"}
        customDot={<CustomDot />}
        // centerMode

        // partialVisbile
      >
        {(props.data || Images).map((img, key) => {
          return (
            <div key={key} className={Styles.items}>
              <div className={Styles.carousel_img}>
                <Image src={img.image.data.attributes.url} alt={img.image.data.attributes.alternativeText || "food"} fill />
              </div>
              <div className={Styles.carousel_text}>
                <h1>
                {
            (img.heading) ? (
              (img.heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Lorem Ipsum,</span>
            )
          }
                  </h1>
                <p>
                  {
                (img.description) ? (
              (img.description).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>
            )
          }
                </p>
                <button onClick={()=>setOpenModal(true)}>{img.button.button_text || "Sign up now"}</button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
    </>
  );
};

export default JoinHeroCarousel;
