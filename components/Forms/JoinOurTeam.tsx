import React, { useState } from 'react'
import { useForm, Resolver } from "react-hook-form";
import Input from './Input';
import Styles from '../../styles/components/forms/jointeam.module.scss'
import FileDropbox from './FileDropbox';
import Button from './Button';
import Modal from '../careers/Modal';
import ThankYou from './ThankYou';

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
        <h2>Join Our Team</h2>

        <form action="" onSubmit={onSubmit}>
            <Input name="name" left_section="Name" type="text"  />
            <Input name="mobile" left_section="+91" type="text"  />
            <Input name="email" type="email" placeholder="Email"  />
            <Input name="location" type="text" placeholder="Current Location"  />
            <Input name="linkedIn" type="url" placeholder="Enter Linkedin url"  />
            <Input name="portfolio" type="url" placeholder="Enter portfolio url"  />

            <FileDropbox />
            <div className={Styles.button}>
                <Button  text="Submit" />
            </div>
        </form>
    </div>
    </>
  )
}

export default JoinOurTeam