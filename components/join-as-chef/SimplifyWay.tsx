import React from "react";
import Styles from "../../styles/components/join-as-chef/simplifyway.module.scss";

type Props = {};

const SimplifyWay = (props: Props) => {
  return (
    <div className={Styles.content_wrapper}>
      <div className={Styles.heading_div}>
        <h2>
          Join us on a mission{"\n"} to
          <span> simplify the way {"\n"}India eats</span>
        </h2>
      </div>
      <div className={Styles.text_div}>
        <p>
          Chefkart connects talented cooks with local customers. We believe in
          providing{"\n"} the chefs in our community — the opportunity to make a
          meaningful income by{"\n"} doing what they love!
        </p>
      </div>
    </div>
  );
};

export default SimplifyWay;
