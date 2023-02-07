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
    attributes: {

      title: "11 ways to avoid the spread of COVID-191",
      subtitle: "Lorum Ipsum",
      release_date: "November 18, 2022",
      slug: "#",
      category: "blogs",
      image: {
        data: {
          attributes: {
            url: "/blog-1.png",
            alternativeText: "blog-img"
          }
        }
      }
    }
  },
  {
    attributes: {

      title: "Love in the times of Quarantine",
      subtitle: "Lorum Ipsum",
      release_date: "November 18, 2022",
      slug: "#",
      category: "blogs",
      image: {
        data: {
          attributes: {
            url: "/blog-2.png",
            alternativeText: "blog-img"
          }
        }
      }
    }
  },
  {
    attributes: {

      title: "A foodie next door",
      subtitle: "Lorum Ipsum",
      release_date: "November 18, 2022",
      slug: "#",
      category: "blogs",
      image: {
        data: {
          attributes: {
            url: "/blog-3.png",
            alternativeText: "blog-img"
          }
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
        {(props.data.blogs_array || BlogData).map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
