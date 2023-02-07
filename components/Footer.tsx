import React from "react";
import Image from "next/image";
import Styles from "../styles/components/footer.module.scss";
import Link from "next/link";
import { image_type } from "../interfaces/interfaces";

type Props={
  data: {
    social_heading: string;
    get_app_heading: string;
    copyright_text: string;

    logo: {
      name: string;
      url: string;
      image: image_type
    }
    footer_links: {
      text: string;
      url: string;
    }[]
    social_icons: {
      url: string;
      icon: image_type
    }[]
    download_icon: {
      url: string;
      icon: image_type
    }[]
    links: {
      text: string;
      url: string;
    }[]

  }
}
const footer_links = [
  {
    text: "Chef On Demand",
    url: "/chef-on-demand"
  },
  {
    text: "Join As Chef",
    url: "/join-as-chef"
  },
  {
    text: "Monthly Subscription",
    url: "/pricing"
  },
  {
    text: "Resources",
    url: "/blogs"
  },
  {
    text: "Contact Us",
    url: "/contact-us"
  },
  {
    text: "About Us",
    url: "/about-us"
  },

]
const Footer = (props: Props) => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.columns}>
      <div className={Styles.footer_col_1}>
        <div className={Styles.footer_logo}>
          <Image src={props.data.logo.image.data.attributes.url || "/Logo-black.svg"} alt="chefkart-logo" fill />
        </div>
          <div className={Styles.footer_row_2}>
          <div className={Styles.row2_text}>
            <p>{props.data.get_app_heading || "Get the app now!"}</p>
          </div>
          <div className={Styles.row2_img}>
            {
              (props.data.download_icon).map((item, key)=>{
                return(
                  <div key={key}>
                    <Image src={item.icon.data.attributes.url} alt={item.icon.data.attributes.url || "download-icon"} fill />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
        <div className={Styles.col_wrapper}>
        <div className={Styles.footer_col_2}>
          <div className={Styles.footer_content}>
            {
              (props.data.footer_links || footer_links).map((item, key)=>{
                return(
              <Link key={key} href={item.url}>{item.text}</Link>
                )
              })
            }
              {/* <Link href={"/chef-on-demand"}>Chef On-Demand</Link>
              <Link href={"/join-as-chef"}>Join As Chef</Link>
              <Link href={"/pricing"}>Monthly Subscriptions</Link>
              <Link href={"/blogs"}>Resources</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
              <Link href={"/about-us"}>About Us</Link> */}
          </div>
        </div>
        <div className={Styles.footer_col_3}>
          <div className={Styles.social_icons}>
            <p>{props.data?.social_heading || "Follow Us"}</p>
            <div>
              {
                (props.data.social_icons) ?
                ((props.data.social_icons).map((item, key)=>{
                  return(
                    <span key={key}>
                      <Link href={item.url}>
                        {" "}
                        <Image src={item.icon.data.attributes.url} alt={item.icon.data.attributes.alternativeText || ""} fill />
                      </Link>
                    </span>
                  )
                })) : (
                  <>
                  <span>
                    <Link href="#">
                      {" "}
                      <Image src={"/FaceBook.svg"} alt="fb" fill />
                    </Link>
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
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={Styles.footer_row_3}>
        <div>
          <p>{props.data.copyright_text || "Copyright 2022 99xTechnologies LTD"}</p>
        </div>
        <div>
          {
            (props.data.links) ? (
              (props.data.links).map((item, key)=>{
                return(
                  <Link key={key} href={item.url}><p>{item.text}</p></Link>
                )
              })
            ): (
              <>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </>
            )
            
          }
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
