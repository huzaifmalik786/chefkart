import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Styles from "../../styles/components/blogs/allblogs.module.scss";
import { BlogCardType } from "../../interfaces/interfaces";
import Image from "next/image";

type Props = {};

const FilterButtons: string[] = [
  "Trending",
  "Food Recipe",
  "Blogs",
  "Video",
  "News",
];

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
  {
    heading: "11 ways to avoid the spread of COVID-191",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-4.png",
  },
  {
    heading: "Love in the times of Quarantine",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-5.png",
  },
  {
    heading: "A foodie next door",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    img: "/blog-6.png",
  },
];

const AllBlogs = (props: Props) => {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const handleFilter = (index: number) => {
    setActiveBtn(index);
  };

  console.log(activeBtn);
  return (
    <div className={Styles.blogs}>
      <div className={Styles.filter_btns}>
        {FilterButtons.map((item, index) => {
          return (
            <button
              onClick={() => handleFilter(index)}
              key={index}
              className={
                activeBtn === index ? Styles.active_btn : Styles.button
              }
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className={Styles.cards_wrapper}>
        {BlogData.map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
      <div className={Styles.pagination}>
        {[1, 2, 3, 4].map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
        <button>
          <div className={Styles.next}>
            <Image src={"/arrow_next.svg"} alt="next" fill />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
