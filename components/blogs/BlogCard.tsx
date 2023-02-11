import React from "react";
import Styles from "../../styles/components/blogs/blogcard.module.scss";

import Image from "next/image";
import { BlogCardType } from "../../interfaces/interfaces";
import Link from "next/link";
import Reveal from "../Reveal";

type Props = {
  card: BlogCardType;
  small?: boolean;
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
    <Reveal>
    <Link href={`/blogs/${props.card?.attributes?.slug}`}>
    <div className={Styles.blog_card} style={props.small?{minHeight: "65.83vw",width:"66.11vw", borderRadius:"1.67vw"}:{}}>
      <div className={Styles.blog_img} style={props.small?{height:"35vw"}:{}}>
        <Image
          alt={props.card?.attributes?.image?.data?.attributes?.alternativeText || "blog-image"}
          src={props.card?.attributes?.image?.data?.attributes?.url}
          className={Styles.img}
          fill
        />
      </div>
      <div className={Styles.content} style={props.small?{padding: "3.33vw"}:{}}>
        <p className={Styles.subheading}>{props.card?.attributes?.subtitle}</p>
        <h3 className={Styles.heading} style={props.small?{fontSize:"3.89vw"}:{}}>{props.card?.attributes?.title}</h3>
        <p className={Styles.date} style={props.small?{fontSize:"2.78vw"}:{}}>{changeFormat(props.card?.attributes?.release_date)}</p>
      </div>
    </div>
    </Link>
    </Reveal>
  );
};

export default BlogCard;
