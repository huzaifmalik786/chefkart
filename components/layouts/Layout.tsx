import React, { useState } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { Header_type, image_type } from "../../interfaces/interfaces";
import { ModalContext } from "../ModalContext";
import Modal from "../careers/Modal";
import ThankYou from "../Forms/ThankYou";

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
};

const Layout: React.FC<Props> = ({ children, title = "Chefkart", header, footer }) => {
  const [showModal,setShowModal]= useState<boolean>(false);
  console.log(header)

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
      setModalOpen: (open: boolean) => setShowModal(open)}}>
        {
        showModal && <Modal openModal={showModal} setOpenModal={setShowModal}><ThankYou /></Modal>
      }
        {children}
        </ModalContext.Provider>
      </main>
      <Footer data={footer} />
    </div>
  );
};

export default Layout;
