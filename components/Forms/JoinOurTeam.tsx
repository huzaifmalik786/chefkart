import React, { useState } from 'react'
import { useForm, Resolver } from "react-hook-form";
import Input from './Input';
import Styles from '../../styles/components/forms/jointeam.module.scss'
import FileDropbox from './FileDropbox';
import Button from './Button';
import Modal from '../careers/Modal';
import ThankYou from './ThankYou';
import { image_type } from '../../interfaces/interfaces';
import Image from 'next/image';

type FormValues = {
    name: string;
    mobile: number,
    email: string;
    location: string;
    linkedIn: string;
    portfolio: string;
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
type Props = {
  openModal: boolean;
  setOpenModal: (open:boolean)=> void;
  closeModal: (open:boolean) =>void

  form: {
    heading: string;
    inputs: {
      label: string;
      placeholder: string;
      name: string;
      type: string;
      icon: image_type
    }[]
    submit_button: string;
  }
}
const JoinOurTeam = (props: Props) => {
  const { handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  

  const onSubmit = (data: any) => {
    // send form data to server or perform other actions
    props.setOpenModal(false)
    console.log("submite",data.name, data.target.name.value)

  };

  return (
    <>

    <div className={Styles.join_team_form}>
        <h2>{props.form.heading || "Join Our Team"}</h2>
        <button type="button" className={Styles.cross_icon} onClick={()=> props.closeModal(false)}>
            <Image src="/Icon.svg" alt="" fill />
        </button>

        <form action="" onSubmit={onSubmit}>
          {
            props.form.inputs.map((item, key)=>{
              return(
                <div key={key} className={Styles.input_label_container}>
                  <label className={Styles.label} htmlFor="">{item.label || "Name"}</label>
                  <Input name={item.name || "name"} placeholder={item.placeholder || "Name"} type={item.type || "text"} icon={item?.icon?.data?.attributes?.url}  />
                </div>
              )
            })
          }
          {/* <div className={Styles.input_label_container}>
            <label className={Styles.label} htmlFor="">Name</label>
            <Input name="name" placeholder="Name" type="text"  />
          </div>
          <div className={Styles.input_label_container}>
            <label className={Styles.label} htmlFor="">Email</label>
            <Input name="email" type="email" placeholder="Email"  />
          </div>

          <div className={`${Styles.input_label_container} ${Styles.desktop_only}`}>
            <label className={Styles.label} htmlFor="">Mobile</label>
            <Input name="mobile" type="text"  />
          </div>

          <div className={Styles.input_label_container}>
            <label className={Styles.label} htmlFor="">Current Location</label>
            <Input name="location" type="text" placeholder="Current Location"  />
          </div>

          <div className={Styles.input_label_container}>
            <label className={Styles.label} htmlFor="">Linkedin url</label>
            <Input name="linkedIn" type="url" placeholder="Enter Linkedin url"  />
          </div>

          <div className={Styles.input_label_container}>
            <label className={Styles.label} htmlFor="">Portfolio url</label>
            <Input name="portfolio" type="url" placeholder="Enter portfolio url"  />
          </div> */}


          

            <FileDropbox />
            <div className={Styles.button}>
                <Button  text={props.form.submit_button || "Submit"} />
            </div>
        </form>
    </div>
    </>
  )
}

export default JoinOurTeam