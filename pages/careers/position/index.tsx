import { GetStaticProps } from "next";
import React from "react";
import PositionPage from "../../../components/careers/PositionPage";
import Layout from "../../../components/layouts/Layout";
import { image_type } from "../../../interfaces/interfaces";
import Reveal from "../../../components/Reveal";

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
};

const index = (props: Props) => {
  return (
    <Layout header={props.header} footer={props.footer}>
      <PositionPage />
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

    return {
      props : {
        header: header_data.data.attributes.header,
      footer: footer_data.data.attributes.Footer

      }
    }
}


export default index;
