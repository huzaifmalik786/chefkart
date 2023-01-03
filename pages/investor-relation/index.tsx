import React from "react";
import BlogsSection from "../../components/investor-relation/BlogsSection";
import InvestorCarousel from "../../components/investor-relation/InvestorCarousel";
import InvestorHero from "../../components/investor-relation/InvestorHero";

import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <InvestorHero />
      <BlogsSection />
      <InvestorCarousel />
    </Layout>
  );
};

export default index;
