import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/pricing/pricingsignup.module.scss";

type Props = {};

const PricingSignUp = (props: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.img}>
        <Image src={"/pricing_signup.png"} alt="img" fill />
      </div>
      <div className={Styles.text_content}>
        <h2>
          Enjoy the convenience and <br />
          benefits of <span>personalized meals</span>
          <br />
          in the privacy and comfort of
          <br /> your home.
        </h2>

        <button>Sign up now</button>
      </div>
    </div>
  );
};

export default PricingSignUp;
