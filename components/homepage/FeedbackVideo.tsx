import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/homepage/FeedbackVideo.module.scss'
const FeedbackVideo = () => {
  return (
    <div className={Styles.feedback_container}>
        <div className={Styles.left_section}>
            <p>Ever Since Geeta Didi has started Working my Kitchen is no longer a headache for me </p>
        </div>
        <div className={Styles.right_section}>
            <div className={Styles.video}>
                <Image src='/vlcsnap-2022-11-24-17h11m45s566 1.png' fill alt="video" />
            </div>
        </div>
    </div>
  )
}

export default FeedbackVideo