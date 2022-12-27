import React from "react";
import FAQ from "../../components/FAQ";
import Chef from "../../components/join-as-chef/Chef";
import CookWithUs from "../../components/join-as-chef/CookWithUs";
import JoinHeroCarousel from "../../components/join-as-chef/JoinHeroCarousel";
import SimplifyWay from "../../components/join-as-chef/SimplifyWay";
import VideoComponent from "../../components/join-as-chef/VideoComponent";
import Layout from "../../components/layouts/Layout";
import Testimonial from "../../components/Testimonial";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <JoinHeroCarousel />
      <CookWithUs />
      <VideoComponent />
      <Testimonial />
      <Chef />
      <SimplifyWay />
      <FAQ />
    </Layout>
  );
};

export default index;
