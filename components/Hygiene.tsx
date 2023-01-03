import Image from "next/image";
import React, { CSSProperties } from "react";
import Styles from "../styles/components/Hygiene.module.scss";

type Props = {
  center?: boolean;
  subheading: string;
  heading: string;
  main_desc: string;
  sub_desc: string;
  headingSize?: string
};

const Hygiene = (props: Props) => {
  return (
    <div
      className={Styles.hygiene_container}
      style={props.center ? {textAlign: 'center'} : {}}
    >
      {/* <div className={Styles.centered}> */}
      <span className={Styles.subheading}>{props.subheading}</span>
      <h3 className={Styles.heading} style={{fontSize: `${props.headingSize}`}}>{props.heading}</h3>
      <p className={Styles.description}>
        {props.main_desc}
        <br /> <span>{props.sub_desc}</span>{" "}
      </p>
      {/* </div> */}
    </div>
  );
};

export default Hygiene;
