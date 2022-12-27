import Image from 'next/image';
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Styles from '../styles/components/testimonial.module.scss'

const testimonies = [
    {
        image: '/image 14.png',
        stars: 5,
        content: "“Absolutely loved the food prepared by the chef, specially the cheese bombs, they were so crispy on the outside. The lasagna was to die for! The food was definitely the highlight of my party”",
        name: "Amrita , Analyst"
    },
    {
        image: '/image 13.png',
        stars: 5,
        content: "“I hired Chefkart Chefs in the last month's kitty party. I actually had fun & didn't had to worry about food burning on the gas.Chef Abhishek saved the day with his Tiramisu & Paneer Tikka”",
        name: "Sneha , CEO"
    },
    {
        image: '/image 15.png',
        stars: 5,
        content: "“Staying away from home, my friends are my family. We often have parties at home and explored their Chef for the first time. Needless to say, I loved every bit of the experience.”",
        name: "Diwakar, Media Head"
    },
]

const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const activeStyle = {
      width: "26.49vw !important",
      height: "25.81vw",
      backgroundColor: "#f9f9f9",
      borderRadius: "0.16vw solid #ABC0B5",
      border: "0.16vw solid #ABC0B5",
      color: "#615E5E",
      fontSize: "1.38vw",
      lineHeight: "1.80vw",
      padding: "5vw 1.66vw 2.22vw 1.66vw"
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
          partialVisibilityGutter: 40
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

    //   const handleOnChange = (e) => {
    //     setActiveIndex(e.item);
    //   }
    function renderStars(s: number) {
      return Array.from({length: s}, (v, i) => (
        <Image src='/Path.svg' width={16} height={16} alt="" key={i} className={Styles.stars} />
      ));
    }

  return (
    <div className={Styles.testimonials_section}>
        <Carousel
        ssr={true} // means to render carousel on server-side.
        responsive={responsive}
        draggable={true}
        slidesToSlide={1}
        autoPlay={false}
        autoPlaySpeed={1000}
        arrows={false}
        centerMode={true}
        // infinite={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={Styles.carousel_container}
        itemClass={Styles.items}
        
        // partialVisbile
        // onChange={(newIndex: number) => setActiveSlide(newIndex)}
        >
            {
                testimonies.map((t, key)=>{
                    return(
                        <div key={key} className={Styles.item} style={activeSlide === key ? activeStyle : {}}>
                            <div className={Styles.image} ><Image src={t.image} fill alt="" /></div>
                            <div>
                                {renderStars(t.stars)}
                                <p className={Styles.content} style={activeSlide===key? {fontSize: "1.38vw", lineHeight: "1.80vw"}: {}}>{t.content}</p>
                            </div>
                            <Image src='/vector 3.svg' alt="line" width={53} height={0} className={Styles.line} style={activeSlide === key ? {borderColor: "#2d4739"}: {}} />
                            <p className={Styles.name} style={activeSlide===key? {color: "#262626"}: {}}>{t.name}</p>
                        </div>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Testimonial