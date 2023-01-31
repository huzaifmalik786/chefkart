import React from 'react'
import ProfileCard from './ProfileCard';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { ProfileCardType } from '../interfaces/interfaces';
import Styles from '../styles/components/foundercarousel.module.scss'
import useWindowDimensions from './WindowSize';

  const founders : ProfileCardType[] = [
    {
      image: '/Rectangle 126.png',
      name: 'Lorum Ipsum Dolor',
      designation: 'Lorum Ipsum Dolor',
      twitter_link: '#',
      linkedin_link: '#'
    },
    {
      image: '/1627892959-CO-FOUNDERS1111v1 3.png',
      name: 'Lorum Ipsum Dolor',
      designation: 'Lorum Ipsum Dolor',
      twitter_link: '#',
      linkedin_link: '#'
    },
    {
      image: '/1627892959-CO-FOUNDERS1111v1 2.png',
      name: 'Lorum Ipsum Dolor',
      designation: 'Lorum Ipsum Dolor',
      twitter_link: '#',
      linkedin_link: '#'
    },
  ]
const FounderCarousel = () => {
  const {width}= useWindowDimensions();

    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 120,
    },
  };
  
  return (
    <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        // autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={900}
        rewindWithAnimation
        customTransition="transform 900ms ease-in"
        ssr
        // infinite={false}
        // infinite={width<=472? true: false}
        arrows={false}
        containerClass={Styles.founder_carousel}
        itemClass={Styles.founder_item}
        // deviceType="mobile"
        partialVisbile
      >
        {
          founders.map((card, key)=>{
            return(
              <ProfileCard key={key} card={card} />
            )
          })
        }
      </Carousel>
  )
}

export default FounderCarousel