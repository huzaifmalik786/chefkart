import React, { useEffect, useRef } from "react";
import Styles from "../../styles/components/careers/modal.module.scss";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
  hidebutton?: boolean
};
function disableBodyScroll() {
    document.body.style.overflowY = 'hidden';
  }
  
  function enableBodyScroll() {
    document.body.style.overflowY = 'auto';
  }

const Modal: React.FC<Props> = ({ children, setOpenModal, openModal, hidebutton }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    
    if((event?.target as HTMLInputElement)?.id === 'modal'){
        setOpenModal(!openModal)
    }
  };
  useEffect(() => {
    // Disable body scroll when modal is opened
    disableBodyScroll();

    // Re-enable body scroll when modal is closed
    return () => {
      enableBodyScroll();
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {openModal && (
        <div className={Styles.modal_container}>
          <div className={Styles.modal} ref={ref} id="modal">
            {/* <div> */}
            <div className={Styles.modal_header}>
              {!hidebutton?
              <button type="button" className={Styles.back_icon} onClick={()=> setOpenModal(false)}>
              <Image src="/Icon (1).svg" alt="" fill />
            </button>
            :<span/>
              }
              
              <button type="button" className={Styles.cross_icon} onClick={()=> setOpenModal(false)}>
                <Image src="/Icon.svg" alt="" fill />
              </button>
            </div>
            {children}
          {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
