import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/investor-relation/investorhero.module.scss";

const InvestorHero = () => {
  return (
    <div className={Styles.hero_wrapper}>
      <Image src={"/investor_hero.png"} alt="investor-hero" fill />
      <div className={Styles.hero_heading}>
        <h3>
          Serving over <span>1300+ customers,</span>
          {"\n"} with a strong supply of more {"\n"}than{" "}
          <span>3000 home chefs.</span>
        </h3>
      </div>
    </div>
  );
};

export default InvestorHero;
