import React from 'react'
import Styles from '../../styles/components/forms/input.module.scss'
const TextArea = () => {
  return (
    <div className={Styles.input_container}>
          <textarea name="message" placeholder="Message" rows={4} />
    </div>
  )
}

export default TextArea