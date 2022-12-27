import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/join-as-chef/metrics.module.scss'

type metrics = {
    title: string,
    description: string,
    image: string
}

const metrics_array : metrics[] = [
    {
        title: "2500+",
        description: "Verified & Trained Home-Chefs On-board.",
        image: "/Vector (8).png"
    },
    {
        title: "1500+",
        description: "Households trust Chefkart with their daily cooking needs",
        image: "/Number.png"
    },
    {
        title: "₹50L",
        description: "Paid out to chefs in 2020",
        image: "/smle.png"
    },
]

const Metrics = () => {
  return (
    <div className={Styles.metric_container}>
        {
            metrics_array.map((i, key)=>{
                return(
                    <div className={Styles.metric_item} key={key}>
                        <p className={Styles.metric_title}>{i.title}</p>
                        <p className={Styles.metric_description}>{i.description}</p>
                        <div className={Styles.image}>
                            <Image src={i.image} fill alt=""  />
                        </div>
                    </div>
                )
            })
        }
</div>
  )
}

export default Metrics