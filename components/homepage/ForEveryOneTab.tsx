import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/foreveryonetab.module.scss";
import useFetchData from "../../lib/api";

type Props = {
  tab: number;
};

const ForEveryOneTab = (props: Props) => {

  return (
    <div className={Styles.tab}>
      {props.tab === 1 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src='/for-moms.png'
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              No more tedious chores
              <br /> and worrying what to make
            </h3>
            <p>
              Leave your cooking worries to our chefs - just say
              <br /> the word and our trained chefs
            </p>
          </div>
        </>
      )}

      {props.tab === 2 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src='/for-single.png'
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              Goodbye tedious chores
              <br /> and missing ghar ka khana!
            </h3>
            <p>
              Leave your cooking worries to our <br />
              chefs lip-smacking nutritious meals on your table
            </p>
          </div>
        </>
      )}

      {props.tab === 3 && (
        <>
          <div className={Styles.tab_img}>
            <Image
              src='/for-family.png'
              alt="for-moms-img"
              // width={612}
              // height={572}
              fill
            />
          </div>
          <div className={Styles.tab_text}>
            <h3>
              Healthy and nutritious food
              <br /> served with care everyday
            </h3>
            <p>
              Leave your cooking worries to our chefs - just say
              <br /> the word and our trained chefs will cook it for you
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ForEveryOneTab;
