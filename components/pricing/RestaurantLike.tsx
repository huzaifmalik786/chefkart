import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/pricing/restaurantlike.module.scss";

type Props = {};

const RestaurantLike = (props: Props) => {
  return (
    <div className={Styles.cooks_wrapper}>
      <div className={Styles.text_content}>
        <h2>
          Get a restaurant-like <br />
          experience every day!
        </h2>
        <p>
          Want homemade meals 24/7 that your entire <br />
          family will love? We will find the right personal chef <br />
          for you
        </p>
        <button>Start your trial</button>
      </div>
      <div className={Styles.cook_img}>
        <Image src={"/cook-1.png"} alt="cook" fill />
      </div>
    </div>
  );
};

export default RestaurantLike;
