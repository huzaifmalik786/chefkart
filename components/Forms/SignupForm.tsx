import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import Styles from '../../styles/components/forms/signup.module.scss'
import Button from './Button'
import Image from 'next/image'
type Props = {
    openModal: boolean;
    setOpenModal: (open:boolean)=> void;
    closeModal: (open:boolean)=> void;

    form: {
        heading: string;
      inputs: {
        placeholder: string;
        name: string;
        type: string;
      }[]
      terms_condition_check: string;
      submit_button: string;
    }
  }

const dropdown_location = ["lorem ipsum", "lorem ipsum"]


const SignupForm = (props:Props) => {
    const [location, setlocation] = useState<string>("")

    const handleSubmit = (data: any) => {
        // send form data to server or perform other actions
        props.setOpenModal(false)
        console.log("submite",data.name, data.target.name.value)
    
      };

  return (
    <div className={Styles.form_container}>
            {/* <div className={Styles.modal_header}> */}
                <button type="button" className={Styles.cross_icon} onClick={()=> props.closeModal(false)}>
                    <Image src="/Icon.svg" alt="" fill />
                </button>
            {/* </div> */}
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputs}>
                    {
                        props.form?.inputs.map((item, key)=>{
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
                    {/* <Input left_section="Name" placeholder="" type="text" name="name" />
                    <Input left_section="" placeholder="Email" type="email" name="email" /> */}
                    {/* <div className={Styles.two_input}>
                        <Input placeholder="9987115132" type="text" name="mobile" />
                        <div className={Styles.dropdown}>
                            <Dropdown list={dropdown_location} arrow_size='0.7vw' heading='location' setValue={setlocation} />
                        </div>

                    </div> */}

                    <div className={Styles.checbox_container}>
                        <input type="checkbox" name="" id="checkbox" /> {props.form?.terms_condition_check || "I agree to Chefkart’s terms of service & Privacy Policy"}
                    </div>
                </div>

                <Button bgcolor="#E5871C" text={props.form?.submit_button || "Submit"} />
            </form>
        </div>
  )
}

export default SignupForm