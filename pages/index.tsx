import Artisans from "../components/homepage/Artisans";
import BookTrial from "../components/homepage/BookTrial";
import Facts from "../components/homepage/Facts";
import FoodDisplay from "../components/homepage/FoodDisplay";
import ForEveryone from "../components/homepage/ForEveryone";
import HasleFreeHiring from "../components/homepage/HasleFreeHiring";
import HomeBanner from "../components/homepage/HomeBanner";
import HomeBlogs from "../components/homepage/HomeBlogs";
import HomePricing from "../components/homepage/HomePricing";
import HowChefkartWorks from "../components/homepage/HowChefkartWorks";
import JoinAsChef from "../components/homepage/JoinAsChef";
import Layout from "../components/layouts/Layout";
import Testimonial from "../components/Testimonial";
import FeedbackVideo from "../components/homepage/FeedbackVideo";
import Hygiene from "../components/Hygiene";
export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ForEveryone />
        <FoodDisplay />
        <Facts />
        <Hygiene
          subheading="Mom Approved"
          heading="safety standards"
          main_desc="At Chefkart, we are truly committed to"
          sub_desc="simplifying the way India eats."
          text_align="center"
        />
        <HomePricing />
        <HowChefkartWorks />

        {/* section for customer feedback  */}

        <Testimonial />

        <HasleFreeHiring />
        <Artisans />
        <JoinAsChef />
        <HomeBlogs />
        <BookTrial />
      </Layout>
    </>
  );
}
