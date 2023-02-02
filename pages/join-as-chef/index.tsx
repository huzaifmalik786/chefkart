import React from "react";
import FAQ from "../../components/FAQ";
import Chef from "../../components/join-as-chef/Chef";
import Metrics from "../../components/join-as-chef/Metrics";
import CookWithUs from "../../components/join-as-chef/CookWithUs";
import JoinHeroCarousel from "../../components/join-as-chef/JoinHeroCarousel";
import SimplifyWay from "../../components/join-as-chef/SimplifyWay";
import VideoComponent from "../../components/join-as-chef/VideoComponent";
import Layout from "../../components/layouts/Layout";
import Testimonial from "../../components/join-as-chef/Testimonial";
import { GetStaticProps } from "next";
import { image_type, QUESTIONS } from "../../interfaces/interfaces";
import UseWindowDimensions from "../../components/WindowSize";

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

  banner_slider: {
    image: image_type
    
    heading: {
      text: string;
      highlight: string;
    }[]
    description: {
      text: string;
      highlight: string;
    }[]

    button: {
      button_text: string;
    }

  }[]
  metrics: {
    heading: string,
    description: string,
    image: image_type
  }[]
  cook: {
    heading: string;
    cards: {
      image: image_type;
      heading: string;
      description: string;
    }[]
  }
  review: {
    review: string;
    name: string;
    video: image_type
  }
  testimonies: {
    review: string;
    name: string;
    stars: number;
    image: image_type
  }[]
  faq: {
    heading : string;
    Question_answer: QUESTIONS[]
  }
};

const index = (props: Props) => {
  const {width}= UseWindowDimensions();
  return (
    <Layout header={props.header} footer={props.footer}>
      <JoinHeroCarousel data={props.banner_slider} />
      <Metrics data={props.metrics} />
      <div style={width<=472?{background:"#EEEFF2",padding: "10vw 3.33vw"}:{}}>
      <CookWithUs data={props.cook} />
      <VideoComponent data={props.review} />
      <Testimonial data={props.testimonies} />
      <Chef />
      </div>
      <SimplifyWay />
      <FAQ data={props.faq} />
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/join-as-chef?populate=deep,10`);
    const join_chef = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,
        banner_slider: join_chef.data.attributes.banner_slider,
        metrics: join_chef.data.attributes.Metrics,
        cook: join_chef.data.attributes.why_us,
        review: join_chef.data.attributes.review,
        testimonies: join_chef.data.attributes.testimonial_carousel,
        faq: join_chef.data.attributes.FAQ,
      footer: footer_data.data.attributes.Footer
      }
    }
  }
export default index;
