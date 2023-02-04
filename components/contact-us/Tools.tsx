import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/contact-us/tools.module.scss'

type Props = {
    top: string;
    left: string;
}
const Tools = (props: Props) => {
  return (
    <div className={Styles.tools_container} style={{left: `${props.left}`, top: `${props.top}`}}> 
        <div className={Styles.tools_subcontainer} style={{left: `${props.left}`, top: `${props.top}`}}>
            <div className={Styles.text}>
                <span>lorem ipsum</span>
                <p>lorem ipsum lorem ipsum </p>
                <p>lorem ipsum lorem ipsum</p>
            </div>
            <div className={Styles.navigation}>
                <Image src='/Navigation.svg' alt="" fill />
            </div>
        </div>
    </div>
  )
}

export default Tools