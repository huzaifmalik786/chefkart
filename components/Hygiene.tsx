import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import useFetchData from "../lib/api";
import Styles from "../styles/components/Hygiene.module.scss";
import Reveal from "./Reveal";

type Props = {
  center?: boolean;
  subheading: string;
  heading: string;
  description: string;
  colored_text: string;
  headingSize?: string;
  fontweight?:string;
  descsize?:string;

  data: {
    heading: string;
    subheading: string;
    description: {
      text: string;
      highlight: string;
    }[]

    video: {
      data: {
        attributes: {
          url: string
        }
      }
    }

  }
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
      {/* <div className={Styles.video_container}> */}
        <video className={Styles.video} src={props.data?.video?.data?.attributes?.url}
          autoPlay 
          loop 
          muted 
          playsInline />
      {/* </div> */}
      <Reveal>
      <div className={Styles.content} style={!props.center?{}:{alignItems:"center"}}>
      <span className={Styles.subheading}>{props.data?.subheading || props.subheading}</span>
      <h3
        className={Styles.heading}
        style={{ fontSize: `${props.headingSize}` }}
      >
        {props.data?.heading || props.heading}
      </h3>

      <p className={Styles.description} style={!props.center ? {} : {textAlign: 'center', width: '33.6vw', fontWeight: `${props.fontweight}`, fontSize:`${props.descsize}`}}>
        {
          props.data?.description ? (
            (props.data?.description).map((item, key)=>{
              return(
              <span key={key}>
               {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
              </span>
              )
            })
          ) : ( <> {props.description}
            <span> {props.colored_text}</span>{" "}</>)
          
        }
      </p>
      </div>
      </Reveal>
    </div>
    </div>
    
  );
};

export default Hygiene;
