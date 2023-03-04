import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/pricing/pricingsignup.module.scss";

type Props = {
  data: {
    heading: {
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

const PricingSignUp = (props: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.img}>
        <Image src={props.data?.image.data?.attributes?.url || "/pricing_signup.png"} alt={props.data?.image.data?.attributes?.alternativeText || "img"} fill />
      </div>
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
              <span>Enjoy the convenience and benefits of <span className={Styles.colored}>personalized meals </span> in the privacy and comfort of your home.</span>
            )
          }
          
        </h2>

        {/* <button>{props.data?.button?.button_text || "Sign up now"}</button> */}
      </div>
    </div>
  );
};

export default PricingSignUp;
