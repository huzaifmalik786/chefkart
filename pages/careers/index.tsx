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
import { blogType, CultureCardType, Footer_type, Header_type, image_type, ProfileCardType } from "../../interfaces/interfaces";
import Reveal from "../../components/Reveal";

type Props = {
  header: Header_type
  footer: Footer_type
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
    button: string;
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
      <Reveal>
      <Culture data={props.culture}  />
      </Reveal>
      <Reveal>
      <Perks data={props.perks} />
      </Reveal>
      <Reveal>
      <Vacancies data={props.vacancy} />
      </Reveal>
      <Reveal>
      <FeaturedArticle data={props.articles} />
      </Reveal>
      <Reveal>
      <Founders data={props.founders} />
      </Reveal>
      <Reveal>
      <Leadership data={props.leaders} />
      </Reveal>
      <Reveal>
      <EndCarousel data={props.end_carousel}  />
      </Reveal>
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

  // const temp_res = await fetch('http://localhost:1337/api/career?populate=deep,10')
  // const temp = await temp_res.json();

    return {
      props : {
        header: header_data.data.attributes,
        banner: career.data.attributes.banner,
        culture: career.data.attributes.culture,
        founders: {
          heading: career.data.attributes.founder.heading,
          profile: career.data.attributes.profile
        },
        perks: career.data.attributes.Perks,
        vacancy: {
          header_data: career.data.attributes.vacancies,
          all_openings: career.data.attributes.job_openings.data,
          button: career.data.attributes.apply_button_text
        },
        articles:{
          heading: career.data.attributes.article_heading,
          array: career.data.attributes.aticles?.blog_pages?.data,
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
