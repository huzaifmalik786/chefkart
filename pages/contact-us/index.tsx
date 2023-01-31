import { GetStaticProps } from 'next'
import React from 'react'
import ContactBanner from '../../components/contact-us/ContactBanner'
import Map from '../../components/contact-us/Map'
import Story from '../../components/contact-us/Story'
import Layout from '../../components/layouts/Layout'
import { image_type } from '../../interfaces/interfaces'

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
    banner_heading: string;
    banner_img: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
    form_heading: string;
  }
}

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
        <ContactBanner data={props.banner} />
        <Map />
        <Story />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact?populate=deep,10`
  );
  const contact_data = await res2.json()
  return {
    props: {
      header: header_data.data.attributes.header,

      banner: {
        banner_heading: contact_data.data.attributes.banner_heading,
        banner_img: contact_data.data.attributes.contact_banner_img,
        form_heading: contact_data.data.attributes.form_heading
      },
      footer: footer_data.data.attributes.Footer

    }
  }
}

export default index