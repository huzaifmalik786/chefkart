import React, { useEffect, useRef } from "react";
import JoinOurTeam from "../Forms/JoinOurTeam";
import Styles from "../../styles/components/careers/modal.module.scss";

type Props = {
  children: React.ReactNode;
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
};
function disableBodyScroll() {
    document.body.style.overflowY = 'hidden';
  }
  
  function enableBodyScroll() {
    document.body.style.overflowY = 'auto';
  }

const Modal: React.FC<Props> = ({ children, setOpenModal, openModal }) => {
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
            {/* <JoinOurTeam /> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
