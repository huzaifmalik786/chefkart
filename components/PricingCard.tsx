import React from "react";
import Image from "next/image";
import { PriceCard } from "../interfaces/interfaces";
import Styles from "../styles/components/pricecard.module.scss";

type Props = {
  card: PriceCard;
};

const PricingCard = (props: Props) => {
  return (
    <div className={Styles.card_wrapper}>
      <div className={Styles.card_header}>
        <h4>{props.card.heading}</h4>
        <p>{props.card.desc}</p>
      </div>
      <div className={Styles.card_price}>
        <h2>
          ₹{props.card.price} <span> /Month</span>
        </h2>
      </div>
      <div className={Styles.card_key_points}>
        {props.card.points.map((point, index) => {
          return (
            <span key={index}>
              <Image
                src={"/check_gold.svg"}
                alt="check"
                height={24}
                width={24}
              />
              {point}
            </span>
          );
        })}
      </div>

      <div className={Styles.card_footer}>
        <button>Book a trial </button>
      </div>
    </div>
  );
};

export default PricingCard;
