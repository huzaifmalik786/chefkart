import React,{useState} from "react";
import Divider from "../../components/Divider";
import Banner from "../../components/investor-relation/Banner";
import ContactForm from "../../components/investor-relation/ContactForm";
import Mission from "../../components/investor-relation/Mission";
import PressRelease from "../../components/investor-relation/PressRelease";
import BlogsSection from "../../components/investor-relation/BlogsSection";
import InvestorCarousel from "../../components/investor-relation/InvestorCarousel";
import InvestorHero from "../../components/investor-relation/InvestorHero";

import Layout from "../../components/layouts/Layout";
import { GetStaticProps } from "next";
import { BlogCardType, Footer_type, Header_type, image_type, investor_type } from "../../interfaces/interfaces";
import Reveal from "../../components/Reveal";
import HowChefkartWorks from "../../components/homepage/HowChefkartWorks";


type Props = {
  header: Header_type
  footer: Footer_type
  banner: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    image: image_type
    mobile_banner_image: image_type
  }
  mission: {
    subheading: string;
    heading : {
      text: string;
      highlight: boolean;
    }[]
    Link: {
      text: string;
      url: string;
    }
    Facts: {
      heading: string;
      description: string;
    }[]
  }
  press_data: {
    heading: string;
        news: {
          date: string;
          news: {
          text: string;
          url: string;
        }
        }[]
  }
  blogs: {
    heading: string;
    blogs_array: BlogCardType[]
  }
  investors: investor_type[]
  form: {
    form_heading: string;
    banner_heading: {
      text: string;
      highlight: boolean;
    }[]
    banner_image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
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
  form_data: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
  };
  thank_you: {
    heading: string;
    subheading: string;
    link: {
      text: string;
      url: string;
    }
    icon: image_type
  }
  last_banner: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    img: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }
};

const index = (props: Props) => {
  return(
    <Layout header={props.header} footer={props.footer} thankYou={props.thank_you}>
      
      <InvestorHero data={props.banner} />
      <Reveal>
      <Mission data={props.mission} />
      </Reveal>

      <Reveal>
      <PressRelease data={props.press_data} />
      </Reveal>

      <Reveal>
      <BlogsSection data={props.blogs} />
      </Reveal>

      <Reveal>
      <InvestorCarousel data={props.investors} />
      </Reveal>

      <Reveal>
      <ContactForm data={props.form} form={props.form_data} />
      </Reveal>
      <Reveal>
      <HowChefkartWorks data={props.how_it_works} />
      </Reveal>
      <Reveal>
      <Banner data={props.last_banner} />
      </Reveal>
      <Divider />
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/investor-relation?populate=deep,10`);
    const investor_relation = await res2.json();

    // const temp_res = await fetch(
    //   `http://localhost:1337/api/investor-relation?populate=deep,10`
    // );
    // const temp = await temp_res.json()

    return {
      props : {
        header: header_data.data.attributes,

        banner:{
            heading: investor_relation.data.attributes.banner_heading,
            image: investor_relation.data.attributes.banner_img,
            mobile_banner_image: investor_relation.data.attributes.mobile_banner_image
        },
        mission: investor_relation.data.attributes.Facts,

        press_data: {
          heading: investor_relation.data.attributes.press_heading,
          news: investor_relation.data.attributes.news
        },
        blogs: {
          heading: investor_relation.data.attributes.blog_heading,
          blogs_array: investor_relation.data.attributes.blog_pages.data
        },

        investors: investor_relation.data.attributes.our_investor,
        form: investor_relation.data.attributes.form_banner,
        form_data: investor_relation.data.attributes.contact_form,
        how_it_works: investor_relation.data.attributes?.Chefcart_works,

        last_banner: {
          heading: investor_relation.data.attributes.ending_banner_heading,
          img: investor_relation.data.attributes.last_banner_img
        },
        thank_you: investor_relation.data.attributes.thank_you,
        footer: footer_data.data.attributes.Footer

      }
    }
}

export default index;
