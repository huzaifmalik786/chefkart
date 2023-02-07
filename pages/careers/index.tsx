import { GetStaticProps } from "next";
import React from "react";
import CareersHero from "../../components/careers/CareersHero";

import Culture from "../../components/careers/Culture";
import EndCarousel from "../../components/careers/EndCarousel";
import FeaturedArticle from "../../components/careers/FeaturedArticle";

import Founders from "../../components/careers/Founders";
import Leadership from "../../components/careers/Leadership";
import Perks from "../../components/careers/Perks";
import Vacancies from "../../components/careers/Vacancies";
import Divider from "../../components/Divider";
import JoinOurTeam from "../../components/Forms/JoinOurTeam";

import Layout from "../../components/layouts/Layout";
import { blogType, CultureCardType, image_type, ProfileCardType } from "../../interfaces/interfaces";

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
    heading: string
    description: string;
    button_text: string;
    images: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }[]
    }
  }
  culture: {
    heading: string;
    description: string;
    culture_cards: CultureCardType[]
  }
  perks: {
    heading: string;
        subheading: string;
        perks: {
          image: image_type;
          text: string;
        }[]
  }
  vacancy: {
    header_data: {
      heading: string;
      description: string;
      opening_heading: string;
      viewAll: string;
    }
    all_openings: {
      attributes: {
        Position: string;
        subheading: string;
        location: string;
        department: string;
        slug: string;

      }
    }[]
  }
  articles: {
    heading: string;
    array: blogType[]
  }
  founders: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
  
    profile: ProfileCardType[]

  }
  leaders: {
    heading: string;
    array: ProfileCardType[]
  }
  end_carousel: {
    heading: string;
    description: string;
    carousel: {
      heading: string;
      badge: string;
      image: image_type;
    }[]

  }
};

const index = (props: Props) => {
  return (
    <Layout title="Careers" header={props.header} footer={props.footer}>
      <CareersHero data={props.banner} />
      <Culture data={props.culture}  />
      <Perks data={props.perks} />
      <Vacancies data={props.vacancy} />
      <FeaturedArticle data={props.articles} />
      <Founders data={props.founders} />
      <Leadership data={props.leaders} />
      <EndCarousel data={props.end_carousel}  />
      <Divider />
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/career?populate=deep,10`);
    const career = await res2.json();

  const temp_res = await fetch('http://localhost:1337/api/career?populate=deep,10')
  const temp = await temp_res.json();

    return {
      props : {
        header: header_data.data.attributes.header,
        banner: career.data.attributes.banner,
        culture: career.data.attributes.culture,
        founders: {
          heading: career.data.attributes.founder.heading,
          profile: career.data.attributes.profile
        },
        perks: career.data.attributes.Perks,
        vacancy: {
          header_data: career.data.attributes.vacancies,
          all_openings: temp.data.attributes.job_openings.data
        },
        articles:{
          heading: career.data.attributes.article_heading,
          array:career.data.attributes.aticles, 
        } ,
        leaders: {
          heading: career.data.attributes.leadership_heading,
          array: career.data.attributes.leaders_profile
        },
        end_carousel: career.data.attributes.carousel,

      footer: footer_data.data.attributes.Footer

      }
    }
  }
export default index;
