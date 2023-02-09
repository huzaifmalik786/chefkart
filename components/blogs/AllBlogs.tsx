import React, { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import Styles from "../../styles/components/blogs/allblogs.module.scss";
import { BlogCardType } from "../../interfaces/interfaces";
import Image from "next/image";
import UseWindowDimensions from "../WindowSize";

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
  const {width}= UseWindowDimensions();
  const componentRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = width>= 450 ? 6 : 4

  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  var endIndex = startIndex + itemsPerPage
  const [displayedItems, setDisplayedItems] = useState((props.data || BlogData).slice(0, itemsPerPage))
  // const [startIndex, setStartIndex] = useState(0)
  // const [endIndex, setEndIndex] = useState(itemsPerPage)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  
  // const displayedItems = (props.data || BlogData).slice(startIndex, endIndex)
  const totalBlogs = (props.data?.length || BlogData.length)
  const totalPages = Math.ceil(totalBlogs/itemsPerPage)

  const [morecards,setmorecards]= useState<number>(0);
  const handleFilter = (index: number) => {
    setActiveBtn(index);
  };

  useEffect(() => {
  
    width >= 450 ? setDisplayedItems((props.data || BlogData).slice(startIndex, endIndex)) : setDisplayedItems((props.data || BlogData).slice(0, endIndex+morecards))

    if(componentRef && componentRef.current && width >= 450){
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    },
    [currentPage, startIndex, endIndex, props.data, width, morecards ]
  );


  return (
    <div className={Styles.blogs}  ref={componentRef}>
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
        itemsPerPage <= totalBlogs && (
          <div className={Styles.pagination}>
            {Array.from({length: totalPages}, (_, i) => i + 1).map((item, index) => {
              return <button type="button" className={`${item === currentPage ? Styles.active : ''}`} onClick={()=> handlePageChange(item)} key={index}>{item}</button>;
            })}
            {
              endIndex < totalBlogs && (
                <button onClick={() => handlePageChange(currentPage + 1)} >
                  <div className={Styles.next}>
                    <Image src={"/arrow_next.svg"} alt="next" fill />
                  </div>
                </button>

              )
            }
          </div>

        )
      }

      <div className={Styles.load_button}>
        <button onClick={()=>{setmorecards((c)=> c+3)}} style={ totalBlogs <= morecards + itemsPerPage ? {display: "none"}: {}}>
          <p>Load More</p>
          <div className={Styles.more}>
            <Image src={"/arrow_more.svg"} alt="next" fill/>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
