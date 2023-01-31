import Image from 'next/image'
import React from 'react'
import { image_type } from '../../interfaces/interfaces'
import Styles from '../../styles/components/careers/Perks.module.scss'
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
const Perks = (props: Props) => {
  return (
    <div className={Styles.perks_container}>
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
  )
}

export default Perks