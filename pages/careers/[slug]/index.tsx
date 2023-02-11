import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import PositionPage from "../../../components/careers/PositionPage";
import Layout from "../../../components/layouts/Layout";
import { Footer_type, image_type, Header_type } from "../../../interfaces/interfaces";
import Reveal from "../../../components/Reveal";

type Props = {
  header: Header_type
  footer: Footer_type
  job_data: {
    Position: string;
    subheading: string;
    type: string;
    location: string;
    Content: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  }
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <PositionPage data={props.job_data} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/job-openings`)
  const jobs = await res.json();
  // console.log(blogs.data)
  const slugs = jobs.data.map((post:any) => post.attributes.slug);
  const paths = slugs.map((slug: string) => ({
      params: { slug: slug.toString() },
    }));


  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`
  );
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const job = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/job-openings?filters[slug]=${params.slug}&populate=deep,10`);
  const job_data = await job.json()
  console.log(job_data)

    return {
      props : {
        header: header_data.data.attributes.header,
        footer: footer_data.data.attributes.Footer,
        job_data: job_data?.data[0]?.attributes,

      }
    }
}


export default index;
