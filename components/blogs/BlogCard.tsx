import React from "react";
import Styles from "../../styles/components/blogs/blogcard.module.scss";

import Image from "next/image";
import { BlogCardType } from "../../interfaces/interfaces";
import Link from "next/link";

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
    <Link href={`/blogs/${props.card?.attributes?.slug}`}>
    <div className={Styles.blog_card}>
      <div className={Styles.blog_img}>
        <Image
          alt={props.card?.attributes?.image?.data?.attributes?.alternativeText || "blog-image"}
          src={props.card?.attributes?.image?.data?.attributes?.url}
          className={Styles.img}
          fill
        />
      </div>
      <div className={Styles.content}>
        <p className={Styles.subheading}>{props.card?.attributes?.subtitle}</p>
        <h3 className={Styles.heading}>{props.card?.attributes?.title}</h3>
        <p className={Styles.date}>{changeFormat(props.card?.attributes?.release_date)}</p>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
