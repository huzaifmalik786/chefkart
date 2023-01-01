import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/culture.module.scss";
import CultureCard from "./CultureCard";
import { CultureCardType } from "../../interfaces/interfaces";

type Props = {};

const CultureCardData: CultureCardType[] = [
  {
    num: "01",
    title: "Lorem ipsum dolor sit ",
    img: "/Synchronize.svg",
    color: "#ff961f",
  },
  {
    num: "02",
    title: "Lorem ipsum dolor sit ",
    img: "/TickBox.svg",
    color: "#571C5E",
  },
  {
    num: "03",
    title: "Lorem ipsum dolor sit ",
    img: "/Idea.svg",
    color: "#000000",
  },
  {
    num: "04",
    title: "Lorem ipsum dolor sit ",
    img: "/TelegramApp.svg",
    color: "#2D4739",
  },
];

const Culture = (props: Props) => {
  return (
    <div className={Styles.culture_wrapper}>
      <div className={Styles.culture_header}>
        <h3>Culture</h3>
        <p>
          Our values outline who we are, what we hope to accomplish,{"\n"} and
          most crucially, how we intend to carry it out. They lay out {"\n"} our
          collective course and direct each and every move we make.
        </p>
      </div>
      <div className={Styles.card_wrapper}>
        {CultureCardData.map((card) => {
          return <CultureCard card={card} key={card.num} />;
        })}
      </div>
    </div>
  );
};

export default Culture;
