import React from 'react'
import FounderCarousel from '../FounderCarousel'
import Styles from '../../styles/components/careers/founder.module.scss'

const Founders = () => {
  return (
    <div className={Styles.career_founder}>
        <div className={Styles.heading}>
            <h2><span>Chefkart</span> Co - founders</h2>
        </div>
        <FounderCarousel />
    </div>
  )
}

export default Founders