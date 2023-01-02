import React from "react";
import CareersHero from "../../components/careers/CareersHero";

import Culture from "../../components/careers/Culture";
import FeaturedArticle from "../../components/careers/FeaturedArticle";

import Founders from "../../components/careers/Founders";
import Leadership from "../../components/careers/Leadership";
import Perks from "../../components/careers/Perks";
import Vacancies from "../../components/careers/Vacancies";

import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout title="Careers">
      <CareersHero />
      <Perks />
      <Vacancies />
      <Founders />
      <Leadership />
      <Culture />
      <FeaturedArticle />
    </Layout>
  );
};

export default index;
