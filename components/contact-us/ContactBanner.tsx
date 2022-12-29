import React from 'react'
import Styles from '../../styles/components/contact-us/banner.module.scss'
import ContactForm from '../Forms/ContactForm'
const ContactBanner = () => {
  return (
    <div className={Styles.contact_wrapper}>
        <div className={Styles.banner}>
            <h2>Contact us</h2>
        </div>
        <div className={Styles.form}>
          <ContactForm />
        </div>
    </div>
  )
}

export default ContactBanner