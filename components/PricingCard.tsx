import React from "react";
import Image from "next/image";
import { PriceCard } from "../interfaces/interfaces";
import Styles from "../styles/components/pricecard.module.scss";
import UseWindowDimensions from "./WindowSize";

type Props = {
  card: PriceCard;
  isWide: boolean;
  index: number;
  showspan: boolean;
};

const PricingCard = (props: Props) => {
  const even:boolean = (props.index)%2 === 0 
  const {width}= UseWindowDimensions();
  return (
    <div
      className={Styles.card_wrapper}
      style={{
        width: props.isWide ? "34.16vw" : "27vw",
        backgroundColor: even ? "#fff" : "#2d4739",
        border: even ? "1px solid #D9D9D9" : "none",
      }}
    >
      <div className={Styles.heading_wrapper}>
      <div
        className={`${Styles.card_header} ${
          even && Styles.header_white
        }`}
      >
        <h4>{props.card.heading}</h4>
        <p>{props.card.subheading}</p>
      </div>
      <div
        className={`${Styles.card_price} ${
          even && Styles.price_white
        }`}
      >
        {props.showspan && <span className={Styles.top_span}>Starting from</span>}
        <h2>
          ₹{props.card.price} <span> /Month</span>
        </h2>
      </div>
      </div>
      <div
        className={`${Styles.card_key_points} ${
          even && Styles.points_white
        }`}
        style={{
          alignSelf: props.isWide ? "center" : "start",
        }}
      >
        {props.card.features.map((point, index) => {
          if((width<=450 && index<3) || width>450){
          return (
            <div key={index} className={Styles.point}>
              <span className={Styles.check_img}>
                <Image src={even ? '/check_circle.svg' : '/check_gold.svg'} alt="check" fill />
              </span>
              <p>{point.feature}</p>
            </div>
          );
        }
        })}
      </div>

      <div className={Styles.card_footer}>
        <button
        className={ !even ? Styles.colored_bg : ""}
          style={{
            paddingLeft: props.isWide ? "8.75vw" : "6vw",
            paddingRight: props.isWide ? "8.75vw" : "6vw",
          }}
        >
          {props?.card?.button?.button_text || "Book a trial"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
