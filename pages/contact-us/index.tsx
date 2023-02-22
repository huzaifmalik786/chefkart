import { GetStaticProps } from 'next'
import React,{createContext, useState} from 'react'
import ContactBanner from '../../components/contact-us/ContactBanner'
import Map from '../../components/contact-us/Map'
import Story from '../../components/contact-us/Story'
import Layout from '../../components/layouts/Layout'
import FAQ from "../../components/FAQ";
import { Footer_type, Header_type, image_type, QUESTIONS } from '../../interfaces/interfaces'
import Reveal from '../../components/Reveal'
import Modal from '../../components/careers/Modal'
import ThankYou from '../../components/Forms/ThankYou'
import { ModalContext } from '../../components/ModalContext'

// type contextprops={
//   showModal: boolean;
//   setShowopen: (open: boolean) => void;
  
// }
// const contextDefaultValues: contextprops = {
//   // showModal: false,
//   setShowopen: () => {}
// };
// export const ModalContext= createContext<contextprops>({});


type Props = {
  header: Header_type
  footer: Footer_type
  banner: {
    banner_heading: string;
    banner_img: image_type;
    mobile_banner_image: image_type;

  }
  form: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
  };
  stories: {
    description: {
      text: string;
      highlight: boolean;
    }[]

    image: image_type
  }[]
  read_more: {
    text: string;
    url: string;
  }
  faq:{
    heading : string;
    Question_answer: QUESTIONS[]
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
}

const index = (props: Props) => {

  return (
    <Layout header={props.header} footer={props.footer} thankYou={props.thank_you}>
        <ContactBanner data={props.banner} form={props.form} />
      
        <Map />
        <Story data={props.stories} link={props.read_more} />
        <Reveal>
        <FAQ data={props.faq} />
        </Reveal>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`)
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact?populate=deep,10`
  );
  const contact_data = await res2.json()

  // const temp_res = await fetch(
  //   `http://localhost:1337/api/contact?populate=deep,10`
  // );
  // const temp = await temp_res.json()
  return {
    props: {
      header: header_data.data.attributes,

      banner: {
        banner_heading: contact_data.data.attributes.banner_heading,
        banner_img: contact_data.data.attributes.contact_banner_img,
        mobile_banner_image: contact_data.data.attributes.mobile_banner_image,
        form_heading: contact_data.data.attributes.form_heading
      },
      form: contact_data.data.attributes.contact_form,
      stories: contact_data.data.attributes.stories,
      read_more: contact_data.data.attributes.read_more,
      faq: contact_data.data.attributes.faq,
      footer: footer_data.data.attributes.Footer,
      thank_you: contact_data.data.attributes.thank_you

    }
  }
}

export default index