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
import { GetServerSideProps } from "next";


const index = () => {
  return (
    <Layout>
      <PricingBanner />
      <Features />
      <Hygiene
        subheading=""
        heading="WE ASSURE YOU OF THE BEST HYGIENE"
        description="At Chefkart, we are truly committed to"
        colored_text="simplifying the way India eats."
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
