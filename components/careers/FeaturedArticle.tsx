import React from "react";
import Styles from "../../styles/components/careers/featuredarticle.module.scss";
import BlogArticleCarousel from "../BlogArticleCarousel";

type Props = {};

const FeaturedArticle = (props: Props) => {
  return (
    <div className={Styles.article_wrapper}>
      <h3>Featured Article</h3>
      <div>
        <BlogArticleCarousel isDots isArrow isFull isInfinite />
      </div>
    </div>
  );
};

export default FeaturedArticle;
