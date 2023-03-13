import React, { useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/pricing/pricingbanner.module.scss";
import PricingCard from "../PricingCard";
import { image_type, PriceCard } from "../../interfaces/interfaces";
import Reveal from "../Reveal";
import UseWindowDimensions from "../WindowSize";
import Modal from "../careers/Modal";
import ThankYou from "../Forms/ThankYou";
import ContactForm from "../Forms/ContactForm";
const PricingCardData: PriceCard[] = [
  {
    heading: "Premium",
    subheading: `Suitable for the foodies, with a huge apetite for various flavours`,
    price: "4500",
    duration: '/Month',

    features: [
      { feature: "Certified Home chefs" },
      { feature: "Monthly Starchef Visits" },
      { feature: "Homecooked & Nutritious meals" },
      { feature: "Customizable Menu - Everyday" },
      { feature: "Free Deep Kitchen Cleans" },
    ],
    // checkImg: "/check_gold.svg",
    button: {
      text: "Book a trial",
      url: "#"
    },
  },
  {
    heading: "Popular",
    subheading: "Missing the ‘ghar ka khana \n much? This one’s for you.",
    price: "3000",
    duration: '/Month',

    features: [
      { feature: "Certified Home chefs" },
      { feature: "Homecooked & Nutritious meals" },
      { feature: "North / South Indian Menu" },
      { feature: "Free Deep Kitchen Cleans" },
    ],
    // checkImg: "/check_circle.svg",
    button: {
      text: "Book a trial",
      url: "#"
    },
  },
];

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[];
    description: {
      text: string;
      highlight: boolean;
    }[];
    image: image_type;
    mobile_banner_image: image_type;
    button: {
      button_text: string;
    }
  };
  cards: PriceCard[]
  // cta?: string;

  form?: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
  }
  thankYou?: {
    heading: string;
    subheading: string;
    link: {
      text: string;
      url: string;
    }
    icon: image_type

  }
};

const PricingBanner = (props: Props) => {
  const { width } = UseWindowDimensions()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false)

  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed)
  }
  return (
    <>
     {
      props.thankYou && secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal}><ThankYou closeModal={setSecondModal} data={props.thankYou} /></Modal>
    }
    {
      props.form && openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ContactForm data={props.form} setOpenModal_two={handlemodalClosed} openModal_two={openModal} closeModal={setOpenModal}/></Modal>
    }

    <div className={Styles.pricing_wrapper}>
      <div className={Styles.banner}>
        <div className={Styles.banner_img}>
          <Image
            className={Styles.desktop}
            src={props.data?.image?.data?.attributes?.url}
            alt={props.data?.image?.data?.attributes?.alternativeText || "banner"}
            fill
            style={{ objectFit: "cover" }}
          />
           <Image
            className={Styles.mobile}
            src={props.data?.mobile_banner_image?.data?.attributes?.url}
            alt={props.data?.image?.data?.attributes?.alternativeText || "banner"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={Styles.overlay}>
          <div className={Styles.content}>
            <div className={Styles.heading}>
              <h2>
                {props.data?.heading ? (
                  props.data?.heading.map((item, key) => {
                    return (
                      <span key={key}>
                        {item?.highlight ? (
                          <>
                            <br />
                            <span className={Styles.colored}>{item?.text} </span>
                          </>
                        ) : (
                          item.text
                        )}
                      </span>
                    );
                  })
                ) : (
                  <span>
                    Gastronomical, economical <br />&{" "}
                    <span className={Styles.colored}>Phenomenal</span>
                  </span>
                )}
              </h2>
            </div>
            <div className={Styles.subheading}>
              <p>
                {props.data?.description ? (
                  (props.data?.description).map((item, key) => {
                    return (
                      <span key={key}>
                        {item.highlight ? (
                          <span className={Styles.colored}>
                            <br />
                            {item.text}{" "}
                          </span>
                        ) : (
                          item.text
                        )}
                      </span>
                    );
                  })
                ) : (
                  <span>
                    Starting at just Rs.3000/- that’s 1/3 of 80 online orders on
                    a monthly basis.
                  </span>
                )}
              </p>
            </div>
                <div className={Styles.btn}>
                  <button onClick={()=> setOpenModal(true)}>{props?.data?.button?.button_text || "get in touch" }</button>
            </div>
          </div>
        </div>
      </div>
      <Reveal>
      <div className={Styles.pricing_card}>
        {(props?.cards || PricingCardData).map((card, index) => {
          return <PricingCard card={card} key={index} isWide index={index} showspan />;
        })}
      </div>
      </Reveal>
    </div>
    </>
  );
};

export default PricingBanner;
