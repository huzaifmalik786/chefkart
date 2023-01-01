import React from "react";
import CareersHero from "../../components/careers/CareersHero";
import Founders from "../../components/careers/Founders";
import Leadership from "../../components/careers/Leadership";
import Perks from "../../components/careers/Perks";
import Vacancies from "../../components/careers/Vacancies";
import JoinOurTeam from "../../components/Forms/JoinOurTeam";
import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <CareersHero />
      <Perks />
      <Vacancies />
      <Founders />
      <Leadership />
    </Layout>
  );
};

export default index;
