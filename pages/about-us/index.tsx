import React from 'react'
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
import { image_type, ProfileCardType } from '../../interfaces/interfaces'

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
    badge: string;
        description: string;
        heading: {
            text: string;
            highlight: string;
        }[]
        
        button: string;
        image_front: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        },
        image_back: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        }
  },
  facts: {
    heading: string,
    description: string
  }[]

  founders: {
    heading: {
      text: string;
      highlight: boolean;
    }[]

    array: ProfileCardType[]
  }

  form: {
    url: string;
    alternativeText: string;
  }

  social: {
    heading: string;
    icons: {
      icon: image_type
    }[]
  }


}

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
        <Hero data={props.banner} />
        <Vision />
        <Mission />
        <Facts data={props.facts} bgcolor='#2D4739' color='#ffffff' px="4.44vw" py="5.55vw" />
        <Founder data={props.founders} />
        <Gallery />
        <ContactForm data={props.form} />
        <Social data={props.social} />
    </Layout>
  )
}

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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about?populate=deep,10`);
    const about_data = await res2.json();

    return {
      props : {
        header: header_data.data.attributes.header,
        banner: {
          badge: about_data.data.attributes.badge,
          heading_temp: about_data.data.attributes.heading,
          description: about_data.data.attributes.description,
          button: about_data.data.attributes.button.button_text,
          image_front: about_data.data.attributes.image_front,
          image_back: about_data.data.attributes.image_back
        },
        facts: about_data.data.attributes.facts,
        founders: {
          heading: about_data.data.attributes.founder.heading,
          array: about_data.data.attributes.profile
        },
        form: about_data.data.attributes.form_image.data.attributes,
        social: {
          heading: about_data.data.attributes.social_heading,
          icons: about_data.data.attributes.icons
        } ,
      footer: footer_data.data.attributes.Footer

      }
    }
}

export default index