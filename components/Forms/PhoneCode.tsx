import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneCode = () => {
  const [value, setValue] = useState()
  return (
    <PhoneInput
    readOnly
    style={{width: '5.8vw'}}
    defaultCountry="IN"
    international
    withCountryCallingCode
      value={value}
      onChange={()=> setValue}/>
  )
}

export default PhoneCode