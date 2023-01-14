import React from "react";
import Styles from "../../styles/components/investor-relation/contactForm.module.scss";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import TextArea from "../Forms/TextArea";
const ContactForm = () => {
  return (
    <div className={Styles.investor_contactForm}>
      <h2>Restaurant like food, <span>much healthier</span></h2>

      <div className={Styles.form_container}>
        <h3>
          Please fill out the form below and we will respond within 24hrs.{" "}
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
