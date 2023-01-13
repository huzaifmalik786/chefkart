import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import useFetchData from "../lib/api";
import Styles from "../styles/components/Hygiene.module.scss";

type Props = {
  center?: boolean;
  subheading: string;
  heading: string;
  description: string;
  colored_text: string;
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
        {props.description}
         <span> {props.colored_text}</span>{" "}
      </p>
      {/* </div> */}
    </div>
    </div>
    
  );
};

export default Hygiene;
