import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/homebanner.module.scss";
import useFetchData from '../../lib/api'
import { GetStaticProps } from 'next';
import { GetServerSideProps } from 'next';
const HomeBanner = () => {

  const { data, loading, error } = useFetchData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/homepage-banner?populate=*`)
  const [values, setValues] = useState({
    badge_text: '',
    heading: '',
    subheading_1: '',
    subheading_2: '',
    colored_text: '',
    img: ''
  })
  console.log(data)
 
  useEffect(() => {
    if(data){
      setValues({
        ...values,
        badge_text: data.data.attributes.badge_text,
        heading: data.data.attributes.heading,
        subheading_1: data.data.attributes.subheading_1,
        subheading_2: data.data.attributes.subheading_2,
        colored_text: data.data.attributes.colored_text,
        img: data.data.attributes.homepage_image.data.attributes.url
      })
  }
  }, [data])
  
  // console.log(data.data[0].attribute.badge_text)
  
  console.log(data)
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
            <p>{values.badge_text}</p>
          </div>
          <div className={Styles.heading}>
            <h2>
              {/* Lip-smacking homemade <br />
              delicacies served everyday! */}
              {values.heading}
            </h2>
          </div>
          <div className={Styles.subheading}>
            <h4>
              {values.subheading_1}
              <br />
              <span>{values.colored_text}</span> {values.subheading_2}
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





