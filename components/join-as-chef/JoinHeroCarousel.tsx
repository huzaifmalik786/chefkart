import React, { useState } from "react";
import Styles from "../../styles/components/join-as-chef/joinherocarousel.module.scss";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../careers/Modal";
import SignupForm from "../Forms/SignupForm";
import ThankYou from "../Forms/ThankYou";
import { image_type } from "../../interfaces/interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseWindowDimensions from "../WindowSize";
import ContactForm from "../Forms/ContactForm";

type Props = {
  data: {
    image: image_type
    mobile_banner_image: image_type
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
  form: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
      terms_condition_check: string;

  };
  thankYou: {
    heading: string;
    subheading: string;
    link: {
      text: string;
      url: string;
    }
    icon: image_type
  }
};

// const Images = [
// {
//   image: {
//     data: {
//       attributes: {
//         url: '/join-carousel-1.png'
//       }
//     }
//   }
// }
// ];

// const CustomDot = ({ onClick, ...rest }: any) => {
//   const {
//     onMove,
//     index,
//     active,
//     carouselState: { currentSlide, deviceType },
//   } = rest;
//   const carouselItems = [1, 2, 3, 4, 5];
//   // onMove means if dragging or swiping in progress.
//   // active is provided by this lib for checking if the item is active or not.
//   return (
//     <button
//       className={active ? Styles.active : Styles.inactive}
//       onClick={() => onClick()}
//     >
//       {/* {React.Children.toArray(carouselItems)[index]} */}
//       <p />
//     </button>
//   );
// };

const JoinHeroCarousel = (props: Props) => {
  const { width } = UseWindowDimensions()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false)
  
  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed)
  }
  const settings={
    customPaging:(i:any)=>{
      return(
        <div className="customdot">
          <p style={{width:"5.5vw",height:"4px", borderRadius:"2px"}}></p>
        </div>
      )
    }
  }

  return (
    <>
     {
      props.thankYou && secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal} hidebutton><ThankYou closeModal={setSecondModal} data={props.thankYou} /></Modal>
    }
    {
      props.form && openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ContactForm data={props.form} setOpenModal_two={handlemodalClosed} openModal_two={openModal} closeModal={setOpenModal}/></Modal>
    }
    <div className={Styles.carousel_wrapper}>
      <Slider
           infinite={true}
           arrows={false}
           speed={1000}
           autoplaySpeed={3000}
           slidesToScroll={1}
           draggable
           autoplay
           dots
           {...settings}
           dotsClass={`slick-dots ${Styles.customdots}`}
           pauseOnHover={false}
      >
      {(props.data).map((img, key) => {
          return (
            <div key={key} className={Styles.items}>
              <div className={Styles.carousel_img}>
                <Image className={Styles.mobile} src={img.mobile_banner_image?.data?.attributes?.url} alt={img.image?.data?.attributes?.alternativeText || "food"} fill />

                <Image className={Styles.desktop} src={img.image?.data?.attributes?.url} alt={img.image?.data?.attributes?.alternativeText || "food"} fill />
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
                    {item.highlight ? <span className={Styles.colored}>{item?.text} </span> : item?.text }
                  </span>
                )
              })
            ) : (
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>
            )
          }
                </p>
                <button onClick={()=>setOpenModal(true)}>{img?.button?.button_text || "Sign up now"}</button>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <Carousel
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
      </Carousel> */}
    </div>
    </>
  );
};

export default JoinHeroCarousel;
