import React from "react";
import CareersHero from "../../components/careers/CareersHero";

import Culture from "../../components/careers/Culture";
import EndCarousel from "../../components/careers/EndCarousel";
import FeaturedArticle from "../../components/careers/FeaturedArticle";

import Founders from "../../components/careers/Founders";
import Leadership from "../../components/careers/Leadership";
import Perks from "../../components/careers/Perks";
import Vacancies from "../../components/careers/Vacancies";
import Divider from "../../components/divider";
import JoinOurTeam from "../../components/Forms/JoinOurTeam";

import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout title="Careers">
      <CareersHero />
      <Culture />
      <Perks />
      <Vacancies />
      <FeaturedArticle />
      <Founders />
      <Leadership />
      <EndCarousel />
      <Divider />
    </Layout>
  );
};

export default index;
