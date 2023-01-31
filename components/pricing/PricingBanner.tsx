import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/pricing/pricingbanner.module.scss";
import PricingCard from "../PricingCard";
import { PriceCard } from "../../interfaces/interfaces";

const PricingCardData: PriceCard[] = [
  {
    heading: "Premium",
    subheading: `Suitable for the foodies, with a \n huge apetite for various flavours`,
    price: "4500",
    features: [
      { feature: "Certified Home chefs" },
      { feature: "Monthly Starchef Visits" },
      { feature: "Homecooked & Nutritious meals" },
      { feature: "Customizable Menu - Everyday" },
      { feature: "Free Deep Kitchen Cleans" },
    ],
    // checkImg: "/check_gold.svg",
    button: {
      button_text: "Book a trial",
    },
  },
  {
    heading: "Popular",
    subheading: "Missing the ‘ghar ka khana \n much? This one’s for you.",
    price: "3000",
    features: [
      { feature: "Certified Home chefs" },
      { feature: "Homecooked & Nutritious meals" },
      { feature: "North / South Indian Menu" },
      { feature: "Free Deep Kitchen Cleans" },
    ],
    // checkImg: "/check_circle.svg",
    button: {
      button_text: "Book a trial",
    },
  },
];

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean
    }[]
    description: {
      text: string
      highlight: boolean
    }[]
    image : {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
  };
};

const PricingBanner = (props: Props) => {
  return (
    <div className={Styles.pricing_wrapper}>
      <div className={Styles.banner}>
        <div className={Styles.banner_img}>
          <Image src={props.data.image.data.attributes.url || '/pricing-banner.png'} alt={props.data.image.data.attributes.alternativeText || "banner"} fill style={{objectFit: "cover"}} />
        </div>
        <div className={Styles.overlay}>
          <div className={Styles.content}>
            <div className={Styles.heading}>
              <h2>
                {props.data?.heading ? (
                  props.data.heading.map((item, key) => {
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
                    Gastronomical, economical <br />& <span className={Styles.colored}>Phenomenal</span>
                  </span>
                )}
              </h2>
            </div>
            <div className={Styles.subheading}>
              <p>
                {props.data?.description ? (
                (props.data?.description).map((item, key)=>{
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
                ): (
                  <span>Starting at just Rs.3000/- that’s 1/3 of 80 online orders on a monthly basis.</span>
                )}
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.pricing_card}>
        {PricingCardData.map((card, index) => {
          return <PricingCard card={card} key={index} isWide />;
        })}
      </div>
    </div>
  );
};

export default PricingBanner;
