import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/components/socialIcon.module.scss'
const SocialIcon = () => {
  return (
    <Link href="#" className={Styles.social_container}>
        <div className={Styles.icon}>
            <Image src='/twitter.png' alt="icon" fill />
        </div>
    </Link>
  )
}

export default SocialIcon