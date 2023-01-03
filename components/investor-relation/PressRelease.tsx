import React from 'react'
import Styles from '../../styles/components/investor-relation/pressRelease.module.scss'

type news_type = {
    date: string;
    heading: string;
}

const news : news_type[] = [
    {
        date: 'November 29, 2022',
        heading: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo'
    },
    {
        date: 'November 29, 2022',
        heading: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo'
    },
    {
        date: 'November 29, 2022',
        heading: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo'
    },
    {
        date: 'November 29, 2022',
        heading: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo'
    },
]
const PressRelease = () => {
  return (
    <div className={Styles.press_release}>
        <h2>Press Release</h2>

        <div className={Styles.item_container}>
            {
                news.map((n, key)=>{
                    return(
                        <div key={key} className={Styles.item}>
                            <p className={Styles.date}>{n.date}</p>
                            <p className={Styles.heading}>{n.heading}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PressRelease