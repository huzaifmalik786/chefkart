import { type } from "os";
import React from "react";
import Styles from "../../styles/components/homepage/facts.module.scss";

type FactData = {
  title: string;
  desc: string;
};

const FactArr: FactData[] = [
  {
    title: "3M+",
    desc: "Meals homemade dishes cooked and served with love",
  },
  {
    title: "2500+",
    desc: "Verified & Trained Home-Chefs On-board.",
  },
  {
    title: "1500+",
    desc: "Households trust Chefkart with their daily cooking needs",
  },
  {
    title: "4.8/5",
    desc: " Average Chefkart rating from thousands of happy customers",
  },
];

const Facts = (props: any) => {
  return (
    <div className={Styles.facts_container} style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}>
      {FactArr.map((item, index) => {
        return (
          <div key={index}>
            <p className={Styles.fact_title}>{item.title}</p>
            <p className={Styles.fact_description}>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Facts;
