import Image from 'next/image'
import React from 'react'
import { image_type } from '../../interfaces/interfaces'
import Styles from '../../styles/components/contact-us/banner.module.scss'
import ContactForm from '../Forms/ContactForm'
import Reveal from '../Reveal'
import UseWindowDimensions from '../WindowSize'

type Props = {
  data: {
  banner_heading: string;
  banner_img: image_type
  mobile_banner_image: image_type
}
form: {
  heading: string;
    inputs: {
      placeholder: string;
      name: string;
      type: string;
    }[]
    submit_button: string;
}
}
const ContactBanner = (props: Props) => {
  const { width } = UseWindowDimensions()
  return (
    <div className={Styles.contact_wrapper}>
        <div className={Styles.banner}>
          <div className={Styles.banner_img}>
            <Image src={(width>450 ?  props.data?.banner_img?.data?.attributes?.url : props.data?.mobile_banner_image?.data?.attributes?.url) || "/Rectangle 60.png"} alt={props.data?.banner_img?.data.attributes?.alternativeText || ""} fill />
          </div>
            <h2>{props.data?.banner_heading || "Contact us"}</h2>
        </div>
        <div className={Styles.form}>
        <Reveal>
          <ContactForm data={props.form}  />
        </Reveal>

        </div>
    </div>
  )
}

export default ContactBanner