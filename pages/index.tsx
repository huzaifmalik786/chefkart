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
import Hygiene from "../components/Hygiene";
import ReviewsSection from "../components/homepage/ReviewsSection";
import { GetStaticProps } from "next";
import { blogType, chefType, image_type, ReviewsCardType } from "../interfaces/interfaces";

type Props = {

  header: {
    nav_links: [],
    button: {
      button_text: string;
    }
    avatar: image_type
  };
  footer: {
    social_heading: string;
    get_app_heading: string;
    copyright_text: string;

    logo: {
      name: string;
      url: string;
      image: image_type
    }
    footer_links: {
      text: string;
      url: string;
    }[]
    social_icons: {
      url: string;
      icon: image_type
    }[]
    download_icon: {
      url: string;
      icon: image_type
    }[]
    links: {
      text: string;
      url: string;
    }[]
  }

  homepage: {
    // 1st component
    homebanner: {
      heading: string;
      badge: string;
      subheading: {
        text: string;
        highlight: boolean;
      }[];
      button: {
        button_text: string;
      };
      image : image_type
    };
    //2nd component
    for_everyone: {
      heading: string;
      tab: {
        title: string;
        heading: string;
        description: string;
        image: image_type
      }[];
    };

    //3rd component
    facts: {
      heading: string;
      description: string;
    }[];

    //4th component
    hygiene: {
      heading: string;
      subheading: string;
      description: {
        text: string;
        highlight: string;
      }[];
    };

    //5th component
    pricing:{
      brief : {
        heading: string;
        subheading: string;
      },
      cards: {
        heading: string;
        subheading: string;
        price: string;
        button: {
          button_text: string;
        };
  
        features: {
          feature: string;
        }[]
  
      }[]
    }

    //6th component
    how_it_works: {
      brief: {
        heading: string;
        description: string;
      }
      steps:{
        text: string;
        image: image_type
      }[]
      download_icon: {
        icon: image_type
      }[]
    },

    //7th component
    reviews: {
      section_heading: string;
      review_cards: {
      review: string;
      name: string;
      stars: number;
      image: image_type;
    }[]
    video_review: ReviewsCardType
    }

    //8th component
    hiring:{
      heading: string;
    subheading1: string;
    subheading2: string;
    image: image_type
    download_icons: {
      icon: image_type
    }[]
    },
    //9th componenent
    artisans:{
      heading: string;
      chef_array: chefType[]
    },

    //10th component
    join_as_chef:{
      heading: string;
      button: {
        button_text: string;
      }
    },
    //11th component
    blog: {
      section_name: string;
      heading: string;
      blog_carousel: blogType[],
      button: {
        button_text: string
      }
    }

    //12th component
    last_banner: {
      heading: string;
      subheading: string;
      button: {
        button_text: string;
      }
      image: image_type
    }
  };
};
export default function Home(props: Props) {
  return (
    <>
      <Layout header={props.header} footer={props.footer}>
        <HomeBanner data={props.homepage.homebanner} />
        <ForEveryone data={props.homepage.for_everyone} />
        <FoodDisplay />
        <div style={{ marginTop: "-4.8vw" }}>
          {/* px: padding x, py: padding y */}

          <Facts
            data={props.homepage.facts}
            bgcolor="#F9F9F9"
            color="#000000"
            px="4.44vw"
            py="8.32vw"
          />
        </div>
        <div style={{ marginTop: "-4.8vw" }}>
          <Hygiene
            data={props.homepage.hygiene}
            subheading="Mom Approved"
            heading="SAFETY STANDARDS"
            description="At Chefkart, we are truly committed to"
            colored_text="simplifying the way India eats."
            center
            headingSize="4.44vw"
          />
        </div>
        <HomePricing data={props.homepage.pricing} />
        <HowChefkartWorks data={props.homepage.how_it_works} />
        <ReviewsSection data={props.homepage.reviews} />
        <HasleFreeHiring data={props.homepage.hiring} />
        <Artisans data={props.homepage.artisans} />
        <JoinAsChef data={props.homepage.join_as_chef} />
        <HomeBlogs data={props.homepage.blog} />
        <BookTrial data={props.homepage.last_banner} />
      </Layout>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=deep,10`
  );
  const header_data = await res1.json();

  const res3 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=deep,10`
  );
  const footer_data = await res3.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/homepage?populate=deep,10`
  );
  const homepage_data = await res2.json();

  return {
    // Passed to the page component as props
    props: {
      header: header_data.data.attributes.header,
      homepage: {
        homebanner: homepage_data.data.attributes?.banner,
        for_everyone: homepage_data.data.attributes?.For_everyone,
        facts: homepage_data.data.attributes?.Facts,
        hygiene: homepage_data.data.attributes?.Hygiene,

        pricing: {
          brief: homepage_data.data.attributes?.Pricing?.brief,
          cards: homepage_data.data.attributes?.Pricing_card
        },

        how_it_works: homepage_data.data.attributes?.Chefcart_works,

        reviews: homepage_data.data.attributes?.testimonial_section,
        hiring: homepage_data.data.attributes?.hiring,

        artisans: {
          heading: homepage_data.data.attributes?.chefs?.heading,
          chef_array: homepage_data.data.attributes?.chef_carousel
        },
        join_as_chef: homepage_data.data.attributes?.join_as_chef,
        blog: homepage_data.data.attributes?.blog_section,
        last_banner: homepage_data.data.attributes?.banner_last
      },
      footer: footer_data.data.attributes.Footer
    },
  };
};
