import React from "react";
import BlogCard from "../blogs/BlogCard";
import { BlogCardType } from "../../interfaces/interfaces";
import "react-multi-carousel/lib/styles.css";

import Styles from "../../styles/components/investor-relation/blogsection.module.scss";
import Carousel from "react-multi-carousel";

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
      blogs_categories: {
        data: [
          {
          attributes: {
            category: "News"
          }
        }
      ]
      },
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
      blogs_categories: {
        data: [
          {
          attributes: {
            category: "News"
          }
        }
      ]
      },
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
      blogs_categories: {
        data: [
          {
          attributes: {
            category: "News"
          }
        }
      ]
      },
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1.2,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  }
  return (
    <div className={Styles.blog_wrapper}>
      <h2>{props.data?.heading || "Blogs"}</h2>
      <div className={Styles.cards_wrapper}>
        {(props.data?.blogs_array || BlogData).map((card, index) => {
          return <BlogCard card={card} key={index} />;
        })}
      </div>
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        // autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        ssr
        infinite={false}
        containerClass={Styles.carousel}
        itemClass={Styles.item}
        // deviceType={device}
        arrows={false}
        partialVisible
        // renderDotsOutside
      >
        {(props.data?.blogs_array || BlogData).map((card, index) => {
          return <BlogCard card={card} key={index} small/>;
        })}
      </Carousel>
    </div>
  );
};

export default BlogsSection;
