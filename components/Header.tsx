import React, { useState } from "react";
import Image from "next/image";
import Styles from "../styles/components/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

type HeaderItems = {
  name: string;
  href: string;
};

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();

  const headerItems: HeaderItems[] = [
    {
      name: "Chef On-Demand",
      href: "/chef-on-demand",
    },
    {
      name: "Monthly Subscriptions",
      href: "/pricing",
    },
    {
      name: "Join as Chef",
      href: "/join-as-chef",
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
            {headerItems.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={Styles.nav_right}>
          <button onClick={() => router.push("/contact-us")}>contact us</button>
          <div onClick={() => setOpenSidebar(true)}>
            <Image
              src={"/burger-icon.svg"}
              alt="menu-icon"
              // width={56}
              // height={56}
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
