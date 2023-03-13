import Image from "next/image";
import React, { useState } from "react";
import Styles from "../../styles/components/about/vision.module.scss";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data: {
    subheading: string;
    heading: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;

        }
      }
    }
  }[];
};
const Vision = (props: Props) => {
  const [hidden, sethidden] = useState("content");
  const [fullText, setFullText] = useState(false)
  const { width } = UseWindowDimensions();
  const paragraph =
    "With a vision to operate and manage millions of kitchens across the globe, ChefKart is providing at-home cooking services in a way that has never been experienced before.";
  return (
    <div>
      {props.data.map((item, key) => {
        return (
          <div
            key={key}
            className={Styles.vision_container}
            
          >
            <div className={Styles.left_section}>
              <span className={Styles.subheading}>{item.subheading}</span>
              <h2>{item.heading}</h2>

                    <p>{item.description.substring(0, 75)}<button className={Styles.read_more} style={fullText ? {display: "none"} : {}} onClick={()=> setFullText(true)} >...Read more</button><span style={fullText ? {display: "inline"} : {}}  className={Styles.overflow_text}>{item.description.substring(75)}</span> </p>
                    
                    </div>
            <div className={Styles.right_section}>
              <div className={Styles.vison_image}>
                <Image
                  src={
                    item.image.data.attributes.url || "/iStock-1223383996 1.png"
                  }
                  alt="vision_image"
                  fill
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vision;
