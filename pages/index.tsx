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

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ForEveryone />
        <FoodDisplay />
        <Facts />
        <HowChefkartWorks />
        <HasleFreeHiring />
        <JoinAsChef />
        <HomeBlogs />
        <BookTrial />
      </Layout>
    </>
  );
}
