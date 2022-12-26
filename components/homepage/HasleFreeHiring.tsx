import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/haslefreehiring.module.scss";

type Props = {};

const HasleFreeHiring = (props: Props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.phone_img}>
        <Image src={"/phone.png"} alt="phone" fill />
      </div>
      <div className={Styles.container_text}>
        <div className={Styles.heading}>
          <h2>
            Hassle free hiring of
            <br /> reliable cooks
          </h2>
        </div>

        <div className={Styles.text}>
          <div className={Styles.para_1}>
            <p>
              It all starts here. Get us close to your fingertips It all
              <br /> starts here. Get us close to your fingertipsIt all starts{" "}
              <br />
              here. Get us close to your fingertipsIt all starts here.
            </p>
          </div>
          <div className={Styles.para_2}>
            <p>
              It all starts here. Get us close to your fingertips It all
              <br /> starts here.
            </p>
          </div>
        </div>
        <div className={Styles.bottom_img}>
          <div className={Styles.app_icon}>
            <Image src={"/app-store-icon.svg"} alt="appstore" fill />
          </div>
          <div className={Styles.play_icon}>
            <Image src={"/play-icon.svg"} alt="playstore" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasleFreeHiring;
