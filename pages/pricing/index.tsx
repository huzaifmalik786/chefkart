import React from "react";
import BookTrial from "../../components/homepage/BookTrial";
import Layout from "../../components/layouts/Layout";
import PricingBanner from "../../components/pricing/PricingBanner";
import PricingSignUp from "../../components/pricing/PricingSignUp";
import RestaurantLike from "../../components/pricing/RestaurantLike";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <PricingBanner />
      <RestaurantLike />
      <PricingSignUp />

      <BookTrial />
    </Layout>
  );
};

export default index;
