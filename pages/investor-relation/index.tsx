import React from "react";
import Divider from "../../components/Divider";
import Banner from "../../components/investor-relation/Banner";
import ContactForm from "../../components/investor-relation/ContactForm";
import Mission from "../../components/investor-relation/Mission";
import PressRelease from "../../components/investor-relation/PressRelease";
import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return(
    <Layout>
      <Mission />
      <PressRelease />
      <ContactForm />
      <Banner />
      <Divider />
    </Layout>
  )
};

export default index;
