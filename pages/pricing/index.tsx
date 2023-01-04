import React from "react";
import FAQ from "../../components/FAQ";
import BookTrial from "../../components/homepage/BookTrial";
import Layout from "../../components/layouts/Layout";
import Features from "../../components/pricing/Features";
import Hygiene from "../../components/Hygiene";
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
      <Hygiene
        subheading=""
        heading="We assure you of the best hygiene"
        main_desc="At Chefkart, we are truly committed to"
        sub_desc="simplifying the way India eats."
      />
      <ProjectFeatures />
      <RestaurantLike />
      <PricingSignUp />
      <FAQ />

      <BookTrial />
    </Layout>
  );
};

export default index;
