import React from "react";
import Image from "next/image";
import Styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_row_1}>
        <div className={Styles.footer_logo}>
          <Image src={"/Logo-black.svg"} alt="chefkart-logo" fill />
        </div>
        <div className={Styles.footer_content}>
          <div className={Styles.content_column}>
            <p>Chef On-Demand</p>
            <p>Resources</p>
          </div>
          <div className={Styles.content_column}>
            <p>Join As Chef</p>
            <p>Contact Us</p>
          </div>
          <div className={Styles.content_column}>
            <p>Monthly Subscriptions</p>
            <p>About Us</p>
          </div>
          <div className={Styles.social_icons}>
            <p>Follow Us</p>
            <div>
              <span>
                <Image src={"/Facebook.svg"} alt="fb" fill />
              </span>
              <span>
                <Image src={"/Twitter.svg"} alt="fb" fill />
              </span>

              <span>
                <Image src={"/Linkedin.svg"} alt="fb" fill />
              </span>
              <span>
                <Image src={"/Instagram.svg"} alt="fb" fill />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.footer_row_2}>
        <div className={Styles.row2_text}>
          <p>Get the app now!</p>
        </div>
        <div className={Styles.row2_img}>
          <div>
            <Image src={"/google-play.svg"} alt="google-play" fill />
          </div>
          <div>
            <Image src={"/app-store.svg"} alt="app-store" fill />
          </div>
        </div>
      </div>
      <div className={Styles.footer_row_3}>
        <div>
          <p>Copyright 2022 99xTechnologies LTD</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
