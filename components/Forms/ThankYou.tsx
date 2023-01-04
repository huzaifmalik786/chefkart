import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/forms/ThankYou.module.scss'
import Link from 'next/link'

const ThankYou = () => {
  return (
    <div className={Styles.thank_you_modal}>
      <div className={Styles.upper_content}>
        <div className={Styles.icon}>
            <Image src='/Checkmark.png' alt="check logo" fill />
        </div>
        <div className={Styles.content}>
            <h2>Thank You!</h2>
            <p>We’ll get in touch as soon as we can.</p>
        </div>
        </div>
        <Link href='/' >Back to homepage</Link>

    </div>
  )
}

export default ThankYou