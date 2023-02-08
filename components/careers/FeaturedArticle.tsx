import React from "react";
import { blogType } from "../../interfaces/interfaces";
import Styles from "../../styles/components/careers/featuredarticle.module.scss";
import BlogArticleCarousel from "../BlogArticleCarousel";

type Props = {
  data: {
    heading: string;
    array: blogType[]
  }
};

const FeaturedArticle = (props: Props) => {
  return (
    <div className={Styles.article_wrapper}>
      <h3>{props.data.heading || "Featured Article"}</h3>
      <div className={Styles.carousel_container}>
        <BlogArticleCarousel cards={props.data.array} isSmall isDots isArrow isFull isInfinite />
      </div>
    </div>
  );
};

export default FeaturedArticle;
