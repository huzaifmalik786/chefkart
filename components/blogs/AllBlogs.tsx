import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Styles from "../../styles/components/blogs/allblogs.module.scss";
import { BlogCardType } from "../../interfaces/interfaces";
import Image from "next/image";

type Props = {
  data: BlogCardType[]
};

const FilterButtons: string[] = [
  "Trending",
  "Food Recipe",
  "Blogs",
  "Video",
  "News",
];

const BlogData: BlogCardType[] = [
  {
    attributes: {
    title: "11 ways to avoid the spread of COVID-191",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-1.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "News"
  }
  },
  {
    attributes: {
    title: "Love in the times of Quarantine",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-2.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "News"
  }
  },
  {
    attributes: {
    title: "A foodie next door",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-3.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "News"
  }
  },
  {
    attributes: {
    title: "11 ways to avoid the spread of COVID-191",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-4.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "blogs"
  }
  },
  {
    attributes: {
    title: "Love in the times of Quarantine",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-5.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "blogs"
  }
  },
  {
    attributes: {
    title: "A foodie next door",
    subtitle: "Lorum Ipsum",
    release_date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-1.png",
          alternativeText: ""
        }
      }
    },
    slug: "covid",
    category: "blogs"
  }
  },
];

const AllBlogs = (props: Props) => {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedItems = (props.data || BlogData).slice(startIndex, endIndex)
  const totalBlogs = props.data.length
  const totalPages = Math.ceil(totalBlogs/itemsPerPage)

  const handleFilter = (index: number) => {
    setActiveBtn(index);
  };

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
        {displayedItems.map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
      {
        // itemsPerPage <= totalBlogs && (
          <div className={Styles.pagination}>
            {Array.from({length: totalPages}, (_, i) => i + 1).map((item, index) => {
              return <button onClick={()=> handlePageChange(item)} key={index}>{item}</button>;
            })}
            {
              endIndex < totalBlogs && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  <div className={Styles.next}>
                    <Image src={"/arrow_next.svg"} alt="next" fill />
                  </div>
                </button>

              )
            }
          </div>

        // )
      }
    </div>
  );
};

export default AllBlogs;
