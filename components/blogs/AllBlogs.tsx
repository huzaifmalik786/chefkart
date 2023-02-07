import React, { useState } from "react";
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
    heading: "11 ways to avoid the spread of COVID-191",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-1.png",
          alternativeText: ""
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
          alternativeText: ""
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
          alternativeText: ""
        }
      }
    }
  },
  {
    heading: "11 ways to avoid the spread of COVID-191",
    subheading: "Lorum Ipsum",
    date: "November 18, 2022",
    image: {
      data: {
        attributes: {
          url: "/blog-4.png",
          alternativeText: ""
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
          url: "/blog-5.png",
          alternativeText: ""
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
          url: "/blog-1.png",
          alternativeText: ""
        }
      }
    }
  },
];

const AllBlogs = (props: Props) => {
  const {width}= UseWindowDimensions();
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [morecards,setmorecards]= useState(false);
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
      {width<=450?(
        <div className={Styles.cards_wrapper}>
          {(props.data || BlogData).map((card, index) => {
            if(!morecards){
              return index<4  && <BlogCard card={card} key={index} />;
            }
            else if(morecards){
              return <BlogCard card={card} key={index} />;
            }
          })}
        </div>
      ):(
        <div className={Styles.cards_wrapper}>
          {(props.data || BlogData).map((card, index) => {
            return <BlogCard card={card} key={index} />;
          })}
        </div>
      )}
      
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
      {props.data.length<4?(
        <div></div>
      ):(
        <div className={Styles.load_button} style={morecards?{display:"none"}:{}}>
        <button onClick={()=>setmorecards(true)}>
          <p>Load More</p>
          <div className={Styles.more}>
            <Image src={"/arrow_more.svg"} alt="next" fill/>
          </div>
        </button>
      </div>
      )}
    </div>
  );
};

export default AllBlogs;
