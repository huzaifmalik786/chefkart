import React from "react";
import Divider from "../../components/Divider";
import Layout from "../../components/layouts/Layout";
import HeroVideo from "../../components/testimonials/HeroVideo";
import OurWord from "../../components/testimonials/OurWord";
import UserReviews from "../../components/testimonials/UserReviews";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <HeroVideo />
      <OurWord />
      <UserReviews />
      <Divider />
    </Layout>
  );
};

export default index;
