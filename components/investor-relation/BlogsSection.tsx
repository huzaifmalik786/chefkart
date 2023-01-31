import React from "react";
import BlogCard from "../blogs/BlogCard";
import { BlogCardType } from "../../interfaces/interfaces";

import Styles from "../../styles/components/investor-relation/blogsection.module.scss";

type Props = {
  data: {
    heading: string;
    blogs_array: BlogCardType[]
  }
};

const BlogData: BlogCardType[] = [
  {
    heading: "11 ways to avoid the spread of COVID-191",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-1.png",
          alternativeText: "blog-img"
        }
      }
    }
  },
  {
    heading: "Love in the times of Quarantine",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-2.png",
          alternativeText: "blog-img"
        }
      }
    }
  },
  {
    heading: "A foodie next door",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-3.png",
          alternativeText: "blog-img"
        }
      }
    }
  },
];

const BlogsSection = (props: Props) => {
  return (
    <div className={Styles.blog_wrapper}>
      <h2>{props.data?.heading || "Blogs"}</h2>
      <div className={Styles.cards_wrapper}>
        {(props.data?.blogs_array || BlogData).map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
