import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useFetchData from '../../lib/api'
import Styles from '../../styles/components/pricing/features.module.scss'
import { features_icon } from '../../interfaces/interfaces'

const icons : features_icon[] = [
    {
        text: 'No. of People',
        image: {
            data: {
                attributes: {
                    url: "/Batch Assign.png",
                    alternativeText: 'no-of-people'
                }
            }
        }
    },
    {
        text: 'Time Slot',
        image: {
            data: {
                attributes: {
                    url: '/Delivery Time.png',
                    alternativeText: 'time'
                }
            }
        }
    },
    {
        text: 'No. of meals',
        image: {
            data: {
                attributes: {
                    url: '/Vegan Food.png',
                    alternativeText: 'food'
                }
            }
        }
        
    },
    {
        text: 'Cuisines',
        image: {
            data: {
                attributes: {
                    url: '/Noodles.png',
                    alternativeText: 'cuisines'
                }
            }
        }
        
    },
    {
        text: 'Location',
        image: {
            data: {
                attributes: {
                    url: '/Place Marker.png',
                    alternativeText: 'cuisines'
                }
            }
        }
        
    }
]
type Props={
    data: {
        subheading: string;
        heading: {
            text: string;
            highlight: boolean;
        }[]
        factors: features_icon[]
    }
}
const Features = (props: Props) => {

  return (
    <div className={Styles.feature_container}>
        <div className={Styles.heading}>
            <h3 className={Styles.main_title}>
                {
                    (props.data?.heading) ? (
                        (props.data?.heading).map((item, key)=>{
                            return(
                            <span key={key}>
                             {item.highlight ? <span className={Styles.colored}> {item.text} </span> : item.text }
                            </span>
                            )
                          })
                    ) : (
                        <span> Our affordable prices are based on <span className={Styles.colored}>4 factors </span></span>
                    )
                }
               </h3>
            <span className={Styles.sub_title}>{props.data?.subheading || "Minimum prices guaranteed*"}</span>
        </div>
        <div className={Styles.icons_container}>
            {
                (props.data.factors || icons).map((i, key)=>{
                    return (
                        <div className={Styles.icons_item} key={key}>
                            <div className={Styles.icon}><Image src={i.image.data.attributes.url} alt={i.image.data.attributes.alternativeText} fill /></div>
                            <span className={Styles.icon_title}>{i.text}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Features