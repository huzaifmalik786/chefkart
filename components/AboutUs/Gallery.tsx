import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Styles from '../../styles/components/about/gallery.module.scss'

type gallery_vids = {
    image: string;
}

const gallery : gallery_vids[] = [
    {
        image: '/Rectangle 159.png'
    },
    {
        image: '/Rectangle 155.png'
    },
    {
        image: '/Rectangle 154.png'
    },
    {
        image: '/Rectangle 156.png'
    },
    {
        image: '/iStock-1223383996 1.png'
    },
]

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 3,
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

const Gallery = () => {
  return (
    <div className={Styles.gallery_container}>
        <h2>Gallery</h2>

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
        // ssr
        // infinite
        arrows={false}
        containerClass={Styles.gallery_carousel}
        itemClass={Styles.gallery_item}
        // deviceType={device}
        partialVisbile
      >
    
    {
        gallery.map((g, key)=>{
            return (
                <div key={key} className={Styles.gallery_item}>
                    <Image src={g.image} alt="gallery images" fill />
                </div>
            )
        })
    }
      </Carousel>
    </div>
  )
}

export default Gallery