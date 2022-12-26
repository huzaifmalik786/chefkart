import Link from "next/link";
import React, { useState } from "react";
import Styles from "../../styles/components/homepage/foreveryone.module.scss";
import ForEveryOneTab from "./ForEveryOneTab";

const ForEveryone = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h3>
          Freshly homemade food served
          <br /> everyday, for you and your loved ones.
        </h3>
      </div>
      <div className={Styles.link_wrapper}>
        <ul className={Styles.link_list}>
          <li
            className={`${Styles.link_list_item} ${
              openTab === 1 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-moms"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(1);
              }}
            >
              For the Moms
            </Link>
          </li>
          <li
            className={`${Styles.link_list_item} ${
              openTab === 2 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-singles"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(2);
              }}
            >
              For the Singles
            </Link>
          </li>
          <li
            className={`${Styles.link_list_item} ${
              openTab === 3 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-families"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(3);
              }}
            >
              For the Families
            </Link>
          </li>
        </ul>
      </div>
      <ForEveryOneTab tab={openTab} />
    </div>
  );
};

export default ForEveryone;
