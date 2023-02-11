import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import Styles from '../../styles/components/contact-us/Story.module.scss'
import UseWindowDimensions from '../WindowSize'
import Reveal from '../Reveal'
import { image_type } from '../../interfaces/interfaces'
type Props = {
  data: {
    description: {
      text: string;
      highlight: boolean;
    }[]

    image: image_type

  }[]
  link: {
    text: string;
    url: string;
  }
}
const Story = (props: Props) => {
    const [hidden1,sethidden1]= useState(false);
    const [hidden2,sethidden2]= useState(false);
    const content1= props.data[0].description.map(d => d.text).join("") || "Our mission is to provide at-home cooking services in a way that has never been experienced before by empowering millions of cooks across India"

    const content2= props.data[1].description.map(d => d.text).join("") || "ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!"
  return (
    <div className={Styles.story_container}>
        <Reveal>
        <div className={Styles.left_section}>
            <div className={Styles.content}>
                <p className={Styles.desktop_only}>
                {
                        (props.data[0]?.description) ? (
                          (props.data[0]?.description).map((item, key)=>{
                            return(
                              <span key={key}>
                                {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                              </span>
                            )
                          })
                        ) : (
                          <span>Our mission is to provide <span className={Styles.colored}>at-home cooking</span> services in a way that has never been experienced before by empowering millions of cooks across India</span>
                        )
                }
                </p>
                {/* only for mobile */}
                <p className={Styles.mobile_only}>{(content1).substring(0, 62)}<span style={hidden1? {display: "none"} : {}} onClick={()=> sethidden1(true)} className={Styles.content_button}>..Read more</span><span style={hidden1 ? {display: "inline"} : {}} className={Styles.extracontent}>{(content1).substring(62)}</span></p>
                <span className={Styles.line}></span>
            </div>
            <div className={Styles.image}>
                <Image src={props.data[0].image.data.attributes.url || '/M_F_Home chef_refine 1.png'} alt="chef_photo" fill />
                <div className={Styles.bg_orange}></div>
            </div>
        </div>
      </Reveal>

        <div className={Styles.right_section} >
            <div className={Styles.image}>
                <Image src={props.data[1].image.data.attributes.url || '/Image.png'} alt={props.data[1].image.data.attributes.alternativeText || "chef_photo"} fill />
            </div>
            <Reveal>
            <p className={Styles.desktop_only}>
                {
                        (props.data[1]?.description) ? (
                          (props.data[1]?.description).map((item, key)=>{
                            return(
                              <span key={key}>
                                {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                              </span>
                            )
                          })
                        ) : (
                          <span>ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!</span>
                        )
                }
                </p>
                <p className={Styles.mobile_only}>{(content2).substring(0, 52)}<span style={hidden2? {display: "none"} : {}} onClick={()=> sethidden2(true)} className={Styles.content_button}>..Read more</span><span style={hidden2 ? {display: "inline"} : {}} className={Styles.extracontent}>{(content2).substring(52)}</span></p>
            </Reveal>


            <Link href={props.link.text || '#'}>{props.link.text || "Read about our story"}</Link>
        </div>
    </div>
  )
}

export default Story