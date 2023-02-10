import React from "react";
import Styles from "../../styles/components/join-as-chef/chef.module.scss";

import Image from "next/image";
import Link from "next/link";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  data: {
    subheading: string;
    heading: string;
    link_text: string;
    apply_link: {
      text: string;
      url: string;
    }
    button: {
      button_text: string;
    }
    image: image_type
  }
};

const Chef = (props: Props) => {
  return (
    <div className={Styles.chef_wrapper}>
      <div className={Styles.chef_img}>
        <Image src={props.data?.image?.data?.attributes?.url || "/chef.png"} alt={props.data?.image?.data?.attributes?.alternativeText || "chef"} fill />
      </div>
      <div className={Styles.chef_content}>
        <h6>{props.data?.subheading || "The new way to work"}</h6>
        <h2>
          {props.data?.heading || "Ready to show your customers what you’ve got?"}
        </h2>
        <p>
          <Link href={props.data?.apply_link?.url || "#"}>{props.data.apply_link.text || "Apply here"}</Link> {props.data?.link_text || "to join our network of private chefs."}
        </p>
        <button>{props.data?.button.button_text || "Sign up now"}</button>
      </div>
    </div>
  );
};

export default Chef;
