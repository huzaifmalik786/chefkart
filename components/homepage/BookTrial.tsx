import Image from "next/image";
import React from "react";
import { image_type } from "../../interfaces/interfaces";
import Styles from "../../styles/components/homepage/booktrial.module.scss";

type Props = {
  data: {
    heading: string;
    subheading: string;
    button: {
      button_text: string;
    }
    image: image_type
  }
  py?:string;
}
const BookTrial = (props: Props) => {
  return (
    <div className={Styles.container} style={{padding: `${props.py} 0`}}>
      <div className={Styles.banner}>
        <Image src={props?.data?.image?.data?.attributes?.url || "/sample.png"} alt={props?.data?.image?.data?.attributes?.alternativeText || "banner"} fill style={{ objectFit: 'cover' }} />

      </div>
      <div className={Styles.content}>
        <p>{props?.data?.subheading || "What are you waiting for, when it’s"}</p>
        <h1>
          {
            props?.data?.heading || "Good Food. Good People. Good Life."
          }
        </h1>
        {/* <button>{props?.data?.button?.button_text || "Book a Trial"}</button> */}
      </div>
    </div>
  );
};

export default BookTrial;
