import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useFetchData from '../../lib/api'
import Styles from '../../styles/components/pricing/features.module.scss'

type features_icon = {
    icon: string,
    title: string
}

const icons : features_icon[] = [
    {
        icon: '/Batch Assign.png',
        title: 'No. of People'
    },
    {
        icon: '/Delivery Time.png',
        title: 'Time Slot'
    },
    {
        icon: '/Vegan Food.png',
        title: 'No. of meals'
    },
    {
        icon: '/Noodles.png',
        title: 'Cuisines'
    },
    {
        icon: '/Place Marker.png',
        title: 'Location'
    }
]

const Features = () => {

  return (
    <div className={Styles.feature_container}>
        <div className={Styles.heading}>
            <h3 className={Styles.main_title}>Our affordable prices are based on <span className={Styles.colored}>4 factors </span></h3>
            <span className={Styles.sub_title}>Minimum prices guaranteed*</span>
        </div>
        <div className={Styles.icons_container}>
            {
                icons.map((i, key)=>{
                    return (
                        <div className={Styles.icons_item} key={key}>
                            <div className={Styles.icon}><Image src={i.icon} alt="" fill /></div>
                            <span className={Styles.icon_title}>{i.title}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Features