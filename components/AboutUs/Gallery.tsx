import Image from 'next/image';
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Styles from '../../styles/components/about/gallery.module.scss'
import GalleryVideo from './GalleryVideo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseWindowDimensions from '../WindowSize';

type gallery_vids = {
    attributes: {
      url: string;
    }
}
type Props = {
  data: {
    heading: string;
    videos: gallery_vids[]
  }
}
const gallery : gallery_vids[] = [
    {
      attributes: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    },
    {
      attributes: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    },
    {
      attributes: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    },
    {
      attributes: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    },
    {
      attributes: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    },

]


const Gallery = (props: Props) => {
  const {width}= UseWindowDimensions();
  const [slide,setslide]= useState(props.data.videos.length);
  const responsive=[
    {
      breakpoint: 3000,
      settings: {
        slidesToShow:slide>4?5:slide,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: slide>2?3:slide,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: slide>1?2:1,
      }
    }
  ]
  return (
    <div className={Styles.gallery_container} style={width>450 && slide<5?{padding: "0 14vw"}:{}}>
        <h2>Gallery</h2>
        <Slider
          draggable
          responsive={responsive}
          // autoplay
          // infinite={true}
          arrows={false}
          speed={1000}
          autoplaySpeed={2000}
          slidesToScroll={1}
          className={Styles.gallery_carousel}
        >
        {
        (props.data.videos || gallery).map((g, key)=>{
            return (
                <div key={key} className={Styles.gallery_item}>
                    {/* <Image src={g.attributes.url} alt="gallery images" fill /> */}
                    <GalleryVideo video={g.attributes.url}/>
                </div>
            )
        })
      }
        </Slider>
        {/* <Carousel
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
        (props.data.videos || gallery).map((g, key)=>{
            return (
                <div key={key} className={Styles.gallery_item}>
                    {/* <Image src={g.image} alt="gallery images" fill /> */}
                    {/* <GalleryVideo video={g.attributes.url}/>
                </div>
            )
        })
    }
      </Carousel> */}
    </div>
  )
}

export default Gallery