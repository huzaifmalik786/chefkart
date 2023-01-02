import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/articles/authorBox.module.scss'

const AuthorBox = () => {
  return (
    <div className={Styles.authorBox_container}>
        <div className={Styles.vector}>
            <Image src='/Vector 3.svg' alt="" fill />
        </div>
        <div className={Styles.author_details}>
            <div className={Styles.author_image}>
                <Image src='/Screenshot 2022-11-29 at 2.06 1.png' alt="profile" fill />
            </div>
            <div className={Styles.details_content}>
                <h4>Lorum Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nisi id tortor dapibus, sodales finibus neque suscipit. Sed sodales magna id tincidunt ultricies. Donec semper nunc a mauris </p>
            </div>
        </div>

        <div className={Styles.posted}>
            <div>Posted By: <span>lorem ipsum</span></div>
            <div>Category: <span>lorem ipsum</span></div>
        </div>
        <div className={Styles.vector}>
            <Image src='/Vector 3.svg' alt="" fill />
        </div>
    </div>
  )
}

export default AuthorBox