import { GetStaticProps } from "next";
import React from "react";
import Divider from "../../components/Divider";
import Layout from "../../components/layouts/Layout";
import HeroVideo from "../../components/testimonials/HeroVideo";
import OurWord from "../../components/testimonials/OurWord";
import UserReviews from "../../components/testimonials/UserReviews";
import { image_type, ReviewsCardType } from "../../interfaces/interfaces";

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

  }
  section_heading: string;
  cards: {
    review: string;
    name: string;
    stars: number;
    image: image_type
  }[]
  reviews: ReviewsCardType[]
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <HeroVideo  />
      <OurWord heading={props.section_heading} carousel_data={props.cards} />
      <UserReviews data={props.reviews} />
      <Divider />
    </Layout>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/testimonial?populate=deep,10`);
    const testimonial_data = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,

        banner : testimonial_data.data.attributes.banner,
        section_heading: testimonial_data.data.attributes.section_heading,
        cards: testimonial_data.data.attributes.testimonials_cards,
        reviews: testimonial_data.data.attributes.video_review,
      footer: footer_data.data.attributes.Footer

      }
    }
}


export default index;
