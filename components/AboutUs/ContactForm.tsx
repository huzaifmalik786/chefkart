import React from 'react'
import Input from '../Forms/Input'
import Styles from '../../styles/components/about/form.module.scss'
import Image from 'next/image'
import Button from '../Forms/Button'

const ContactForm = () => {
  return (
    <div className={Styles.about_form}>
        <div className={Styles.image}>
            <Image src='/iStock-495494292 1.png' alt='' fill />
        </div>
        <div className={Styles.form_container}>
            <h2>Please fill out the form below and we will respond within 24hrs. </h2>
            <form>
                <Input left_section="Name" placeholder="" type="text" name="name" />
                <Input left_section="" placeholder="Email" type="email" name="email" />
                <Input left_section="+91" placeholder="9987115132" type="text" name="mobile" />

                <div className={Styles.checbox_container}>
                    <input type="checkbox" name="" id="checkbox" /> I agree to Chefkart’s terms of service & Privacy Policy
                </div>

                <Button bgcolor="#E76F51" text="Submit" />
            </form>
        </div>
    </div>
  )
}

export default ContactForm