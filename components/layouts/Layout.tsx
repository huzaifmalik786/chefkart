import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  children: React.ReactNode;
  title?: string;
  header: {
    nav_links: [],
    button: {
      button_text: string;
    }
    avatar: image_type
  }
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

const Layout: React.FC<Props> = ({ children, title = "Chefkart", header, footer }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header data={header} />
      <main style={{ width: "100vw" }}>{children}</main>
      <Footer data={footer} />
    </div>
  );
};

export default Layout;
