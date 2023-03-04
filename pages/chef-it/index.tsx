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
import { Footer_type, Header_type, image_type, QUESTIONS } from "../../interfaces/interfaces";
import UseWindowDimensions from "../../components/WindowSize";
import Reveal from "../../components/Reveal";
import HowChefkartWorks from "../../components/homepage/HowChefkartWorks";

type Props = {
  header: Header_type
  footer: Footer_type

  banner_slider: {
    image: image_type
    mobile_banner_image: image_type

    
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
  apply_here: {
    subheading: string;
    heading: string;
    link_text: string;
    apply_link: {
      text: string;
      url: string;
    }
    button: {
      button_text: string;
    }
    image: image_type
  }
  join_us: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    description: string;
  }
  faq: {
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
  form: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
      terms_condition_check: string;
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
};

const index = (props: Props) => {
  const {width}= UseWindowDimensions();
  return (
    <Layout header={props.header} footer={props.footer} sign_up_form={props.form} thankYou={props.thank_you} >
      <JoinHeroCarousel data={props.banner_slider} form={props.form} thankYou={props.thank_you}  />
      <Reveal>
      <Metrics data={props.metrics} />
      </Reveal>
      <CookWithUs data={props.cook} />
      <div style={width<=450?{background:"#EEEFF2",padding: "10vw 3.33vw",paddingBottom:"12.78vw"}:{}}>
      <Reveal>
      <VideoComponent data={props.review} />
      </Reveal>
      <Reveal>
      <Testimonial data={props.testimonies} />
      </Reveal>
      <Reveal>
      <Chef data={props.apply_here} />
      </Reveal>
      </div>
      <Reveal>
      <div style={width<=450?{display:"none"}:{}}>
      <SimplifyWay data={props.join_us} />
      </div>
      </Reveal>
      <Reveal>
        <HowChefkartWorks data={props.how_it_works} />

      </Reveal>
      <Reveal>
      <FAQ data={props.faq} />
      </Reveal>
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/chef-it?populate=deep,10`);
    const join_chef = await res2.json();

    // const temp_res = await fetch(
    //   `http://localhost:1337/api/join-as-chef?populate=deep,10`
    // );
    // const temp = await temp_res.json()

    return {
      props : {
        header: header_data.data.attributes,
        banner_slider: join_chef.data.attributes.banner_slider,
        form: join_chef.data.attributes.sign_up,
        metrics: join_chef.data.attributes.Metrics,
        cook: join_chef.data.attributes.why_us,
        review: join_chef.data.attributes.review,
        testimonies: join_chef.data.attributes.testimonial_carousel,
        apply_here: join_chef.data.attributes.Apply,
        
        join_us: {
          heading: join_chef.data.attributes.join_us_heading,
          description: join_chef.data.attributes.description
        },
        faq: join_chef.data.attributes.FAQ,
        how_it_works: join_chef.data.attributes?.Chefcart_works,
      footer: footer_data.data.attributes.Footer,
      thank_you: join_chef.data.attributes.thank_you_modal
      }
    }
  }
export default index;
