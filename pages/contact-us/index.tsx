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
  faq:{
    heading : string;
    Question_answer: QUESTIONS[]
  }
}

const index = (props: Props) => {

  const [showModal,setShowModal]= useState(false);
  return (
    <Layout header={props.header} footer={props.footer}>
      {
        showModal && <Modal openModal={showModal} setOpenModal={setShowModal}><ThankYou /></Modal>
      }
      <ModalContext.Provider value={{ 
            setModalOpen: (open: boolean) => setShowModal(open)}}>
        <ContactBanner data={props.banner}/>
      </ModalContext.Provider>
        <Map />
        <Story />
        <Reveal>
        <FAQ data={props.faq} />
        </Reveal>
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
      faq: contact_data.data.attributes.faq,
      footer: footer_data.data.attributes.Footer

    }
  }
}

export default index