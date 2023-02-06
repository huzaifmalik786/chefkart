import React from 'react'
import Article from '../../components/articles/Article'
import CommentBox from '../../components/articles/CommentBox'
import Layout from '../../components/layouts/Layout'
import CommentInput from '../../components/articles/CommentInput'
import AuthorBox from '../../components/articles/AuthorBox'
import Recomended from '../../components/blogs/Recomended'
import { GetStaticProps } from 'next'
import { blogType, image_type } from '../../interfaces/interfaces'
import Reveal from '../../components/Reveal'

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
  recomended_article: {
    heading: string;
    carousel: blogType[]
  }
}
const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
        <Article />
        <Reveal>
        <CommentInput />
        </Reveal>
        <Reveal>
        <CommentBox />
        </Reveal>
        <Reveal>
        <AuthorBox />
        </Reveal>
        <Reveal>
        <Recomended data={props.recomended_article} />
        </Reveal>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep`)
  const header_data = await res1.json();
  
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog?populate=deep,10`);
    const article = await res2.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

    return {
      props : {
        header: header_data.data.attributes.header,
        recomended_article: {
          heading: article.data.attributes.heading,
          carousel: article.data.attributes.carousel
        }, 
      footer: footer_data.data.attributes.Footer

      }
    }
}


export default index