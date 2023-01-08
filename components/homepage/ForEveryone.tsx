import Link from "next/link";
import React, { useEffect, useState } from "react";
import useFetchData from "../../lib/api";
import Styles from "../../styles/components/homepage/foreveryone.module.scss";
import ForEveryOneTab from "./ForEveryOneTab";

const ForEveryone = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  const { data, loading, error } = useFetchData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/for-everyone`)
  const [values, setValues] = useState({
    heading: '',
  })

  useEffect(() => {
    if(data){
      setValues({
        ...values,
        heading: data.data.attributes.heading,
      })
  }
  }, [data])

  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h3>
          {values.heading}
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
