import React, { useState } from "react";
import Image from "next/image";
import Styles from "../styles/components/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { image_type } from "../interfaces/interfaces";

type HeaderItems = {
  text: string;
  url: string
};

type Props = {
  data : {
    nav_links: [],
    button: {
      button_text: string;
    }
    avatar: image_type
  }
}
const Header = (props:Props) => {
  console.log(props.data)
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();

  const headerItems: HeaderItems[] = [
    {
      text: "Chef On-Demand",
      url: "/chef-on-demand",
    },
    {
      text: "Monthly Subscriptions",
      url: "/pricing",
    },
    {
      text: "Join as Chef",
      url: "/join-as-chef",
    },
  ];

  return (
    <>
      <nav className={Styles.navbar}>
        <div className={Styles.nav_left}>
          <Link href="/">
            {router.pathname === "/" ? (
              <Image
                src={"/Logo.svg"}
                alt="chefkart-logo"
                // width={192}
                // height={56}
                fill
              />
            ) : (
              <Image
                src={"/Logo-yellow.svg"}
                alt="chefkart-logo"
                // width={192}
                // height={56}
                fill
              />
            )}
          </Link>
        </div>
        <div className={Styles.nav_center}>
          <ul>
            {(props.data?.nav_links || headerItems).map((item:HeaderItems, index:number) => {
              return (
                <Link href={item.url} key={index}>
                  <li>{item.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={Styles.nav_right}>
          <button onClick={() => router.push("/contact-us")}>{props.data?.button.button_text || "contact us"}</button>
          <div onClick={() => setOpenSidebar(true)}>
            <Image
              src={props.data.avatar?.data?.attributes?.url || "/burger-icon.svg"}
              alt={props.data.avatar?.data?.attributes?.url || "menu-icon"}
              fill
            />
          </div>
        </div>
      </nav>
      {openSidebar && (
        <Sidebar show={openSidebar} hide={() => setOpenSidebar(false)} />
      )}
    </>
  );
};

export default Header;
