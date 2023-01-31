import React from "react";
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
import { BlogCardType, image_type, investor_type } from "../../interfaces/interfaces";

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
      highlight: boolean;
    }[]
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
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
    <Layout header={props.header} footer={props.footer}>
      <InvestorHero data={props.banner} />
      <Mission data={props.mission} />
      <PressRelease data={props.press_data} />
      <BlogsSection data={props.blogs} />
      <InvestorCarousel data={props.investors} />
      <ContactForm data={props.form} />
      <Banner data={props.last_banner} />
      <Divider />
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/investor-relation?populate=deep,10`);
    const investor_relation = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,

        banner:{
            heading: investor_relation.data.attributes.banner_heading,
            image: investor_relation.data.attributes.banner_img,
        },
        mission: investor_relation.data.attributes.Facts,

        press_data: {
          heading: investor_relation.data.attributes.press_heading,
          news: investor_relation.data.attributes.news
        },
        blogs: {
          heading: investor_relation.data.attributes.blog_heading,
          blogs_array: investor_relation.data.attributes.blogs
        },

        investors: investor_relation.data.attributes.our_investor,
        form: investor_relation.data.attributes.form_banner,
        last_banner: {
          heading: investor_relation.data.attributes.ending_banner_heading,
          img: investor_relation.data.attributes.last_banner_img
        },
        footer: footer_data.data.attributes.Footer

      }
    }
}

export default index;
