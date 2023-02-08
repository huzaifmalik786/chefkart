import React from "react";
import FAQ from "../../components/FAQ";
import BookTrial from "../../components/homepage/BookTrial";
import Layout from "../../components/layouts/Layout";
import Features from "../../components/pricing/Features";
import Hygiene from "../../components/Hygiene";
import PricingBanner from "../../components/pricing/PricingBanner";
import PricingSignUp from "../../components/pricing/PricingSignUp";
import ProjectFeatures from "../../components/pricing/ProjectFeatures";
import RestaurantLike from "../../components/pricing/RestaurantLike";
import { GetServerSideProps, GetStaticProps } from "next";
import { features_icon, image_type, QUESTIONS, table_content } from "../../interfaces/interfaces";
import UseWindowDimensions from "../../components/WindowSize";
import Reveal from "../../components/Reveal";

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
    heading: {
      text: string;
      highlight: boolean
    }[]
    description: {
      text: string
      highlight: boolean
    }[]
    image : {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
  }

  affordable_price: {
    subheading: string;
    heading: {
        text: string;
        highlight: boolean;
    }[]
    factors: features_icon[]
  }
  hygiene: {
    heading: string;
    subheading: string;
    description: {
      text: string;
      highlight: string;
    }[]

  }

  features : {
    subheading: string;
        heading: string;
        feature_col_heading: string;
        popular_col_heading: string;
        premium_col_heading: string;
        features: table_content[];
        button: {
            button_text: string;
        }
  }

  restaurant : {
    heading: {
      text: string;
      highlight: boolean;

    }[]
    description: {
      text: string;
      highlight: boolean;
    }[]

    button: {
      button_text: string;
    }
    image:{
      data:{
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }

  pricing_signup:{
    heading: {
      text: string;
      highlight: boolean;

    }[]
    
    button: {
      button_text: string;
    }
    image:{
      data:{
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }

  faq:{
    heading : string;
    Question_answer: QUESTIONS[]
  }

  book_trial: {
    heading: string;
    subheading: string;
    button: {
      button_text: string;
    }
    image: {
      data: {
        attributes : {
          url: string;
          alternativeText: string;
        }
      }
    }
  }
}

const index = (props: Props) => {
  const {width}= UseWindowDimensions();
  return (
    <Layout header={props.header} footer={props.footer}>
      <PricingBanner data={props.banner} />
      <Reveal>
      <Features data={props.affordable_price} />
      </Reveal>
      <Hygiene
        data={props.hygiene}
        subheading=""
        heading="WE ASSURE YOU OF THE BEST HYGIENE"
        description="At Chefkart, we are truly committed to"
        colored_text="simplifying the way India eats."
        center={width<=450?true:false}
        fontweight={width<=450?"400":""}
        descsize={width<=450?"3.89vw":""}
      />
      <ProjectFeatures data={props.features} />
      <Reveal>
      <RestaurantLike data={props.restaurant} />
      </Reveal>
      <Reveal>
      <PricingSignUp data={props.pricing_signup} />
      </Reveal>
      <Reveal>
      <FAQ data={props.faq} />
      </Reveal>
      <Reveal>
      <BookTrial data={props.book_trial} py={width<=450?"15vw":""}/>
      </Reveal>
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/monthly-subscription?populate=deep,10`);
    const pricing_data = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,

        banner : pricing_data.data.attributes.banner,
        affordable_price: pricing_data.data.attributes.factors,
        hygiene: pricing_data.data.attributes.hygiene,
        features: pricing_data.data.attributes.project_feature,
        restaurant: pricing_data.data.attributes.banner_2,
        pricing_signup: pricing_data.data.attributes.banner_3,
        faq: pricing_data.data.attributes.FAQs,
        book_trial: pricing_data.data.attributes.ending_banner,
        footer: footer_data.data.attributes.Footer

      }
    }
}


export default index;
