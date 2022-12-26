import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/pricing/pricingbanner.module.scss";
import PricingCard from "../PricingCard";
import { PriceCard } from "../../interfaces/interfaces";

const PricingCardData: PriceCard[] = [
  {
    heading: "Premium",
    desc: `Suitable for the foodies, with a \n huge apetite for various flavours`,
    price: 4500,
    points: [
      "Certified Home chefs",
      "Monthly Starchef Visits",
      "Homecooked & Nutritious meals",
      "Customizable Menu - Everyday",
      "Free Deep Kitchen Cleans",
    ],
  },
  {
    heading: "Standard",
    desc: "Missing the ‘ghar ka khana \n much? This one’s for you.",
    price: 3000,
    points: [
      "Certified Home chefs",
      "Homecooked & Nutritious meals",
      "North / South Indian Menu",
      "Free Deep Kitchen Cleans",
    ],
  },
];

const PricingBanner = () => {
  return (
    <div className={Styles.pricing_wrapper}>
      <div className={Styles.banner}>
        <div className={Styles.overlay}>
          <div className={Styles.content}>
            <div className={Styles.heading}>
              <h2>
                Gastronomical, economical <br />& <span>Phenomenal</span>
              </h2>
            </div>
            <div className={Styles.subheading}>
              <p>
                Starting at just Rs.3000/- that’s 1/3 of 80 online orders on a
                <br />
                monthly basis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.pricing_card}>
        {PricingCardData.map((card, index) => {
          return <PricingCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PricingBanner;
