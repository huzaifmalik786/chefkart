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
import { features_icon, Footer_type, Header_type, image_type, PriceCard, QUESTIONS, table_content } from "../../interfaces/interfaces";
import UseWindowDimensions from "../../components/WindowSize";
import Reveal from "../../components/Reveal";
import HowChefkartWorks from "../../components/homepage/HowChefkartWorks";

type Props = {
  header: Header_type
  footer: Footer_type

  banner: {
    heading: {
      text: string;
      highlight: boolean
    }[]
    description: {
      text: string
      highlight: boolean
    }[]
    image : image_type
    mobile_banner_image : image_type
    button: {
      button_text: string;
    }

  }
  contactForm: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
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
  banner_CTA: string;
 

  cards: PriceCard[]

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
    
    video: {
      data: {
        attributes: {
          url: string;
        }
      }
    }

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
      <PricingBanner data={props.banner} cards={props.cards} form={props.contactForm} thankYou={props.thank_you} />
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
      <HowChefkartWorks data={props.how_it_works} />
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
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/chef-for-party?populate=deep,10`);
    const pricing_data = await res2.json();

    return {
      props : {
        header: header_data.data.attributes,

        banner : pricing_data.data.attributes.banner,
        // banner_CTA: pricing_data.data.attributes.banner_CTA,
        cards: pricing_data?.data?.attributes?.pricing_cards,
        affordable_price: pricing_data.data.attributes.factors,
        hygiene: pricing_data.data.attributes.hygiene,
        features: pricing_data.data.attributes.project_feature,
        restaurant: pricing_data.data.attributes.banner_2,
        pricing_signup: pricing_data.data.attributes.banner_3,
        faq: pricing_data.data.attributes.FAQs,
        how_it_works: pricing_data.data.attributes?.Chefcart_works,
        book_trial: pricing_data.data.attributes.ending_banner,
        contactForm: pricing_data.data.attributes.form,

        thank_you: pricing_data.data.attributes.thank_you_modal,
        footer: footer_data.data.attributes.Footer

      }
    }
}


export default index;
