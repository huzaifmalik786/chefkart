import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/investor-relation/contactForm.module.scss";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import TextArea from "../Forms/TextArea";

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
  }
}
const ContactForm = (props: Props) => {
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
          {props.data?.form_heading || "Please fill out the form below and we will respond within 24hrs."}
        </h3>

        <form action="">
          <Input left_section="Name" type="text" />
          <Input placeholder="9987115132" name="mobile" type='text' />
          <Input type='email' placeholder='Email'  />
          <TextArea row={2} />
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
