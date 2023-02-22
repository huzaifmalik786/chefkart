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
  career_page: {
    apply_button: string;

    join_form: {
      heading: string;
    inputs: {
      label: string;
      placeholder: string;
      name: string;
      type: string;
      icon: image_type
    }[]
    submit_button: string;
    }

    thank_you: {
      heading: string;
      subheading: string;
      link: {
        text: string;
        url: string;
      }
      icon: image_type
    }
    
  }
  
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer} >
      <PositionPage data={props.job_data} career={props.career_page} />
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

  const temp_res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/career-single?populate=deep,10`)
  const temp = await temp_res.json()

    return {
      props : {
        header: header_data.data.attributes,
        footer: footer_data.data.attributes.Footer,
        job_data: job_data?.data[0]?.attributes,
        
        career_page: temp.data.attributes,
        // thank_you: temp.data.attributes.thank_you

      }
    }
}


export default index;
