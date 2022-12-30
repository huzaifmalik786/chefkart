import React from 'react'
import Styles from '../../styles/components/forms/button.module.scss'

const Button = (props: any) => {
  return (

    <button className={Styles.form_button} type="submit" style={{backgroundColor: `${props.bgcolor}`}}>{props.text}</button>
  )
}

export default Button