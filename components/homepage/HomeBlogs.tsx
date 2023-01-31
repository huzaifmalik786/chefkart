import React, { useEffect, useState } from "react";
import BlogArticleCarousel from "../BlogArticleCarousel";
import Styles from "../../styles/components/homepage/homeblogs.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetchData from "../../lib/api";
import { blogType } from "../../interfaces/interfaces";

type Props = {
  data: {
    section_name: string;
    heading: string;
    blog_carousel: blogType[],
    button: {
      button_text: string
    }
  }
};



const HomeBlogs = (props: Props) => {
  
  const router = useRouter();

  
  return (
    <div className={Styles.blogs_wrapper}>
      <div className={Styles.header}>
        <p>{props.data.section_name || "Blogs"}</p>
        <h3>{props.data.heading || "Cusines worth travelling, now at your fingertips"}</h3>
      </div>
      <div>
        <BlogArticleCarousel
          isArrow={false}
          isDots={false}
          isFull={false}
          isInfinite={false}
          cards={props.data.blog_carousel}
        />
      </div>
      <div className={Styles.footer}>
        <button onClick={() => router.push("/blogs")}>
          {props.data.button.button_text || "View All Blogs"}
          <Image src={"/next-page.svg"} alt="next" height={15} width={15} />
        </button>
      </div>
    </div>
  );
};

export default HomeBlogs;
