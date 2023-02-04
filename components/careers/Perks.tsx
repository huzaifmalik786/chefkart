import Image from 'next/image'
import React from 'react'
import { image_type } from '../../interfaces/interfaces'
import Styles from '../../styles/components/careers/Perks.module.scss'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

type perksType = {
    image: image_type,
    text: string
}

const perks : perksType[] = [
    {
        image:{
            data: {
                attributes: {
                    url: '/Home.66d8bbf2e7e72c9bc8c0ef97d1ae0972 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Cup.0b10d0b11d82253562bd447d5e8c4680 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Home.66d8bbf2e7e72c9bc8c0ef97d1ae0972 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Cup.0b10d0b11d82253562bd447d5e8c4680 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
                    alternativeText: ""
                }
            }
        } ,
        text: 'Lorem ipsum dolor sit amet, '
    },
]

type Props = {
    data: {
        heading: string;
        subheading: string;
        perks: perksType[]
    }
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 4,
      slidesToSlide: 1,
      // partialVisibilityGutter: 160,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2.3,
      slidesToSlide: 1,
      // partialVisibilityGutter: 120,
    },
  };


const Perks = (props: Props) => {
  return (
    <div className={Styles.perks_container}>
        <div className={Styles.subcontainer}>
        <div className={Styles.heading}>
            <h2>{props.data.heading || "Perks and Recreation"}</h2>
            <p>{props.data.subheading || "Our values outline who we are, what we hope to accomplish, "}</p>
        </div>
            <div className={Styles.perk_item_grid}>
                {
                    (props.data.perks || perks).map((perk, key) =>{
                        return(
                            <div key={key} className={Styles.perk_item}>
                                <div className={Styles.logo}>
                                    <Image src={perk.image.data.attributes.url} alt={perk.image.data.attributes.alternativeText || "perk logo"} fill />
                                </div>
                                <p>{perk.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
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
            containerClass={Styles.carousel_container}
            itemClass={Styles.item}
            // deviceType="mobile"
            partialVisbile
      >
        {
                    (props.data.perks || perks).map((perk, key) =>{
                        return(
                            <div key={key} className={Styles.perk_item}>
                                <div className={Styles.logo}>
                                    <Image src={perk.image.data.attributes.url} alt={perk.image.data.attributes.alternativeText || "perk logo"} fill />
                                </div>
                                <p>{perk.text}</p>
                            </div>
                        )
                    })
                }
      </Carousel>
    </div>
  )
}

export default Perks