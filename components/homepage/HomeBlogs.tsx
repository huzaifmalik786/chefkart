import React from "react";
import BlogArticleCarousel from "../BlogArticleCarousel";
import Styles from "../../styles/components/homepage/homeblogs.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const HomeBlogs = (props: Props) => {
  const router = useRouter();
  return (
    <div className={Styles.blogs_wrapper}>
      <div className={Styles.header}>
        <p>Blogs</p>
        <h3>Cusines worth travelling, now {"\n"} at your fingertips</h3>
      </div>
      <div>
        <BlogArticleCarousel />
      </div>
      <div className={Styles.footer}>
        <button onClick={() => router.push("/blogs")}>
          View All Blogs{" "}
          <Image src={"/next-page.svg"} alt="next" height={15} width={15} />
        </button>
      </div>
    </div>
  );
};

export default HomeBlogs;
