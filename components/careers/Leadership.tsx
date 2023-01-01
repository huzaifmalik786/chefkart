import React from 'react'
import Styles from '../../styles/components/careers/leaders.module.scss'
import { ProfileCardType } from '../../interfaces/interfaces'
import ProfileCard from '../ProfileCard'

const leaders : ProfileCardType[] = [
    {
        image: '/leader1.png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (1).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (2).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (3).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/leader1.png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (1).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (2).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
    {
        image: '/Rectangle 126 (3).png',
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        twitter_link: '#',
        linkedin_link: '#'
    },
]
const Leadership = () => {
  return (
    <div className={Styles.leaders_containers}>
        <h2>Leadership</h2>
        
        <div className={Styles.leader_grid}>
            {
                leaders.map((leader, key)=>{
                    return(
                        <ProfileCard key={key} card={leader} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Leadership