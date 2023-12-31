import { GetStaticProps } from "next";
import React from "react";
import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import Recomended from "../../components/blogs/Recomended";

import Layout from "../../components/layouts/Layout";
import { BlogCardType, blogType, Footer_type, Header_type, image_type } from "../../interfaces/interfaces";
import Reveal from "../../components/Reveal";
import { json } from "stream/consumers";
// import HowChefkartWorks from "../../components/homepage/HowChefkartWorks";

type Props = {
  header: Header_type
  footer: Footer_type

  banner: {
    badge: string
    heading: string;
    description: {
      text: string;
      highlight: boolean;
    }[]
    button: {
      text: string;
      url: string;
    }
    slider: {
      text: string
  }[]
  video: {
    data: {
      attributes: {
        url: string;
      }
    }
  }
  image: image_type;
  }
  blogs:{
    data: BlogCardType[]
  } 
  filter_buttons: {
    attributes: {
      category: string;
    }
  }[]
  articles: {
    heading: string;
    carousel: blogType[]
  }
  // how_it_works: {
  //   brief: {
  //     heading: string;
  //     description: string;
  //   }
  //   steps:{
  //     text: string;
  //     image: image_type
  //   }[]
  //   download_icon: {
  //     icon: image_type
  //   }[]
  // },
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <BlogHero data={props.banner} />
      <Reveal>
      <AllBlogs data={props.blogs} buttons={props.filter_buttons} />
      </Reveal>
      <Reveal>
      <Recomended data={props.articles} />
      </Reveal>
      <Reveal>
      {/* <HowChefkartWorks data={props.how_it_works} /> */}

      </Reveal>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`
  );
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog?populate=deep,10`);
    const blogs = await res2.json();
    // console.log({blogs: JSON.stringify(blogs)})

    // const temp_res = await fetch(`http://localhost:1337/api/blog?populate=deep,10`)
    // const temp_array = await temp_res.json()

    const res4 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs-categories?populate=deep,10`)
    const button = await res4.json();

    return {
      props : {
        header: header_data.data?.attributes,
        banner: blogs?.data?.attributes?.banner,
        blogs: blogs?.data?.attributes?.blog_pages,
        filter_buttons: button.data,
        articles:{
          heading: blogs?.data?.attributes?.articles_heading,
          carousel: blogs?.data?.attributes?.article_carousel?.blog_pages?.data
        },
        // how_it_works: blogs.data.attributes?.Chefcart_works,
      footer: footer_data.data.attributes.Footer
      }
    }
  }

export default index;
