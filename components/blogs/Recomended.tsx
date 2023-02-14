import React, { useEffect, useState } from "react";
import { blogType } from "../../interfaces/interfaces";
import useFetchData from "../../lib/api";
import Styles from "../../styles/components/blogs/recomended.module.scss";
import BlogArticleCarousel from "../BlogArticleCarousel";

type Props = {
  data: {
    heading: string;
    carousel: blogType[]
  }
};

const Recomended = (props: Props) => {

  return (
    <div className={Styles.recomended_wrapper}>
      <h4>{props.data.heading || "Recommended Articles"}</h4>
      <div className={Styles.carousel_container}>
        <BlogArticleCarousel
        cards={props.data.carousel}
          isArrow={false}
          isDots={false}
          isFull={false}
          isInfinite={false}
        />

      </div>
    </div>
  );
};

export default Recomended;
