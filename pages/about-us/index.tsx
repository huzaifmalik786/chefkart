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
// import HowChefkartWorks from '../../components/homepage/HowChefkartWorks'

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

    button: {
      text: string;
      url: string;
    };
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

  form_image: {
    url: string;
    alternativeText: string;
  };
form: {
  heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
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
// how_it_works: {
//   brief: {
//     heading: string;
//     description: string;
//   }
//   steps:{
//     text: string;
//     image: image_type
//   }[]
//   download_icon: {
//     icon: image_type
//   }[]
// },
  social: {
    heading: string;
    icons: {
      icon: image_type;
    }[];
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
};

const index = (props: Props) => {

  const { width } = UseWindowDimensions();
  return (
    <Layout header={props.header} footer={props.footer} thankYou={props.thank_you}>
        <Hero data={props.banner} form={props.contactForm} thankYou={props.thank_you}/>
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
        <Gallery data={props.gallery} />
        </Reveal>
        <Reveal>
        <ContactForm data={props.form_image} form={props.form} /> 
        </Reveal>
        {/* <Reveal>
          <HowChefkartWorks data={props.how_it_works} />
      </Reveal> */}
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
  const res4 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/chef-for-party?populate=deep,10`);
    const pricing_data = await res4.json();

  // const temp_res = await fetch(
  //   `http://localhost:1337/api/about?populate=deep,10`
  // );
  // const temp = await temp_res.json()

  return {
    props: {
      header: header_data.data.attributes,
      banner: {
        badge: about_data.data?.attributes?.badge,
        heading: about_data?.data?.attributes?.heading,
        description: about_data?.data?.attributes?.description,
        button: about_data.data?.attributes?.button,
        image_front: about_data.data?.attributes?.image_front,
        image_back: about_data.data?.attributes?.image_back,
      },
      contactForm: pricing_data.data.attributes.form,
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
      form_image: about_data.data?.attributes?.form_image?.data?.attributes,
      form: about_data.data?.attributes?.contact_form,
      // how_it_works: about_data.data.attributes?.Chefcart_works,

      social: {
        heading: about_data.data?.attributes?.social_heading,
        icons: about_data.data.attributes.icons,
      },
      thank_you: about_data.data.attributes.thank_you,
      footer: footer_data.data.attributes.Footer,
    },
  };
};

export default index;
