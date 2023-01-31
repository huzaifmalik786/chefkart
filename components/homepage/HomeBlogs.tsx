import React, { useEffect, useState } from "react";
import BlogArticleCarousel from "../BlogArticleCarousel";
import Styles from "../../styles/components/homepage/homeblogs.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetchData from "../../lib/api";
import useWindowDimensions from "../WindowSize";

type Props = {

};



const HomeBlogs = (props: Props) => {
  const {width}= useWindowDimensions();
  
  const router = useRouter();

  
  return (
    <div className={Styles.blogs_wrapper}>
      <div className={Styles.header}>
        <p>Blogs</p>
        <h3>{width>472?`Cusines worth travelling, now at ${"\n"} your fingertips`:"Cusines worth travelling, now at your fingertips"}</h3>
      </div>
      <div>
        <BlogArticleCarousel
          isArrow={false}
          isDots={false}
          isFull={false}
          isInfinite={false}
        />
      </div>
      <div className={Styles.footer}>
        <button onClick={() => router.push("/blogs")}>
          View All Blogs{" "}
          <Image src={"/next-page.svg"} alt="next" height={15} width={15} />
        </button>
      </div>
    </div>
  );
};

export default HomeBlogs;
