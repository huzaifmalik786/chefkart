import React from "react";
import FAQ from "../../components/FAQ";
import Chef from "../../components/join-as-chef/Chef";
import SimplifyWay from "../../components/join-as-chef/SimplifyWay";
import VideoComponent from "../../components/join-as-chef/VideoComponent";
import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <VideoComponent />
      <Chef />
      <SimplifyWay />
    </Layout>
  );
};

export default index;
