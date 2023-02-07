import React from 'react'
import Styles from '../../styles/components/articles/commentInput.module.scss'
import UseWindowDimensions from '../WindowSize'
const CommentInput = () => {
  const {width}= UseWindowDimensions();
  return (
    <div className={Styles.comment_input_container}>
      {width<=450?(
    <>
      <div className={Styles.input_box}>
        <input  type="text" placeholder='Be the first to comment' />
      </div>
      <div className={Styles.button}>
        <button>Comment</button>
      </div>
    </>
      ):(
      <div className={Styles.input_box}>
        <input  type="text" placeholder='Be the first to comment' />
        <button>Comment</button>
      </div>
      )}
      
    </div>
  )
}

export default CommentInput