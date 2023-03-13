import React, { useContext, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import Styles from '../../styles/components/forms/contactForm.module.scss'
import Button from "./Button";
import Input from "./Input";
import { ModalContext} from "../ModalContext";
import TextArea from "./TextArea";
import Image from "next/image";


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

  type Props={

    openModal_two?: boolean;
    setOpenModal_two ?: (open:boolean)=> void;
    closeModal ?: (open:boolean)=>void;
    crossButton? : boolean;
    data: {
      heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      submit_button: string;
    }
  }
const ContactForm = (props: Props) => {
  const modalContext= React.useContext(ModalContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });


  const onSubmit = (data: any) => {
    data.preventDefault()
    if(modalContext.setModalOpen && props.crossButton===false){
      modalContext.setModalOpen(true);
    }
    if(props.setOpenModal_two){
      props.setOpenModal_two(false)
    }
    // send form data to server or perform other actions
  };
  const handleClick= (data: any) =>{
    data.preventDefault();
    if(props.closeModal){
      props.closeModal(false);
    }
  }

  return (
    <>
    <div className={Styles.contact_form}>
      {props.crossButton===false?(
       <></>
      ):(
        <button type="button" className={Styles.cross_icon} onClick={handleClick}>
        <Image src="/Icon.svg" alt="" fill />
    </button>
      )}
      <div className={Styles.text}>
        <h2>{props.data?.heading || "Please fill out the form below and we will respond within 24hrs."} </h2>
      </div>
      

      <form onSubmit={onSubmit}>

        {
          props.data?.inputs?.map((item, key)=>{
            return(
        item.type !== "textarea" ? <Input key={key} placeholder={item.placeholder || "Name"} type={item.type || "text"} name={item.name || "name"} /> : <TextArea key={key} placeholder={item.placeholder || "Message"} name={item.name || "message"} row={4}/>

            )
          })
        }
        {/* <Input placeholder="Name" type="text" name="name" /> */}
        {/* {errors.name && <p>Please enter your name</p>} */}

        {/* <Input placeholder="9987115132" type="text" name="mobile" /> */}

        {/* <Input left_section="" placeholder="Email" type="email" name="email" /> */}

        {/* <div className={Styles.input_container}>
          <textarea name="message" placeholder="Message" rows={4} />
        </div> */}

        {/* {errors.message && <p>Please enter a message</p>} */}

        <Button text={props.data?.submit_button || "Submit"} />
      </form>

      
    </div>
    </>
  );
};

export default ContactForm;
