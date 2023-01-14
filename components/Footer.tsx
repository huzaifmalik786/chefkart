import React from "react";
import Image from "next/image";
import Styles from "../styles/components/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_row_1}>
        <div className={Styles.footer_logo}>
          <Image src={"/Logo-black.svg"} alt="chefkart-logo" fill />
        </div>
        <div className={Styles.footer_content}>
          <div className={Styles.content_column}>
            <Link href={"/chef-on-demand"}>Chef On-Demand</Link>
            <Link href={"/blogs"}>Resources</Link>
          </div>
          <div className={Styles.content_column}>
            <Link href={"/join-as-chef"}>Join As Chef</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
          </div>
          <div className={Styles.content_column}>
            <Link href={"/pricing"}>Monthly Subscriptions</Link>
            <Link href={"/about-us"}>About Us</Link>
          </div>
          <div className={Styles.social_icons}>
            <p>Follow Us</p>
            <div>
              <span>
                <button>
                  {" "}
                  <Image src={"/Facebook.svg"} alt="fb" fill />
                </button>
              </span>
              <span>
                <button>
                  <Image src={"/Twitter.svg"} alt="fb" fill />
                </button>
              </span>

              <span>
                <button>
                  <Image src={"/Linkedin.svg"} alt="fb" fill />
                </button>
              </span>
              <span>
                <button>
                  {" "}
                  <Image src={"/Instagram.svg"} alt="fb" fill />
                </button>{" "}
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
