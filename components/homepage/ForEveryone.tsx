import Link from "next/link";
import React, { useEffect, useState } from "react";
import { image_type } from "../../interfaces/interfaces";
import useFetchData from "../../lib/api";
import Styles from "../../styles/components/homepage/foreveryone.module.scss";
import ForEveryOneTab from "./ForEveryOneTab";
import Reveal from "../Reveal";

type Props={
  data: {
    heading: string
    tab: {
      title: string,
      heading: string,
      description: string,
      image: image_type
    }[]

  }
}

const ForEveryone = (props:Props) => {
  const [openTab, setOpenTab] = useState<number>(0);


  return (
    <div className={Styles.container}>
      <Reveal>
      <div className={Styles.heading}>
        <h3>
          {
            props.data?.heading || "Freshly homemade food served everyday, for you and your loved ones."
          }
        
        </h3>
      </div>
      </Reveal>
      <Reveal>
      <div className={Styles.link_wrapper}>
        <ul className={Styles.link_list}>
          {
            props.data.tab.map((i, key)=>{
              return(
                <li
                key={key}
            className={`${Styles.link_list_item} ${
              openTab === key ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-moms"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(key);
              }}
            >
              {props.data?.tab[0].title || "For the Moms" }
            </Link>
                </li>
              )
            })
          }
          {/* <li
            className={`${Styles.link_list_item} ${
              openTab === 0 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-moms"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(0);
              }}
            >
              {props.data?.tab[0].title || "For the Moms" }
            </Link>
          </li>
          <li
            className={`${Styles.link_list_item} ${
              openTab === 1 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-singles"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(1);
              }}
            >
             {props.data?.tab[1].title || "For the Singles"}
            </Link>
          </li>
          <li
            className={`${Styles.link_list_item} ${
              openTab === 2 ? Styles.link_list_active_item : ""
            }`}
          >
            <Link
              href={"#for-the-families"}
              onClick={(e) => {
                // e.preventDefault();
                setOpenTab(2);
              }}
            >
              {props.data?.tab[2].title || "For the Families"}
            </Link>
          </li> */}
        </ul>
      </div>
      </Reveal>
      <ForEveryOneTab tab_data={props.data?.tab} tab={openTab} />
    </div>
  );
};

export default ForEveryone;
