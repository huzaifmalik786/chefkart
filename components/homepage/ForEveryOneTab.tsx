import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/foreveryonetab.module.scss";
import useFetchData from "../../lib/api";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  tab: number;
  tab_data: {
      heading: string,
      description: string
      image: image_type
    }[]
};

const ForEveryOneTab = (props: Props) => {

  return (
    <div className={Styles.tab}>
      {props.tab === 1 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src={props.tab_data[0].image.data.attributes.url || '/for-moms.png'}
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              {
                props.tab_data[0].heading || "No more tedious chores and worrying what to make"
              }
              
              <br />
            </h3>
            <p>
              {
                props.tab_data[0].description || "Leave your cooking worries to our chefs - just say the word and our trained chefs"
              }
              
            </p>
          </div>
        </>
      )}

      {props.tab === 2 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src={props.tab_data[1].image.data.attributes.url || '/for-single.png'}
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              {
                props.tab_data[1].heading || "Goodbye tedious chores and missing ghar ka khana!" 
              }
              
            </h3>
            <p>
              {
                props.tab_data[1]?.description || "Leave your cooking worries to our chefs lip-smacking nutritious meals on your table"
              }
              
            </p>
          </div>
        </>
      )}

      {props.tab === 3 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src={props.tab_data[2].image.data.attributes.url || '/for-family.png'}
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              {
                props.tab_data[2].heading || "Healthy and nutritious food served with care everyday"
              }
              
            </h3>
            <p>
              {
                props.tab_data[2].description || "Leave your cooking worries to our chefs - just say the word and our trained chefs will cook it for you"
              }
              
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ForEveryOneTab;
