import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/forms/input.module.scss'

const Input = (props: any) => {
  return (
    <div className={Styles.input_container}>
        {props.left_section && <span>{props.left_section} &nbsp;</span> }
        <input name={props.name} placeholder={props.placeholder} type={props.type} />
        {props.type === 'url' && <div className={Styles.link_icon}><Image src='/link.png' alt="" fill /></div>}
    </div>
  )
}

export default Input