import React from "react";
import Styles from "../../styles/components/join-as-chef/chef.module.scss";

import Image from "next/image";

type Props = {};

const Chef = (props: Props) => {
  return (
    <div className={Styles.chef_wrapper}>
      <div className={Styles.chef_img}>
        <Image src={"/chef.png"} alt="chef" fill />
      </div>
      <div className={Styles.chef_content}>
        <h6>The new way to work</h6>
        <h2>
          Ready to show your{"\n"} customers what you’ve {"\n"}got?
        </h2>
        <p>
          <span> Apply here</span> to join our nationwide network of private
          chefs.
        </p>
        <button>Sign up now</button>
      </div>
    </div>
  );
};

export default Chef;
