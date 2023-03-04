import { GetStaticProps } from "next";
import React from "react";
import Divider from "../../components/Divider";
import Layout from "../../components/layouts/Layout";
import HeroVideo from "../../components/testimonials/HeroVideo";
import OurWord from "../../components/testimonials/OurWord";
import UserReviews from "../../components/testimonials/UserReviews";
import { Footer_type, Header_type, image_type, ReviewsCardType } from "../../interfaces/interfaces";
import Reveal from "../../components/Reveal";
import HowChefkartWorks from "../../components/homepage/HowChefkartWorks";
type Props = {
  header: Header_type
  footer: Footer_type
  banner: {
    heading: string;
    video: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
  how_it_works: {
    brief: {
      heading: string;
      description: string;
    }
    steps:{
      text: string;
      image: image_type
    }[]
    download_icon: {
      icon: image_type
    }[]
  },
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
      <HeroVideo data={props.banner}  />
      <Reveal>
      <OurWord heading={props.section_heading} carousel_data={props.cards} />
      </Reveal>
      <Reveal>
      <UserReviews data={props.reviews} />
      </Reveal>
      <Reveal>
          <HowChefkartWorks data={props.how_it_works} />
      </Reveal>
      <Divider />
    </Layout>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`)
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
        header: header_data.data.attributes,

        banner : testimonial_data.data.attributes.banner,
        section_heading: testimonial_data.data.attributes.section_heading,
        cards: testimonial_data.data.attributes.testimonials_cards,
      how_it_works: testimonial_data.data.attributes?.Chefcart_works,

        reviews: testimonial_data.data.attributes.video_review,
      footer: footer_data.data.attributes.Footer

      }
    }
}


export default index;
