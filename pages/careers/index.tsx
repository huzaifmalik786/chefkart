import React from "react";
import CareersHero from "../../components/careers/CareersHero";
import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <CareersHero />
    </Layout>
  );
};

export default index;
