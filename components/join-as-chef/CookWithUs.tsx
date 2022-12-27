import React from "react";
import Styles from "../../styles/components/join-as-chef/cookwithus.module.scss";

import Image from "next/image";

type CookWithUsData = {
  img: string;
  heading: string;
  desc: string;
};

const WhyUs: CookWithUsData[] = [
  {
    img: "/cook-with-us-1.png",
    heading: "Make money consistently",
    desc: `Weekly payments in your bank  account. `,
  },
  {
    img: "/cook-with-us-2.png",
    heading: "Be your own boss",
    desc: `You decide when you want to work. As for the other stuff, We’ll help you with `,
  },
  {
    img: "/cook-with-us-3.png",
    heading: "Support at every nook",
    desc: `We’ll provide you with the marketing  support so you can focus on what `,
  },
];

const CookWithUs = () => {
  return (
    <div className={Styles.us_wrapper}>
      <h2>Why cook with us?</h2>
      <div className={Styles.cards_wrapper}>
        {WhyUs.map((item, index) => {
          return (
            <div key={index} className={Styles.card}>
              <div>
                <Image src={item.img} alt="img" fill />
              </div>
              <h4>{item.heading}</h4>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CookWithUs;
