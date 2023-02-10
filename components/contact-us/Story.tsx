import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import Styles from '../../styles/components/contact-us/Story.module.scss'
import UseWindowDimensions from '../WindowSize'
import Reveal from '../Reveal'
const Story = () => {
    const [hidden1,sethidden1]= useState(false);
    const [hidden2,sethidden2]= useState(false);
    const content1="Our mission is to provide at-home cooking services in a way that has never been experienced before by empowering millions of cooks across India"
    const content2="ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!"
  return (
    <div className={Styles.story_container}>
        <Reveal>
        {/* {width<=450?(
        <div className={Styles.left_section} style={{flexDirection: "column-reverse"}}>
                <span className={Styles.line}></span>
                <div>
                    <p>{content1.substring(0,62)}
                    <button  onClick={()=>sethidden1("button")}><span>{hidden1!="button"?"...Read More":""}</span></button>
                    <span className={Styles.extracontent}>{hidden1!="content"?`${content1.substring(62)}`:""}</span></p>
                </div>
          
            <div className={Styles.image}>
                <Image src='/M_F_Home chef_refine 1.png' alt="chef_photo" fill />
                <div className={Styles.bg_orange}></div>
            </div>
        </div>
        ):( */}
        {/* <div className={Styles.left_section} >
            <div className={Styles.content}>
                <p>Our mission is to provide <span className={Styles.colored}>at-home cooking</span> services in a way that has never been experienced before by empowering millions of cooks across India</p>
                <span className={Styles.line}></span>
            </div>
            <div className={Styles.image}>
                <Image src='/M_F_Home chef_refine 1.png' alt="chef_photo" fill />
                <div className={Styles.bg_orange}></div>
            </div>
        </div> */}
        <div className={Styles.left_section}>
            <div className={Styles.content}>
                <p>{(content1).substring(0, 62)}<span style={hidden1? {display: "none"} : {}} onClick={()=> sethidden1(true)} className={Styles.content_button}>..Read more</span><span style={hidden1 ? {display: "inline"} : {}} className={Styles.extracontent}>{(content1).substring(62)}</span></p>
                <span className={Styles.line}></span>
            </div>
            <div className={Styles.image}>
                <Image src='/M_F_Home chef_refine 1.png' alt="chef_photo" fill />
                <div className={Styles.bg_orange}></div>
            </div>
        </div>
      </Reveal>

        <div className={Styles.right_section} >
            <div className={Styles.image}>
                <Image src='/Image.png' alt="chef_photo" fill />
            </div>
            <Reveal>
                <p>{(content2).substring(0, 52)}<span style={hidden2? {display: "none"} : {}} onClick={()=> sethidden2(true)} className={Styles.content_button}>..Read more</span><span style={hidden2 ? {display: "inline"} : {}} className={Styles.extracontent}>{(content2).substring(52)}</span></p>
            </Reveal>


            <Link href='/'>Read about our story</Link>
        </div>
    </div>
  )
}

export default Story