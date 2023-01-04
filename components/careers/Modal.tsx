import React, { Children, useEffect, useRef } from 'react'
import JoinOurTeam from '../Forms/JoinOurTeam'
import Styles from '../../styles/components/careers/modal.module.scss'

type Props = {
    children: React.ReactNode;
  };

  


const Modal: React.FC<Props> = ({ children}) => {
    // const ref = useRef<HTMLDivElement>(null);

    // const handleClickOutside = (event: MouseEvent) => {
    //     if (ref.current && !ref.current.contains(event.target as Node)) {
    //       onClose()
    //     }
    //   };
    
    //   useEffect(() => {
    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //       document.removeEventListener("click", handleClickOutside);
    //     };
    //   }, []);
  return (
    <div className={Styles.modal_container}>

        <div className={Styles.modal}>
            {/* <JoinOurTeam /> */}
            {children}
        </div>
    </div>
  )
}

export default Modal