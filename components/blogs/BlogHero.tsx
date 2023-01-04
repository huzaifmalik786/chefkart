import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/blogs/bloghero.module.scss";

type Props = {};

const BlogHero = (props: Props) => {
  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.hero_content}>
        <p className={Styles.label}>Blog</p>
        <h2>
          Book a Trained Chef {"\n"} for your <span> Something Special</span>
        </h2>
        <h4>
          Food that makes your guests go <span> UMAAAHHH!!</span> {"\n"} Hire a
          verified chef for your special occasions.
        </h4>
        <button>Read More</button>
      </div>
      <div className={Styles.hero_img}>
        <Image src={"/blogs_hero.png"} className={Styles.img} alt="chef" fill />
      </div>
    </div>
  );
};

export default BlogHero;
