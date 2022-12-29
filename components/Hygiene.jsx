import Image from 'next/image'
import React from 'react'
import Styles from '../styles/components/Hygiene.module.scss'



const Hygiene = (props) => {
  return (
    <div className={Styles.hygiene_container} style={{textAlign: `${props.text_align}`}}>
        {/* <div className={Styles.centered}> */}
            <span className={Styles.subheading}>{props.subheading}</span>
            <h3 className={Styles.heading}>{props.heading}</h3>
            <p className={Styles.description}>{props.main_desc}<br /> <span>{props.sub_desc}</span>  </p>
        {/* </div> */}
    </div>
  )
}

export default Hygiene