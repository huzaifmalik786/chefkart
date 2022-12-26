import React from "react";
import Styles from "../../styles/components/join-as-chef/chef.module.scss";

import Image from "next/image";

type Props = {};

const Chef = (props: Props) => {
  return (
    <div className={Styles.chef_wrapper}>
      <div>
        <Image src={"/chef.png"} alt="chef" width={511} height={568} />
      </div>
      <div>
        <p>The new way to work</p>
        <h2>
          Ready to show your{"\n"} customers what you’ve {"\n"}got?
        </h2>
        <p>Apply here to join our nationwide network of private chefs.</p>
        <button>Sign up now</button>
      </div>
    </div>
  );
};

export default Chef;
