import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/careers/Perks.module.scss'
type perksType = {
    logo: string,
    description: string
}

const perks : perksType[] = [
    {
        logo: '/Home.66d8bbf2e7e72c9bc8c0ef97d1ae0972 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Cup.0b10d0b11d82253562bd447d5e8c4680 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Home.66d8bbf2e7e72c9bc8c0ef97d1ae0972 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Cup.0b10d0b11d82253562bd447d5e8c4680 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
    {
        logo: '/Chef.44015ba057f83a3abcc88a07d013e5f6 1.png',
        description: 'Lorem ipsum dolor sit amet, '
    },
]
const Perks = () => {
  return (
    <div className={Styles.perks_container}>
        <div className={Styles.heading}>
            <h2>Perks and Recreation</h2>
            <p>Our values outline who we are, what we hope to accomplish, </p>
        </div>
            <div className={Styles.perk_item_grid}>
                {
                    perks.map((perk, key) =>{
                        return(
                            <div key={key} className={Styles.perk_item}>
                                <div className={Styles.logo}>
                                    <Image src={perk.logo} alt="perk logo" fill />
                                </div>
                                <p>Lorem ipsum dolor sit amet, </p>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Perks