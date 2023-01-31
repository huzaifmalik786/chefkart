import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/careershero.module.scss";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  data: {
    heading: string
    description: string;
    button_text: string;
    images: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }[]
    }
  }
};

const CareersHero = (props: Props) => {
  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.hero_content}>
        <h2>{props.data.heading || "Bring your ambition to make a difference"}</h2>
        <h4>{props.data.description || "Be a part of our family"}</h4>
        <button>{props.data.button_text || "VIEW OPEN POSITIONS"}</button>
      </div>
      <div className={Styles.img_container}>
        <div className={Styles.img1}>
          <Image
            src={props.data.images.data[0].attributes.url || "/career-hero-1.png"}
            alt="img"
            // height={489}
            // width={326}
            fill
          />
        </div>
        <div className={Styles.img2}>
          <Image
            src={props.data.images.data[1].attributes.url ||"/career-hero-2.png"}
            alt="img"
            // height={366}
            // width={244}
            fill
          />
        </div>
        <div className={Styles.img3}>
          <Image
            src={props.data.images.data[2].attributes.url || "/career-hero-3.png"}
            alt="img"
            // height={366}
            // width={158}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
