import Image from 'next/image'
import React from 'react'
import { image_type } from '../../interfaces/interfaces'
import Styles from '../../styles/components/join-as-chef/metrics.module.scss'

type metrics = {
    heading: string,
    description: string,
    image: image_type
}

const metrics_array : metrics[] = [
    {
        heading: "2500+",
        description: "Verified & Trained Home-Chefs On-board.",
        image: {
            data: {
                attributes: {
                    url: "/Vector (8).png",
                    alternativeText: ""
                }
            }
        }
    },
    {
        heading: "1500+",
        description: "Households trust Chefkart with their daily cooking needs",
        image: {
            data: {
                attributes: {
                    url: "/Number.png",
                    alternativeText: ""
                }
            }
        }
    },
    {
        heading: "₹50L",
        description: "Paid out to chefs in 2020",
        image: {
            data: {
                attributes: {
                    url: "/smle.png",
                    alternativeText: ""
                }
            }
        }
    },
]

type Props = {

    data: metrics[]
}
const Metrics = (props: Props) => {
  return (
    <div className={Styles.metric_container}>
        {
            (props.data || metrics_array).map((i, key)=>{
                return(
                    <div className={Styles.metric_item} key={key}>
                        <p className={Styles.metric_title}>{i.heading}</p>
                        <p className={Styles.metric_description}>{i.description}</p>
                        <div className={Styles.image}>
                            <Image src={i?.image?.data?.attributes?.url} fill alt={i?.image?.data?.attributes?.alternativeText || ""}  />
                        </div>
                    </div>
                )
            })
        }
</div>
  )
}

export default Metrics