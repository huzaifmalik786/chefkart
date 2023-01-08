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
import Testimonial from "../components/TestimonialCarousel";
import FeedbackVideo from "../components/homepage/FeedbackVideo";
import Hygiene from "../components/Hygiene";
import UserReviews from "../components/testimonials/UserReviews";
import VideoQuote from "../components/VideoQuote";
import ReviewsSection from "../components/homepage/ReviewsSection";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ForEveryone />
        <FoodDisplay />
        <div style={{marginTop: '-4.8vw'}}>
          <Facts bgcolor="#F9F9F9" color="#000000" />
        </div>
        <div style={{marginTop: '-4.8vw'}}>
        <Hygiene
          subheading="Mom Approved"
          heading="safety standards"
          main_desc="At Chefkart, we are truly committed to"
          sub_desc="simplifying the way India eats."
          center
          headingSize='4.44vw'
        />
        </div>
        <HomePricing />
        <HowChefkartWorks />
        <ReviewsSection />
        <HasleFreeHiring />
        <Artisans />
        <JoinAsChef />
        <HomeBlogs />
        <BookTrial />
      </Layout>
    </>
  );
}

