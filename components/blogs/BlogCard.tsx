import React from "react";
import Styles from "../../styles/components/blogs/blogcard.module.scss";

import Image from "next/image";
import { BlogCardType } from "../../interfaces/interfaces";

type Props = {
  card: BlogCardType;
};

const BlogCard = (props: Props) => {
  function changeFormat(d: string){
    let date = new Date(d);
    let formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    let newDate = formatter.format(date);
    return newDate
}
  return (
    <div className={Styles.blog_card}>
      <div className={Styles.blog_img}>
        <Image
          alt={props.card.image.data.attributes.url || "blog-image"}
          src={props.card.image.data.attributes.url}
          className={Styles.img}
          fill
        />
      </div>
      <div className={Styles.content}>
        <p className={Styles.subheading}>{props.card.subheading}</p>
        <h3 className={Styles.heading}>{props.card.heading}</h3>
        <p className={Styles.date}>{changeFormat(props.card.date)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
