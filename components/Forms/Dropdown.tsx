import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import Styles from '../../styles/components/forms/dropdown.module.scss'



const Dropdown = () => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const ref = useRef(null);
    const [dropdownValue, setDropdownValue] = useState<string>('')

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenDropdown(false)
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
   
  return (
    <div className={Styles.dd_wrapper} ref={ref}>
        <div className={Styles.dd_header} onClick={()=> setOpenDropdown(!openDropdown)}>
            <div className={Styles.dd_header_title}>Select Department</div>
            <div className={Styles.arrow}>
                <Image src='/arrow_forward_ios.svg' alt="" fill />
            </div>
        </div>
        {
            openDropdown && <div className={Styles.dd_list}>
            <div className={Styles.dd_list_item}>l1</div>        
            <div className={Styles.dd_list_item}>l1</div>        
            <div className={Styles.dd_list_item}>l1</div>        
        </div>
        } 
    </div>
  )
}

export default Dropdown