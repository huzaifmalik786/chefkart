import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/forms/ThankYou.module.scss'
import Link from 'next/link'
import { image_type } from '../../interfaces/interfaces'

type Props = {
  data: {
    heading: string;
    subheading: string;
    link: {
      text: string;
      url: string;
    }
    icon: image_type

  }
}

const ThankYou = (props: Props) => {
  return (
    <div className={Styles.thank_you_modal}>
      <div className={Styles.upper_content}>
        <div className={Styles.icon}>
            <Image src={props.data?.icon?.data?.attributes?.url || '/Checkmark.png'} alt={props.data?.icon?.data?.attributes?.alternativeText || "check logo"} fill />
        </div>
        <div className={Styles.content}>
            <h2>{props.data?.heading || "Thank You"}</h2>
            <p>{props.data?.subheading || "We’ll get in touch as soon as we can."}</p>
        </div>
        </div>
        <Link href={props.data?.link?.url || '/'} >{props.data?.link?.text || "Back to homepage"}</Link>

    </div>
  )
}

export default ThankYou