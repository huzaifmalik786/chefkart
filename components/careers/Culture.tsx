import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/culture.module.scss";
import CultureCard from "./CultureCard";
import { CultureCardType } from "../../interfaces/interfaces";

type Props = {
  data: {
    heading: string;
    description: string;
    culture_cards: CultureCardType[]
  }
};

const CultureCardData: CultureCardType[] = [
  {
    text: "Lorem ipsum dolor sit ",
    image:{
      data: {
        attributes: {
          url: "/Synchronize.svg",
          alternativeText: ""
        }
      }
    } ,
  },
  {
    text: "Lorem ipsum dolor sit ",
    image:{
      data: {
        attributes: {
          url: "/TickBox.svg",
          alternativeText: ""
        }
      }
    } ,
  },
  {
    text: "Lorem ipsum dolor sit ",
    image: {
      data: {
        attributes: {
          url: "/Idea.svg",
          alternativeText: ""
        }
      }
    }
  },
  {
    text: "Lorem ipsum dolor sit ",
    image: {
      data: {
        attributes: {
          url: "/TelegramApp.svg",
          alternativeText: ""
        }
      }
    }
  },
];
const colors = ["#ff961f", "#571C5E", "#000000", "#2D4739"]
const Culture = (props: Props) => {
  return (
    <div className={Styles.culture_wrapper}>
      <div className={Styles.culture_header}>
        <h3>{props.data.heading || "Culture"}</h3>
        <p>
          {props.data.description || "Our values outline who we are, what we hope to accomplish and most crucially, how we intend to carry it out. They lay out our collective course and direct each and every move we make."}
        </p>
      </div>
      <div className={Styles.card_wrapper}>
        {(props.data.culture_cards || CultureCardData).map((card, key) => {
          return <CultureCard card={card} key={key} bg_color={colors[key]} index={key+1} />;
        })}
      </div>
    </div>
  );
};

export default Culture;
