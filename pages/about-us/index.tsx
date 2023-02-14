import React,{useState} from 'react'
import Founder from '../../components/AboutUs/Founder'
import Hero from '../../components/AboutUs/Hero'
import Mission from '../../components/AboutUs/Mission'
import Vision from '../../components/AboutUs/Vision'
import ContactForm from '../../components/AboutUs/ContactForm'
import Facts from '../../components/homepage/Facts'
import Layout from '../../components/layouts/Layout'
import Social from '../../components/AboutUs/Social'
import Gallery from '../../components/AboutUs/Gallery'
import { GetStaticProps } from 'next'
import { Footer_type, Header_type, image_type, ProfileCardType } from '../../interfaces/interfaces'
import UseWindowDimensions from '../../components/WindowSize'
import Reveal from '../../components/Reveal'

type Props = {
  header: Header_type;
  footer: Footer_type;
  banner: {
    badge: string;
    description: string;
    heading: {
      text: string;
      highlight: string;
    }[];

    button: string;
    image_front: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    image_back: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
  vision: {
    subheading: string;
    heading: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  }[];
  facts: {
    heading: string;
    description: string;
  }[];

  gallery: {
    heading: string;
    videos: {
      attributes: {
        url: string;
      };
    }[];
  };

  founders: {
    heading: {
      text: string;
      highlight: boolean;
    }[];

    array: ProfileCardType[];
  };

  form: {
    url: string;
    alternativeText: string;
  };

  social: {
    heading: string;
    icons: {
      icon: image_type;
    }[];
  };
};

const index = (props: Props) => {

  const { width } = UseWindowDimensions();
  return (
    <Layout header={props.header} footer={props.footer}>
        <Hero data={props.banner} />
        <Reveal>
        <Vision data={props.vision} />
        </Reveal>
        <Reveal>
        <Facts data={props.facts} bgcolor='#2D4739' color='#ffffff' px="4.44vw" py={width<=450?"13vw":"5.55vw"} />
        </Reveal>
        <Reveal>
        <Founder data={props.founders} />
        </Reveal>
        <Reveal>
        <Gallery />
        </Reveal>
        <Reveal>
        <ContactForm data={props.form}/> 
        </Reveal>
        <Reveal>
        <Social data={props.social} />
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about?populate=deep,10`
  );
  const about_data = await res2.json();

  return {
    props: {
      header: header_data.data.attributes,
      banner: {
        badge: about_data.data.attributes.badge,
        heading: about_data.data.attributes.heading,
        description: about_data.data.attributes.description,
        button: about_data.data.attributes.button.button_text,
        image_front: about_data.data.attributes.image_front,
        image_back: about_data.data.attributes.image_back,
      },
      vision: about_data.data.attributes.vision,
      facts: about_data.data.attributes.facts,
      gallery: {
        heading: about_data.data.attributes.gallery_heading,
        videos: about_data.data.attributes.videos.data,
      },
      founders: {
        heading: about_data.data.attributes.founder.heading,
        array: about_data.data.attributes.profile,
      },
      form: about_data.data.attributes.form_image.data.attributes,
      social: {
        heading: about_data.data.attributes.social_heading,
        icons: about_data.data.attributes.icons,
      },
      footer: footer_data.data.attributes.Footer,
    },
  };
};

export default index;
