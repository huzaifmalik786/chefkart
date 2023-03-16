import React, { useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/haslefreehiring.module.scss";
import { image_type } from "../../interfaces/interfaces";
import UseWindowDimensions from "../WindowSize";
import { useInterval } from 'usehooks-ts'

type Props = {
  data: {
    heading: string;
    subheading1: string;
    subheading2: string;
    image: image_type
    download_icons: {
      icon: image_type
      url: string
    }[]
  }
};

const HasleFreeHiring = (props: Props) => {
  const {width}= UseWindowDimensions();
  const [active,setactive]= useState<boolean>(true);
  useInterval(()=>{
    setactive(!active);
  },3000)
  return (
    <div className={Styles.container}>
      <div className={Styles.phone_img}>
        <video className={Styles.video} src="/phonevideo.mp4" loop autoPlay muted/>
      {/* <Image src={active && width>450? "/mobile1.png": "/mobile2.png"} alt={props.data?.image?.data?.attributes?.alternativeText || "phone"} fill /> */}
        {/* <Image src={props.data?.image?.data?.attributes?.url || "/phone.png"} alt={props.data?.image?.data?.attributes?.alternativeText || "phone"} fill /> */}
      </div>
      <div className={Styles.container_text}>
        <div className={Styles.heading}>
          <h2>
            {
              props.data?.heading || " Hassle free hiring of reliable cooks"
            }
           
          </h2>
        </div>
        <div className={Styles.text}>
          <div className={Styles.para_1}>
            <p className={active && width>450? Styles.active:""}>
              {
                props.data?.subheading1 || "It all starts here. Get us close to your fingertips It all starts here. Get us close to your fingertips It all starts here. Get us close to your fingertips It all starts here."
              }
            </p>
          </div>
          <div className={Styles.para_2}>
            <p className={!active && width>450? Styles.active:""}>
              {
                props.data?.subheading2 || "It all starts here. Get us close to your fingertips It all starts here."
              }
              
            </p>
          </div>
          </div>
        
        <div className={Styles.bottom_img}>
          {
            props.data?.download_icons.map((item, key)=>{
              return(
                <div key={key} className={Styles.app_icon}>
                  <a href={item?.url}>
                    <Image src={item?.icon.data?.attributes?.url || "/app-store-icon.svg"} alt={item?.icon?.data?.attributes?.alternativeText || "appstore"} fill />
                  </a>
          </div>
              )
            })
          }
          {/* <div className={Styles.app_icon}>
            <Image src={props.data?.download_icons[1]?.icon.data?.attributes?.url || "/app-store-icon.svg"} alt={props.data?.download_icons[0]?.icon?.data?.attributes?.alternativeText || "appstore"} fill />
          </div>
          <div className={Styles.app_icon}>
            <Image className={Styles.play_image} src={props.data?.download_icons[0]?.icon?.data?.attributes?.url || "/play-icon.svg"} alt={props.data?.download_icons[0]?.icon?.data?.attributes?.alternativeText || "playstore"} fill />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HasleFreeHiring;
