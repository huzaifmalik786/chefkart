import { GetStaticProps } from "next";
import React from "react";
import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import Recomended from "../../components/blogs/Recomended";

import Layout from "../../components/layouts/Layout";
import { BlogCardType, blogType, image_type } from "../../interfaces/interfaces";

type Props = {
  header: {
    nav_links: [],
    button: {
      button_text: string;
    }
    avatar: image_type
  };
  footer: {
    social_heading: string;
    get_app_heading: string;
    copyright_text: string;

    logo: {
      name: string;
      url: string;
      image: image_type
    }
    footer_links: {
      text: string;
      url: string;
    }[]
    social_icons: {
      url: string;
      icon: image_type
    }[]
    download_icon: {
      url: string;
      icon: image_type
    }[]
    links: {
      text: string;
      url: string;
    }[]
  }

  banner: {
    badge: string
    heading: string;
    subheading: {
      text: string;
      highlight: boolean;
    }[]
    button: {
      button_text: string;
    }
  }
  blogs: BlogCardType[]
  articles: {
    heading: string;
    carousel: blogType[]
  }
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <BlogHero data={props.banner} />
      <AllBlogs data={props.blogs} />
      <Recomended data={props.articles} />
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

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog?populate=deep,10`);
    const blogs = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,
        banner: blogs.data.attributes.banner,
        blogs: blogs.data.attributes.cards,
        articles:{
          heading: blogs.data.attributes.heading,
          carousel: blogs.data.attributes.carousel
        },
      footer: footer_data.data.attributes.Footer
      }
    }
  }

export default index;
