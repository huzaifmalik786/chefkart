import React, { useEffect, useState } from "react";
import Styles from "../../styles/components/homepage/homepricing.module.scss";
import PricingCard from "../PricingCard";
import { PriceCard } from "../../interfaces/interfaces";
import useFetchData from "../../lib/api";
import UseWindowDimensions  from '../WindowSize';
import Reveal from "../Reveal";

const PricingCardData: PriceCard[] = [
  {
    heading: "Premium",
    subheading: `Suitable for the foodies, with a \n huge apetite for various flavours`,
    price: "4500",
    features: [
      {feature: "Certified Home chefs"},
      {feature: "Monthly Starchef Visits"},
      {feature: "Homecooked & Nutritious meals"},
      {feature: "Customizable Menu - Everyday"},
      {feature: "Free Deep Kitchen Cleans"},
    ],
    // checkImg: "/check_gold.svg",
    button: {
      button_text: "Book a trial"
    }
    
  },
  {
    heading: "Popular",
    subheading: "Missing the ‘ghar ka khana \n much? This one’s for you.",
    price: "3000",
    features: [
      {feature: "Certified Home chefs"},
      {feature: "Homecooked & Nutritious meals"},
      {feature: "North / South Indian Menu"},
      {feature: "Free Deep Kitchen Cleans"},
    ],
    // checkImg: "/check_circle.svg",
    button: {
      button_text: "Book a trial"
    }
    
  },
];

type Props = {
  data:{
    brief : {
      heading: string;
      subheading: string;
    },
    cards: {
      heading: string;
      subheading: string;
      price: string;
      button: {
        button_text: string;
      };

      features: {
        feature: string;
      }[]

    }[]
  }
}
const HomePricing = (props:Props) => {

  const { width} = UseWindowDimensions();
  
  return (
    <div className={Styles.pricing_wrapper}>
      {/* {width<=472?(
        <Reveal>
        <div className={Styles.pricing_heading}>
        <h2>
          {
            props.data.brief?.heading || "Gastronomical, economical & Phenomenal"
          }
        </h2>
        <p>
          {
            props.data.brief?.subheading || "Starting at just Rs.3000/- that’s 1/3 of 80 online orders on a monthly basis. A simple subscription to hire, manage your apetite and home chefs on the go."
          }
        </p>
      </div>
      </Reveal>
      ):( */}
      <div className={Styles.pricing_heading}>
      <Reveal>
        <h2>
          {
            props.data.brief?.heading || "Gastronomical, economical & Phenomenal"
          }
          {/* Gastronomical,
          <br /> economical &<br /> Phenomenal
          */}
        </h2>
        <p>
          {
            props.data.brief?.subheading || "Starting at just Rs.3000/- that’s 1/3 of 80 online orders on a monthly basis. A simple subscription to hire, manage your apetite and home chefs on the go."
          }
        </p>
      </Reveal>
      </div>
      {/* )} */}
      {/* <div className={Styles.pricing_heading}>
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
      </div> */}
      <Reveal>
      <div className={Styles.pricecard_wrapper}>
        {(props.data.cards || PricingCardData).map((pricecard, key) => {
          return (
            <PricingCard
              key={key}
              card={pricecard}
              isWide={false}
            />
          );
        })}
      </div>
      </Reveal>
    </div>
  );
};

export default HomePricing;
