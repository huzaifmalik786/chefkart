import React from "react";
import BlogCard from "../blogs/BlogCard";
import { BlogCardType } from "../../interfaces/interfaces";

import Styles from "../../styles/components/investor-relation/blogsection.module.scss";

type Props = {};

const BlogData: BlogCardType[] = [
  {
    heading: "11 ways to avoid the spread of COVID-191",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-1.png",
  },
  {
    heading: "Love in the times of Quarantine",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-2.png",
  },
  {
    heading: "A foodie next door",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-3.png",
  },
];

const BlogsSection = (props: Props) => {
  return (
    <div className={Styles.blog_wrapper}>
      <h2>Blogs</h2>
      <div className={Styles.cards_wrapper}>
        {BlogData.map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
