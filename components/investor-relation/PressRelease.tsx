import Link from 'next/link';
import React from 'react'
import Styles from '../../styles/components/investor-relation/pressRelease.module.scss'

type news_type = {
    date: string;
    news: {
        text: string;
        url: string;

    }
}

const news : news_type[] = [
    {
        date: '2023-01-26',
        news: {
            text: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo',
            url: "#"

        }
    },
    {
        date: '2023-01-26',
        news: {
            text: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo',
            url: "#"

        }
    },
    {
        date: '2023-01-26',
        news: {
            text: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo',
            url: "#"

        }
    },
    {
        date: '2023-01-26',
        news: {
            text: 'lorem Ipsum lo lorem Ipsum lo lorem Ipsum lo',
            url: "#"

        }
    },
    
]

type Props = {
    data: {
        heading: string;
        news: news_type[]
    }

}

const PressRelease = (props: Props) => {
    function changeFormat(d: string){
        let date = new Date(d);
        let formatter = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        let newDate = formatter.format(date);
        return newDate
    }
  return (
    <div className={Styles.press_release}>
        <h2>{props.data.heading || "Press Release"}</h2>

        <div className={Styles.item_container}>
            {
                (props.data?.news || news).map((n, key)=>{
                    return(
                        <Link href={n.news.url || '#'} key={key} className={Styles.item}>
                            <p className={Styles.date}>{changeFormat(n.date)}</p>
                            <p className={Styles.heading}>{n.news.text}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PressRelease