import React, { useState } from 'react'
import Input from '../Forms/Input'
import TextArea from '../Forms/TextArea'
import Styles from '../../styles/components/about/form.module.scss'
import Image from 'next/image'
import Button from '../Forms/Button'
import Dropdown from '../Forms/Dropdown'
import { ModalContext } from '../ModalContext'

type Props = {
    data: {
        url: string;
        alternativeText: string;
    },
    // showModal: (open: boolean) => void;
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

const dropdown_location = ["lorem ipsum", "lorem ipsum"]

const ContactForm = (props: Props) => {
    const [location, setlocation] = useState<string>("")
    const modalContext= React.useContext(ModalContext);

    const onSubmit = (data: any) => {
        // send form data to server or perform other actions
        data.preventDefault()
        // props.showModal(true);
        console.log("submite",data.name, data.target.name.value)
        if(modalContext.setModalOpen){
            modalContext.setModalOpen(true);
          }
    
      };
  return (
    <>
    <div className={Styles.about_form}>
        <div className={Styles.image}>
            <Image src={props.data.url || '/iStock-495494292 1.png'} alt={props.data.alternativeText || ''} fill />
        </div>
        <div className={Styles.form_container}>
            <h2>{props.form.heading || "Please fill out the form below and we will respond within 24hrs. "}</h2>
            <form onSubmit={onSubmit}>
                {
                    props.form.inputs.map((item, key)=> {
                        return(
                           item.name !== "mobile" ? <Input key={key} placeholder={item.placeholder || "Name"} type={item.type || "text"} name={item.name || "name"} /> : (
                            <div className={Styles.two_input}>
                                <Input placeholder={item.placeholder || "9987115132"} type={item.type || "text"} name={item.name || "mobile"} />
                                <div className={Styles.dropdown}>
                                    <Dropdown list={dropdown_location} arrow_size='0.7vw' heading='location' setValue={setlocation} />
                                </div>
                            </div>
                           )
                        )
                    })
                }
                {/* <Input left_section="Name" placeholder="Name" type="text" name="name" />
                <Input left_section="" placeholder="Email" type="email" name="email" /> */}
                
                {/* <div className={Styles.textarea}>
                    <TextArea placeholder={"Message"} name={"message"} row={4}/>
                </div> */}
                <div className={Styles.checbox_container}>
                    <input type="checkbox" name="" id="checkbox" /> I agree to Chefkart’s terms of service & Privacy Policy
                </div>
                <Button bgcolor="#E76F51" text={props.form.submit_button || "Submit"} />
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactForm