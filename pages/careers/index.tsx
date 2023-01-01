import React from "react";
import CareersHero from "../../components/careers/CareersHero";
import Culture from "../../components/careers/Culture";
import FeaturedArticle from "../../components/careers/FeaturedArticle";
import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout title="Careers">
      <CareersHero />
      <Culture />
      <FeaturedArticle />
    </Layout>
  );
};

export default index;
