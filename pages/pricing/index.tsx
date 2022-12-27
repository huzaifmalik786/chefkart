import React from "react";
import FAQ from "../../components/FAQ";
import BookTrial from "../../components/homepage/BookTrial";
import Layout from "../../components/layouts/Layout";
import Features from "../../components/pricing/Features";
import PricingBanner from "../../components/pricing/PricingBanner";
import PricingSignUp from "../../components/pricing/PricingSignUp";
import ProjectFeatures from "../../components/pricing/ProjectFeatures";
import RestaurantLike from "../../components/pricing/RestaurantLike";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <PricingBanner />
      <Features />
      <ProjectFeatures />
      <RestaurantLike />
      <PricingSignUp />
      <FAQ />

      <BookTrial />
    </Layout>
  );
};

export default index;
