import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { image_type } from '../../interfaces/interfaces'
import Styles from '../../styles/components/about/hero.module.scss'
import Modal from '../careers/Modal'
import ThankYou from '../Forms/ThankYou'
// import ContactForm from './ContactForm'
import ContactForm from "../Forms/ContactForm";

type Props = {
    data: {
        badge: string;
        description: string;
        heading: {
            text: string;
            highlight: string;
        }[]
        
        button: {
            text: string;
            url: string;
        };
        
        image_front: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        },
        image_back: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        }
    }
    form?: {
        heading: string;
          inputs: {
            placeholder: string;
            name: string;
            type: string;
          }[]
          submit_button: string;
    }
    thankYou?: {
    heading: string;
    subheading: string;
    link: {
        text: string;
        url: string;
    }
    icon: image_type
    }
}
const Hero = (props: Props) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [secondModal, setSecondModal] = useState<boolean>(false)
  
    const handlemodalClosed = (closed:boolean)=>{
      setOpenModal(closed);
      setSecondModal(!closed)
    }
  return (
    <>
    {
      props.thankYou && secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal} hidebutton><ThankYou closeModal={setSecondModal} data={props.thankYou} /></Modal>
    }
    {
      props.form && openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}><ContactForm data={props.form} setOpenModal_two={handlemodalClosed} openModal_two={openModal} closeModal={setOpenModal}/></Modal>
    }
    <div className={Styles.about_hero}>
        <div className={Styles.description}>
            <div>
                <span className={Styles.badge}>{props.data.badge || "Our Story"}</span>
                <h2>
                {
            (props.data?.heading) ? (
              (props.data?.heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>We are on a mission to <span className={Styles.colored}>simplify the way India eats</span> </span>
            )
          }
        </h2>
                <p>{props.data?.description || "The best private chefs, cooking in your kitchen."}</p>
                {props.data?.button?.url?(
               <Link href={props.data?.button?.url}> <button onClick={()=> setOpenModal(true)}>{props.data?.button?.text || "ReQUEST A CALLBACK"}</button></Link>

                ):(
                    <button onClick={()=> setOpenModal(true)}>{props.data?.button?.text || "ReQUEST A CALLBACK"}</button>
                )}
            </div>
        </div>
        <div className={Styles.images_section}>
            <div className={Styles.rightmost}>
                <Image src={props.data?.image_back?.data?.attributes?.url} alt="food" fill />
                <div className={Styles.left_image_bg}>
                    <div className={Styles.left_image}>
                        <Image src={props.data?.image_front?.data?.attributes?.url} alt="chef" fill />
                    </div>
                </div>

                <div className={Styles.big_ellipse}>
                    <Image src='/Ellipse 25.png' alt="" fill />
                </div>

                <div className={Styles.small_ellipse}> 
                    <Image src='/Ellipse 26.png' alt="" fill />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero