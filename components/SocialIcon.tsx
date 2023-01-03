import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/components/socialIcon.module.scss'

type Props = {
  width: string;
  height: string;
  image: string;
}
const SocialIcon = (props: Props) => {
  return (
    <Link href="#" className={Styles.social_container}>
        <div className={Styles.icon} style={{width: `${props.width}`, height:`${props.height}`}}>
            <Image src={props.image} alt="icon" fill />
        </div>
    </Link>
  )
}

export default SocialIcon