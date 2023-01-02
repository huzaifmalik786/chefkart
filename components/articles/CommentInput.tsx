import React from 'react'
import Styles from '../../styles/components/articles/commentInput.module.scss'
const CommentInput = () => {
  return (
    <div className={Styles.comment_input_container}>
      <div className={Styles.input_box}>
        <input  type="text" placeholder='Be the first to comment' />
        <button>Comment</button>
      </div>
    </div>
  )
}

export default CommentInput