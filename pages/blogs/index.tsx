import { GetStaticProps } from "next";
import React from "react";
import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import Recomended from "../../components/blogs/Recomended";

import Layout from "../../components/layouts/Layout";
import { BlogCardType, blogType, Footer_type, Header_type, image_type } from "../../interfaces/interfaces";
import Reveal from "../../components/Reveal";

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
      button_text: string;
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
  }
  blogs: BlogCardType[]
  filter_buttons: {
    attributes: {
      category: string;
    }
  }[]
  articles: {
    heading: string;
    carousel: blogType[]
  }
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

    // const temp_res = await fetch(`http://localhost:1337/api/blog?populate=deep,10`)
    // const temp_array = await temp_res.json()

    const res4 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs-categories?populate=deep,10`)
    const button = await res4.json();

    return {
      props : {
        header: header_data.data?.attributes,
        banner: blogs?.data?.attributes?.banner,
        blogs: blogs?.data?.attributes?.blog_pages.data,
        filter_buttons: button.data,
        articles:{
          heading: blogs?.data?.attributes?.articles_heading,
          carousel: blogs?.data?.attributes?.article_carousel?.blog_pages?.data
        },
      footer: footer_data.data.attributes.Footer
      }
    }
  }

export default index;
