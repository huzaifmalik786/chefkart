import React, { useState } from 'react'
import Input from '../Forms/Input'
import TextArea from '../Forms/TextArea'
import Styles from '../../styles/components/about/form.module.scss'
import Image from 'next/image'
import Button from '../Forms/Button'
import Dropdown from '../Forms/Dropdown'
import Modal from '../careers/Modal'
import ThankYou from '../Forms/ThankYou'
import UseWindowDimensions from '../WindowSize'

type Props = {
    data: {
        url: string;
        alternativeText: string;
    }
}

const dropdown_location = ["lorem ipsum", "lorem ipsum"]

const ContactForm = (props: Props) => {
    const {width}= UseWindowDimensions();
    const [openModal, setOpenModal] = useState<boolean>(false)

    const onSubmit = (data: any) => {
        // send form data to server or perform other actions
        data.preventDefault()
        setOpenModal(true)
        console.log("submite",data.name, data.target.name.value)
    
      };
  return (
    <>
    {
        openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ThankYou /></Modal>
    }
    <div className={Styles.about_form}>
        <div className={Styles.image}>
            <Image src={props.data.url || '/iStock-495494292 1.png'} alt={props.data.alternativeText || ''} fill />
        </div>
        {width<=450?(
        <div className={Styles.form_container}>
            <h2>Please fill out the form below and we will respond within 24hrs. </h2>
            <form onSubmit={onSubmit}>
                <Input left_section="Name" placeholder="" type="text" name="name" />
                <div className={Styles.two_input}>
                    <Input placeholder="9987115132" type="text" name="mobile" />
                    {width<=450?(<div></div>):(
                    <div className={Styles.dropdown}>
                        <Dropdown list={dropdown_location} arrow_width='0.7vw' arrow_height='0.35vw' heading='location' />
                    </div>
                    )}
                </div>
                <Input left_section="" placeholder="Email" type="email" name="email" />
                <TextArea row={4}/>
                <div className={Styles.checbox_container}>
                    <input type="checkbox" name="" id="checkbox" /> I agree to Chefkart’s terms of service & Privacy Policy
                </div>
                <Button bgcolor="#E76F51" text="Submit" />
            </form>
        </div>
        ):(
        <div className={Styles.form_container}>
            <h2>Please fill out the form below and we will respond within 24hrs. </h2>
            <form onSubmit={onSubmit}>
                <Input left_section="Name" placeholder="Name" type="text" name="name" />
                <Input left_section="" placeholder="Email" type="email" name="email" />
                <div className={Styles.two_input}>
                    <Input placeholder="9987115132" type="text" name="mobile" />
                    {width<=472?(<div></div>):(
                    <div className={Styles.dropdown}>
                        <Dropdown list={dropdown_location} arrow_width='0.7vw' arrow_height='0.35vw' heading='location' />
                    </div>
                    )}
                </div>
                <div className={Styles.checbox_container}>
                    <input type="checkbox" name="" id="checkbox" /> I agree to Chefkart’s terms of service & Privacy Policy
                </div>
                <Button bgcolor="#E76F51" text="Submit" />
            </form>
        </div>
        )}
    </div>
    </>
  )
}

export default ContactForm