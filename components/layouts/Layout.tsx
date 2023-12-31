import React, { useState } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { Header_type, image_type } from "../../interfaces/interfaces";
import { ModalContext } from "../ModalContext";
import Modal from "../careers/Modal";
import ThankYou from "../Forms/ThankYou";
import SignupForm from "../Forms/SignupForm";

type Props = {
  children: React.ReactNode;
  title?: string;
  header: Header_type
  footer: {
    social_heading: string;
    get_app_heading: string;
    copyright_text: string;

    logo: {
      name: string;
      url: string;
      image: {
        data: {
          attributes: {
            url: string;
            alternativeText: string;
          }
        }[]
      }
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

  sign_up_form?: {
    heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
      terms_condition_check: string;

  }
  thankYou?: {
    heading: string;
    subheading: string;
    link: {
      text: string;
      url: string;
    }
    icon: image_type
  }
};

const Layout: React.FC<Props> = ({ children, title = "Chefkart", header, footer, sign_up_form, thankYou }) => {
  const [showModal,setShowModal]= useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [secondModal, setSecondModal] = useState<boolean>(false);
  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed);
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Header data={header} />

      <main style={{ width: "100vw" }}>
      <ModalContext.Provider value={{ 
      setModalOpen: (open: boolean) => setShowModal(open),
      setSecondModal: (open:boolean)=>setOpenModal(open)}}>
      {
        thankYou && showModal && <Modal openModal={showModal} setOpenModal={setShowModal} hidebutton={true}><ThankYou data={thankYou} closeModal={setShowModal}/></Modal>
      }
      {
        thankYou && secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal}><ThankYou data={thankYou} closeModal={setSecondModal}/></Modal>
      }
      
      {
       sign_up_form && openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><SignupForm form={sign_up_form} setOpenModal={handlemodalClosed} closeModal={setOpenModal} openModal={openModal} /></Modal>
      }
        {children}
        </ModalContext.Provider>

      </main>
      <Footer data={footer} />
    </div>
  );
};

export default Layout;
