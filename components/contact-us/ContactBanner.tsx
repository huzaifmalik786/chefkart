import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/contact-us/banner.module.scss'
import ContactForm from '../Forms/ContactForm'
import Reveal from '../Reveal'

type Props = {
  data: {
  banner_heading: string;
  banner_img: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  }
  form_heading: string
  
}
}
const ContactBanner = (props: Props) => {
  return (
    <div className={Styles.contact_wrapper}>
        <div className={Styles.banner}>
          <div className={Styles.banner_img}>
            <Image src={props.data?.banner_img?.data?.attributes?.url || "/Rectangle 60.png"} alt={props.data?.banner_img?.data.attributes?.alternativeText || ""} fill />
          </div>
            <h2>{props.data?.banner_heading || "Contact us"}</h2>
        </div>
        <div className={Styles.form}>
        <Reveal>
          <ContactForm heading={props.data?.form_heading} />
        </Reveal>

        </div>
    </div>
  )
}

export default ContactBanner