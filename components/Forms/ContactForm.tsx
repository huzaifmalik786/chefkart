import React from "react";
import { useForm, Resolver } from "react-hook-form";
import Styles from '../../styles/components/forms/contactForm.module.scss'
import Input from "./Input";

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

  const onSubmit = (data: any) => {
    console.log(data);
    // send form data to server or perform other actions
  };

  return (
    <div className={Styles.contact_form}>
      <h2>Please fill out the form below and we will respond within 24hrs. </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input left_section="Name" placeholder="" type="text" name="name" />
        {/* {errors.name && <p>Please enter your name</p>} */}

        <Input left_section="+91" placeholder="9987115132" type="text" name="mobile" />

        <Input left_section="" placeholder="Email" type="email" name="email" />

        <div className={Styles.input_container}>
          <textarea name="message" placeholder="Message" rows={4} />
        </div>
        {/* {errors.message && <p>Please enter a message</p>} */}

        <button type="submit">Submit</button>
      </form>

      
    </div>
  );
};

export default ContactForm;
