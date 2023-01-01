import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/forms/filedropbox.module.scss'
const FileDropbox = () => {
  return (
    <div className={Styles.dropbox_container}>
        <div className={Styles.content}>
            <div className={Styles.icon}>
                <Image src='/upload.png' alt="" fill />
            </div>
            <p>Upload your resume</p>

        </div>
    </div>
  )
}

export default FileDropbox