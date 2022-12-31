import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/components/contact-us/Story.module.scss'
const Story = () => {
  return (
    <div className={Styles.story_container}>
        <div className={Styles.left_section}>
            <p>Our mission is to provide <span>at-home cooking</span>  services in a way that has never been experienced before by empowering millions of cooks across India</p>

            <span className={Styles.line}></span>
            <div className={Styles.image}>
                <Image src='/M_F_Home chef_refine 1.png' alt="chef_photo" fill />

                <div className={Styles.bg_orange}></div>
            </div>
        </div>
        <div className={Styles.right_section}>
            <div className={Styles.image}>
                <Image src='/Image.png' alt="chef_photo" fill />
            </div>
            <p>ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!</p>

            <Link href='/'>Read about our story</Link>
        </div>
    </div>
  )
}

export default Story