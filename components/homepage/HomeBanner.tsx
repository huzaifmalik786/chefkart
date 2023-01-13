import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/homebanner.module.scss";
import useFetchData from '../../lib/api'
import { GetStaticProps } from 'next';
import { GetServerSideProps } from 'next';
const HomeBanner = () => {
  
  // console.log(data.data[0].attribute.badge_text)
  
  return (
    <div className={Styles.banner}>
      <div className={Styles.overlay}>
        <div className={Styles.content}>
          <div className={Styles.toast}>
            <Image
              src={"/toast-burger-icon.svg"}
              alt="taost-icon"
              height={28}
              width={28}
            />
            <p>Serving with love across NCR</p>
          </div>
          <div className={Styles.heading}>
            <h2>
              {/* Lip-smacking homemade <br />
              delicacies served everyday! */}
             Lip-smacking homemade delicacies served everyday!
            </h2>
          </div>
          <div className={Styles.subheading}>
            <h4>
            Hire a verified and trained home chef for
              <br />
              <span>1/3rd of the price</span> you spend ordering food online.
            </h4>
          </div>
          <div className={Styles.btn}>
            <button>get in touch </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeBanner;





