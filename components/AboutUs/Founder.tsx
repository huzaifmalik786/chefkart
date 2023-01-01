import React from 'react'
import Styles from '../../styles/components/about/founder.module.scss'
import { ProfileCardType } from '../../interfaces/interfaces';
import FounderCarousel from '../FounderCarousel';


const Founder = () => {
  return (
    <div className={Styles.founder}>
        <h2>The People Behind <span>Chefkart</span></h2>

        <div>
          <FounderCarousel />
        </div>
    </div>
  )
}

export default Founder