import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Article from '../../../components/articles/Article'
import AuthorBox from '../../../components/articles/AuthorBox'
import CommentBox from '../../../components/articles/CommentBox'
import CommentInput from '../../../components/articles/CommentInput'
import Recomended from '../../../components/blogs/Recomended'
import Layout from '../../../components/layouts/Layout'
import { Footer_type, Header_type, image_type } from '../../../interfaces/interfaces'

type Props = {
    header: Header_type
      footer: Footer_type    
    article: {
        subtitle: string;
        title: string;
        image: image_type,
        content: string;
        release_date: string;
        slug: string;
    }
}
const Blog = (props:Props) => {
    // console.log("inside")
  return (
    <Layout header={props.header} footer={props.footer}>
        <Article data={props.article} />
        <CommentInput />
        <CommentBox />
        <AuthorBox />
        {/* <Recomended data={props.recomended_article} /> */}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-pages`)
    const blogs = await res.json();
    console.log(blogs.data)
    const slugs = blogs.data.map((post:any) => post.attributes.slug);

    const paths = slugs.map((slug: string) => ({
        params: { slug: slug.toString() },
      }));

      console.log(paths)

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  // `getStaticPaths` requires using `getStaticProps`
  export const getStaticProps = async ({ params }: { params: { slug: string } }) => {

    const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep`)
    const header_data = await res1.json();
    
    const res3 = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
    );
    const footer_data = await res3.json();
  
    const blog = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-pages?filters[slug]=${params.slug}`);
    const blog_data = await blog.json()
    console.log(blog_data)

    return {
      // Passed to the page component as props
      props: { 
        header: header_data.data.attributes.header,
        article: blog_data.data[0].attributes,

        footer: footer_data.data.attributes.Footer

       },
    }
  }


export default Blog