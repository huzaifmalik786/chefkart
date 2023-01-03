import React from 'react'
import Styles from '../../styles/components/forms/input.module.scss'

type Props = {
  row: number;
}

const TextArea = (props: Props) => {
  return (
    <div className={Styles.input_container}>
          <textarea name="message" placeholder="Message" rows={props.row} />
    </div>
  )
}

export default TextArea