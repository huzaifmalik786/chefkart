import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = "Chefkart" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main style={{ width: "100vw" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
