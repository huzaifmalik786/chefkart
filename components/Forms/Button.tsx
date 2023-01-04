import React from 'react'
import Styles from '../../styles/components/forms/button.module.scss'
import {useRouter} from 'next/router';

const Button = (props: any) => {
  const router = useRouter();
  return (

    <button onClick={()=> router.push('/thank-you')} className={Styles.form_button} type="submit" style={{backgroundColor: `${props.bgcolor}`}}>{props.text}</button>
  )
}

export default Button