import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/investor-relation/investorhero.module.scss";

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }
}
const InvestorHero = (props: Props) => {
  return (
    <div className={Styles.hero_wrapper}>
      <Image src={props.data?.image?.data?.attributes?.url || "/investor_hero.png"} alt={props.data?.image?.data?.attributes?.alternativeText || "investor-hero"} fill />
      <div className={Styles.hero_heading}>
        <h3>
        {
            (props.data?.heading) ? (
              (props.data?.heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Serving over <span className={Styles.colored}>1300+ customers,</span>
              {"\n"} with a strong supply of more {"\n"}than{" "}
              <span className={Styles.colored}>3000 home chefs.</span></span>
            )
          }
          
        </h3>
      </div>
    </div>
  );
};

export default InvestorHero;
