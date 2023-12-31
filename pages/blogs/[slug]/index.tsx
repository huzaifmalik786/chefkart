import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Article from '../../../components/articles/Article'
import AuthorBox from '../../../components/articles/AuthorBox'
import CommentBox from '../../../components/articles/CommentBox'
import CommentInput from '../../../components/articles/CommentInput'
import Recomended from '../../../components/blogs/Recomended'
import Layout from '../../../components/layouts/Layout'
import { blogType, Footer_type, Header_type, image_type } from '../../../interfaces/interfaces'

type Props = {
    header: Header_type
      footer: Footer_type
      social_icon: {
        heading: string;
        fb: image_type;
        twitter: image_type;
        linkedin: image_type;

        like: image_type
      }
    article: {
        subtitle: string;
        title: string;
        image: image_type,
        content: string;
        release_date: string;
        slug: string;
    };
    article_carousel: {
      heading: string;
    carousel: blogType[]
    }
}
const Blog = (props:Props) => {
    // console.log("inside")
  return (
    <Layout header={props.header} footer={props.footer}>
        <Article social_icon={props.social_icon} data={props.article} />
        {/* <CommentInput />
        <CommentBox />
        <AuthorBox /> */}
        <Recomended data={props.article_carousel} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-pages`)
    const blogs = await res.json();
    const slugs = blogs.data.map((post:any) => post.attributes.slug);

    const paths = slugs.map((slug: string) => ({
        params: { slug: slug.toString() },
      }));


    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  // `getStaticPaths` requires using `getStaticProps`
  export const getStaticProps = async ({ params }: { params: { slug: string } }) => {

    const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`)
    const header_data = await res1.json();
    
    const res3 = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
    );
    const footer_data = await res3.json();
  
    const blog = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-pages?filters[slug]=${params.slug}&populate=*`);
    const blog_data = await blog.json()
    // console.log(blog_data)

    const articles_res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-single?populate=deep,10`)
    const articles = await articles_res.json();

   

    return {
      // Passed to the page component as props
      props: { 
        header: header_data.data.attributes,
        article: blog_data.data[0].attributes,

        article_carousel: {
          heading: articles.data.attributes.article_carousel_heading,
          carousel: articles.data.attributes.blog_pages.data,
        },
        social_icon: {
          heading: articles.data.attributes.share_heading,
          fb: articles.data.attributes.facebook,
          twitter: articles.data.attributes.twitter,
          linkedin: articles.data.attributes.twitter,
          like: articles.data.attributes.like_button
        },

        footer: footer_data.data.attributes.Footer

       },
    }
  }


export default Blog