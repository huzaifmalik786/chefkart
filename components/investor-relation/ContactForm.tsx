import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/investor-relation/contactForm.module.scss";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import TextArea from "../Forms/TextArea";
import { ModalContext } from '../ModalContext'

type Props = {
  data: {
    form_heading: string;
    banner_heading: {
      text: string;
      highlight: boolean;
    }[]
    banner_image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  },
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
const ContactForm = (props: Props) => {
  const modalContext= React.useContext(ModalContext);
  const onSubmit = (data: any) => {
    data.preventDefault()
    console.log("submite",data.name, data.target.name.value)
    if(modalContext.setModalOpen){
      modalContext.setModalOpen(true);
    }

  };
  return (
    <div className={Styles.investor_contactForm}>
      <div className={Styles.banner}>
        <Image src={props.data?.banner_image?.data?.attributes?.url || '/Rectangle 185.png'} alt={props.data.banner_image?.data?.attributes?.alternativeText || ""} fill />
      </div>
      <h2>
      {
            (props.data?.banner_heading) ? (
              (props.data?.banner_heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Restaurant like food, <span className={Styles.colored}>much healthier</span></span>
            )
          }
        </h2>

      <div className={Styles.form_container}>
        <h3>
          {props.form?.heading || "Please fill out the form below and we will respond within 24hrs."}
        </h3>

        <form onSubmit={onSubmit}>
          {
            props.form.inputs.map((item, key)=> {
              return(
                item.type !== "textarea" ? <Input key={key} placeholder={item.placeholder || "Name"} type={item.type || "text"} name={item.name || "name"} /> : <TextArea placeholder={item.placeholder || "Name"} name={item.name || "name"} row={2} />
              )
            })
          }
          {/* <Input placeholder="Name" type="text" />
          <Input placeholder="9987115132" name="mobile" type='text' />
          <Input type='email' placeholder='Email'  /> */}
          
          <Button text={props.form.submit_button || "Submit"} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
