import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/pricing/restaurantlike.module.scss";

type Props = {
  data:{
    heading: {
      text: string;
      highlight: boolean;

    }[]
    description: {
      text: string;
      highlight: boolean;
    }[]

    button: {
      button_text: string;
    }
    image:{
      data:{
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }
};

const RestaurantLike = (props: Props) => {
  return (
    <div className={Styles.cooks_wrapper}>
      <div className={Styles.text_content}>
        <h2>
          {
            (props.data?.heading) ? (
              (props.data?.heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Get a restaurant-like experience every day!</span>
            )
          }
          
        </h2>
        <p>
          {
            (props.data?.description) ? (
              (props.data?.description).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Want homemade meals 24/7 that your entire family will love? We will find the right personal chef for you</span>
            )
          }
       
        </p>
        <button>{props.data?.button?.button_text || "Start your trial"}</button>
      </div>
      <div className={Styles.cook_img}>
        <Image src={props.data?.image?.data?.attributes?.url || "/cook-1.png"} alt={props.data?.image?.data?.attributes?.alternativeText || "cook"} fill />
      </div>
    </div>
  );
};

export default RestaurantLike;
