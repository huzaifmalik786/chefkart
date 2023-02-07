import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/articles/commentbox.module.scss'
import UseWindowDimensions from '../WindowSize'
const CommentBox = () => {
    const {width}= UseWindowDimensions();
  return (
    <div className={Styles.comment_box_container}>
        

        <div className={Styles.comment_box}>
            <div className={Styles.comment_profile}>
                <Image src='/Ellipse 32.png' alt="" fill />
            </div>
            <div className={Styles.comment}>
                <div className={Styles.header}>
                    <h4>Lorum Ipsum</h4>
                    {width<=450?(
                    <div></div>
                    ):(
                    <span>03:00 pm Wednesday</span>
                    )}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nisi id tortor dapibus, sodales finibus neque suscipit. Sed sodales magna id tincidunt ultric</p>
                {width<=450?(
                    <div className={Styles.bottom_content}>
                        <div className={Styles.like_icon}>
                            <Image src='/Facebook Like.png' alt="" fill />
                        </div>
                        <span>03:00 pm Wednesday</span>
                    </div>
                ):(
                <div className={Styles.like_icon}>
                    <Image src='/Facebook Like.png' alt="" fill />
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default CommentBox