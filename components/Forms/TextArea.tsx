import React from 'react'
import Styles from '../../styles/components/forms/input.module.scss'

type Props = {
  row: number;
  placeholder: string;
  name: string;
}

const TextArea = (props: Props) => {
  return (
    <div className={Styles.input_container}>
          <textarea name={props.name} placeholder={props.placeholder} rows={props.row} />
    </div>
  )
}

export default TextArea