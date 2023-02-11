import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Styles from "../styles/components/sidebar.module.scss";
import UseWindowDimensions from "./WindowSize";

type HeaderItems = {
  text: string;
  url: string
};

type Props = {
  show: boolean;
  hide: () => void;

  links: HeaderItems[]
};
const links: HeaderItems[] = [
  {
    text: "Blog",
    url: "/blogs",
  },
  {
    text: "Career",
    url: "/careers",
  },
  {
    text: "About Us",
    url: "/about-us",
  },
  {
    text: "Investor Relation",
    url: "/investor-relation",
  },
  {
    text: "Testimonials",
    url: "/testimonials",
  },
];

const Sidebar = (props: Props) => {
  const { width } = UseWindowDimensions()
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
          {(props.links || links).map((link, key) => {
            return (
              <li key={key}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
