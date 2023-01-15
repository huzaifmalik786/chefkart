import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Styles from "../styles/components/sidebar.module.scss";

type Props = {
  show: boolean;
  hide: () => void;
};
const links = [
  {
    display: "Blog",
    url: "/blogs",
  },
  {
    display: "Career",
    url: "/careers",
  },
  {
    display: "About Us",
    url: "/about-us",
  },
  {
    display: "Investor Relation",
    url: "/investor-relation",
  },
  {
    display: "Testimonials",
    url: "/testimonials",
  },
];

const Sidebar = (props: Props) => {
  function disableBodyScroll() {
    document.body.style.overflowY = "hidden";
  }

  function enableBodyScroll() {
    document.body.style.overflowY = "auto";
  }

  useEffect(() => {
    disableBodyScroll();

    return () => {
      enableBodyScroll();
    };
  }, []);

  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
        <div className={Styles.cancel_button} onClick={props.hide}>
          <Image src="/cancel 1.svg" alt="cancel_icon" fill />
        </div>
      </div>
      <div className={Styles.body}>
        <ul>
          {links.map((link, key) => {
            return (
              <li key={key}>
                <Link href={link.url}>{link.display}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
