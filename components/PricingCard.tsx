import React from "react";
import Image from "next/image";
import { PriceCard } from "../interfaces/interfaces";
import Styles from "../styles/components/pricecard.module.scss";

type Props = {
  card: PriceCard;
  isWide: boolean;
};

const PricingCard = (props: Props) => {
  return (
    <div
      className={Styles.card_wrapper}
      style={{
        width: props.isWide ? "34.16vw" : "27vw",
        backgroundColor: props.card.heading === "Popular" ? "#fff" : "#2d4739",
        border: props.card.heading === "Popular" ? "1px solid #D9D9D9" : "none",
      }}
    >
      <div
        className={`${Styles.card_header} ${
          props.card.heading === "Popular" && Styles.header_white
        }`}
      >
        <h4>{props.card.heading}</h4>
        <p>{props.card.desc}</p>
      </div>
      <div
        className={`${Styles.card_price} ${
          props.card.heading === "Popular" && Styles.price_white
        }`}
      >
        <h2>
          ₹{props.card.price} <span> /Month</span>
        </h2>
      </div>
      <div
        className={`${Styles.card_key_points} ${
          props.card.heading === "Popular" && Styles.points_white
        }`}
        style={{
          alignSelf: props.isWide ? "center" : "start",
        }}
      >
        {props.card.points.map((point, index) => {
          return (
            <div key={index} className={Styles.point}>
              <span className={Styles.check_img}>
                <Image src={props.card.checkImg} alt="check" fill />
              </span>
              <p>{point}</p>
            </div>
          );
        })}
      </div>

      <div className={Styles.card_footer}>
        <button
          style={{
            paddingLeft: props.isWide ? "8.75vw" : "6vw",
            paddingRight: props.isWide ? "8.75vw" : "6vw",
          }}
        >
          Book a trial
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
