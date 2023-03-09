import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/investor-relation/investorhero.module.scss";
import { image_type } from "../../interfaces/interfaces";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    image: image_type
    mobile_banner_image: image_type
    
  }
}
const InvestorHero = (props: Props) => {
  const { width } = UseWindowDimensions()
  return (
    <div className={Styles.hero_wrapper}>
      <Image className={Styles.desktop} src={props.data?.image?.data?.attributes?.url} alt={props.data?.image?.data?.attributes?.alternativeText || "investor-hero"} fill />
      <Image className={Styles.mobile} src={props.data?.mobile_banner_image?.data?.attributes?.url} alt={props.data?.image?.data?.attributes?.alternativeText || "investor-hero"} fill />
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
