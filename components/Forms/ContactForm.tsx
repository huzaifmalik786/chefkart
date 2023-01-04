import React, { useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import Styles from '../../styles/components/forms/contactForm.module.scss'
import Modal from "../careers/Modal";
import Button from "./Button";
import Input from "./Input";
import ThankYou from "./ThankYou";

type FormValues = {
    name: string;
    mobile: number,
    email: string;
    message: string
  };


  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
    };
  };

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const [openModal, setOpenModal] = useState<boolean>(false)


  const onSubmit = (data: any) => {
    data.preventDefault()
    console.log(data);
    setOpenModal(true)
    // send form data to server or perform other actions
  };

  return (
    <>
    {
      openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ThankYou /></Modal>
    }
    <div className={Styles.contact_form}>
      <h2>Please fill out the form below and we will respond within 24hrs. </h2>

      <form onSubmit={onSubmit}>
        <Input left_section="Name" placeholder="" type="text" name="name" />
        {/* {errors.name && <p>Please enter your name</p>} */}

        <Input left_section="+91" placeholder="9987115132" type="text" name="mobile" />

        <Input left_section="" placeholder="Email" type="email" name="email" />

        <div className={Styles.input_container}>
          <textarea name="message" placeholder="Message" rows={4} />
        </div>
        {/* {errors.message && <p>Please enter a message</p>} */}

        <Button text="Submit" />
      </form>

      
    </div>
    </>
  );
};

export default ContactForm;
