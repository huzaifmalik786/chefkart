import React from "react";
import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import Recomended from "../../components/blogs/Recomended";

import Layout from "../../components/layouts/Layout";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <BlogHero />
      <AllBlogs />
      <Recomended />
    </Layout>
  );
};

export default index;
