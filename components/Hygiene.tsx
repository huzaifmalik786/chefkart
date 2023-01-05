import Image from "next/image";
import React, { CSSProperties } from "react";
import Styles from "../styles/components/Hygiene.module.scss";

type Props = {
  center?: boolean;
  subheading: string;
  heading: string;
  main_desc: string;
  sub_desc: string;
  headingSize?: string;
};

const Hygiene = (props: Props) => {
  return (
    <div className={Styles.ellipse}>
      <div
      className={Styles.hygiene_container}
      style={
        !props.center
          ? {
              alignItems: "flex-start",
              padding: '12.7vw 0px 4vw 6.59vw',
              justifyContent: 'flex-start'
            }
          : {}
      }
    >
      {/* <div className={Styles.centered}> */}
      <span className={Styles.subheading}>{props.subheading}</span>
      <h3
        className={Styles.heading}
        style={{ fontSize: `${props.headingSize}` }}
      >
        {props.heading}
      </h3>
      <p className={Styles.description} style={!props.center ? {} : {textAlign: 'center', width: '33.6vw'}}>
        {props.main_desc}
         <span> {props.sub_desc}</span>{" "}
      </p>
      {/* </div> */}
    </div>
    </div>
    
  );
};

export default Hygiene;
