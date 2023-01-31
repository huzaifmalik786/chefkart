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
      <h4>Recommended Articles</h4>
      <BlogArticleCarousel
      cards={props.data.carousel}
        isArrow={false}
        isDots={false}
        isFull={false}
        isInfinite={false}
      />
    </div>
  );
};

export default Recomended;
