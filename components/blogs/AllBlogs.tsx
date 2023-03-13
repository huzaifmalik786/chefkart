import React, { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import Styles from "../../styles/components/blogs/allblogs.module.scss";
import { BlogCardType } from "../../interfaces/interfaces";
import Image from "next/image";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data:{
    data: BlogCardType[]
  } 
  buttons: {
    attributes: {
      category: string;
    }
  }[]
};

const FilterButtons = [
  {
  tag: "Trending",
  },
  {
  tag: "Food Recipe",
  },
  {
  tag: "Blogs",
  },
  {
  tag: "Video",
  },
  {
  tag: "News",
  },

  // "Food Recipe",
  // "Blogs",
  // "Video",
  // "News",
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
    blogs_categories: {
      data: [
        {
        attributes: {
          category: "News"
        }
      }
    ]
    }
  }
  },
  
];

const AllBlogs = (props: Props) => {
  const {width}= UseWindowDimensions();
  const componentRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);
  const [isFirst, setFirst] = useState<boolean>(true)

  const itemsPerPage = width>= 450 ? 6 : 4
  // const itemsPerPage = 6

  const [activeBtn, setActiveBtn] = useState<string>(props.buttons[0].attributes.category);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  var endIndex = startIndex + itemsPerPage
  const [filteredData, setFilteredData] = useState((props?.data?.data || BlogData).filter((i)=> {return i.attributes.blogs_categories.data.find(i => i.attributes.category == 'Trending')}))
  const [displayedItems, setDisplayedItems] = useState((filteredData).slice(0, itemsPerPage))
  const [firstRender, setFirstRender] = useState(true);
  // const [startIndex, setStartIndex] = useState(0)
  // const [endIndex, setEndIndex] = useState(itemsPerPage)
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  
  // const displayedItems = (props.data || BlogData).slice(startIndex, endIndex)
  const totalBlogs = (props.data?.data.length || BlogData.length)
  const totalPages = Math.ceil(totalBlogs/itemsPerPage)

  const [morecards,setmorecards]= useState<number>(0);
  const handleFilter = (index: string) => {
    setActiveBtn(index);
  };

  useEffect(() => {
  
    width >= 450 ? setDisplayedItems(filteredData.slice(startIndex, endIndex)) : setDisplayedItems(filteredData.slice(0, endIndex+morecards))

    
    },
   
    [currentPage, startIndex, endIndex, width, morecards, filteredData ]
  );
useEffect(() => {
  setFilteredData(props?.data?.data.filter((i)=> {return i.attributes.blogs_categories.data.find(i => i.attributes.category === activeBtn)}))
  setCurrentPage(1)
  
  if(isMounted.current && componentRef && componentRef.current && width > 450){
    componentRef.current.scrollIntoView({ behavior: 'smooth' });
  }else{
    isMounted.current = true;
  }

  return()=>{
    setFilteredData([])
  }
}, [activeBtn, props.data, width])

 

  const checkBlogCategory = (card: BlogCardType, filter: string) =>{
    const categories = card.attributes.blogs_categories.data
    for (let i = 0; i < categories.length; i++) {
      if(categories[i].attributes.category === filter)
      return true;
    }
    return false;
  }



  return (
    <div className={Styles.blogs}  ref={componentRef}>
      <div className={Styles.filter_btns}>
        {(props.buttons || FilterButtons).map((item, index) => {
          return (
            <button
              onClick={() => handleFilter(item.attributes.category)}
              key={index}
              className={
                activeBtn === item.attributes.category ? Styles.active_btn : Styles.button
              }
            >
              {item.attributes.category}
            </button>
          );
        })}
      </div>
      <div className={Styles.cards_wrapper}>
        {displayedItems
        .map((card, index) => {
          // console.log(card.attributes.category)
          return <BlogCard card={card} key={index} />
        })}
      </div>
      {
        
        itemsPerPage < filteredData.length && (
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
