import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/careershero.module.scss";

type Props = {};

const CareersHero = (props: Props) => {
  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.hero_content}>
        <h2>Bring your ambition{"\n"} to make a difference</h2>
        <h4>Be a part of our family</h4>
        <button> VIEW OPEN POSITIONS</button>
      </div>
      <div className={Styles.img_container}>
        <div>
          <Image
            src={"/career-hero-1.png"}
            alt="img"
            height={489}
            width={326}
          />
        </div>
        <div>
          <Image
            src={"/career-hero-2.png"}
            alt="img"
            height={366}
            width={244}
          />
        </div>
        <div>
          <Image
            src={"/career-hero-3.png"}
            alt="img"
            height={366}
            width={158}
          />
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
