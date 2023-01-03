import React from 'react'
import Styles from '../../styles/components/investor-relation/banner.module.scss'
const Banner = () => {
  return (
    <div className={Styles.banner_container}>
        <div className={Styles.banner}>
            <p>This is just the beginning with many more milestones & funding to come.</p>
        </div>
    </div>
  )
}

export default Banner