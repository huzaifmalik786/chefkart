import React from "react";
import Styles from "../../styles/components/blogs/blogcard.module.scss";

import Image from "next/image";
import { BlogCardType } from "../../interfaces/interfaces";

type Props = {
  card: BlogCardType;
};

const BlogCard = (props: Props) => {
  return (
    <div className={Styles.blog_card}>
      <div className={Styles.blog_img}>
        <Image
          alt="blog-image"
          src={props.card.img}
          className={Styles.img}
          fill
        />
      </div>
      <div className={Styles.content}>
        <p className={Styles.subheading}>{props.card.subheading}</p>
        <h3 className={Styles.heading}>{props.card.heading}</h3>
      </div>
      <div className={Styles.date}>
        <p>{props.card.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
