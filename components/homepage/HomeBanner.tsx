import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/homebanner.module.scss";
import useFetchData from '../../lib/api'
import Modal from "../careers/Modal";
import ThankYou from "../Forms/ThankYou";
import ContactForm from "../Forms/ContactForm";

type Props = {
  data : {
    heading: string,
    badge: string,
    subheading: {
      text: string,
      highlight: boolean
    }[],
  button: {
    button_text: string
  }

  image : {
    data:{
      attributes:{
        url: string;
        alternativeText: string;
      }
    }
  }
  }
}

type subheading = {
  text: string;
  highlight: boolean;
}
const HomeBanner = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false)

  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed)
  }

  // console.log(data.data[0].attribute.badge_text)
  
  return (
    <>
    {
      secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal}><ThankYou /></Modal>
    }
    {
      openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ContactForm setOpenModal_two={handlemodalClosed} openModal_two={openModal} /></Modal>
    }
    <div className={Styles.banner}>
      <div className={Styles.banner_img}>
        <Image priority src={props.data.image.data.attributes.url || '/home-main.png'} alt={props.data.image.data.attributes.alternativeText || "banner"} fill  style={{ objectFit: 'cover' }} />
      </div>
      <div className={Styles.overlay}>
        <div className={Styles.content}>
          <div className={Styles.toast}>
            <div className={Styles.icon}>
            <Image
              src={"/toast-burger-icon.svg"}
              alt="taost-icon"
              fill
            />
            </div>
            <p>{props.data?.badge || "Serving with love across NCR"}</p>
          </div>
          <div className={Styles.heading}>
            <h2>
              {/* Lip-smacking homemade <br />
              delicacies served everyday! */}
            {props.data?.heading || "Lip-smacking homemade delicacies served everyday!"}
            </h2>
          </div>
          <div className={Styles.subheading}>
            
            {/* Hire a verified and trained home chef for
              <br />
              <span>1/3rd of the price</span> you spend ordering food online. */}
              { props.data?.subheading ? <h4>{((props.data?.subheading).map((item, key)=>{
                return(
                  <span key={key}>
                  {item.highlight ? <span className={Styles.colored}><br/>{item.text} </span> : item.text }
                  </span>
                )
              }))}</h4> 
              : 
                <h4>Hire a verified and trained homechef for <br /> <span> 1/3rd of the price</span> you spend ordering food online.</h4>
            }
            
          </div>
          <div className={Styles.btn}>
            <button onClick={()=> setOpenModal(true)} >{props.data?.button.button_text || "get in touch" }</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default HomeBanner;





