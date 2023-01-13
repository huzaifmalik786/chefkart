import React, { useEffect, useState } from "react";
import Styles from "../../styles/components/homepage/homepricing.module.scss";
import PricingCard from "../PricingCard";
import { PriceCard } from "../../interfaces/interfaces";
import useFetchData from "../../lib/api";

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
    checkImg: "/check_gold.svg",
  },
  {
    heading: "Popular",
    desc: "Missing the ‘ghar ka khana \n much? This one’s for you.",
    price: 3000,
    points: [
      "Certified Home chefs",
      "Homecooked & Nutritious meals",
      "North / South Indian Menu",
      "Free Deep Kitchen Cleans",
    ],
    checkImg: "/check_circle.svg",
  },
];

const HomePricing = () => {

  
  return (
    <div className={Styles.pricing_wrapper}>
      <div className={Styles.pricing_heading}>
        <h2>
          Gastronomical,
          <br /> economical &<br /> Phenomenal
         
        </h2>
        <p>
          Starting at just Rs.3000/- that’s 1/3 of 80
          <br />
          online orders on a monthly basis. A simple
          <br /> subscription to hire, manage your apetite
          <br /> and home chefs on the go.

        </p>
      </div>
      <div className={Styles.pricecard_wrapper}>
        {PricingCardData.map((pricecard) => {
          return (
            <PricingCard
              key={pricecard.price}
              card={pricecard}
              isWide={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePricing;
