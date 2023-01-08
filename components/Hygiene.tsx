import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import useFetchData from "../lib/api";
import Styles from "../styles/components/Hygiene.module.scss";

type Props = {
  center?: boolean;
  subheading: string;
  heading: string;
  main_desc: string;
  sub_desc: string;
  headingSize?: string;
};
type dataType = {
    subheading: string;
    heading: string;
    description: string;
    colored_text: string;
}
const Hygiene = (props: Props) => {
  const { data, loading, error } = useFetchData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/hygiene`)
  const [values, setValues] = useState<dataType>({
    subheading: '',
    heading: '',
    description: '',
    colored_text: ''
  })

  useEffect(() => {
    if(data){
      setValues({
        ...values,
        subheading: data.data.attributes.subheading,
        heading: data.data.attributes.heading,
        description: data.data.attributes.description,
        colored_text: data.data.attributes.colored_desc
      })
  }
  }, [data])
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
      <span className={Styles.subheading}>{values.subheading}</span>
      <h3
        className={Styles.heading}
        style={{ fontSize: `${props.headingSize}` }}
      >
        {values.heading}
      </h3>
      <p className={Styles.description} style={!props.center ? {} : {textAlign: 'center', width: '33.6vw'}}>
        {values.description}
         <span> {values.colored_text}</span>{" "}
      </p>
      {/* </div> */}
    </div>
    </div>
    
  );
};

export default Hygiene;
