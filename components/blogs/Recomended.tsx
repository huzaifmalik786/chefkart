import React from "react";
import Styles from "../../styles/components/blogs/recomended.module.scss";
import BlogArticleCarousel from "../BlogArticleCarousel";

type Props = {};

const Recomended = (props: Props) => {
  return (
    <div className={Styles.recomended_wrapper}>
      <h4>Recommended Articles</h4>
      <BlogArticleCarousel />
    </div>
  );
};

export default Recomended;
