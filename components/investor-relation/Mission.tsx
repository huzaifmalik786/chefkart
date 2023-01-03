import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/components/investor-relation/mission.module.scss'
import Facts from './Facts'
const Mission = () => {
  return (
    <div className={Styles.mission_container}>
        <div className={Styles.left_content}>
            <p>Our mission</p>
            <h2>A homely restaurant experience - from our chefs in your kitchen</h2>
            <Link href="">A letter from our CEO</Link>
        </div>
        <div className={Styles.right_content}>
            <Facts bgcolor='#ECECEC' color='#2D4739' />
        </div>
    </div>
  )
}

export default Mission