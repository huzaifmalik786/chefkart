import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/investor-relation/banner.module.scss'
type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    img: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }
}
const Banner = (props: Props) => {
  return (
    <div className={Styles.banner_container}>
        <div className={Styles.banner}>
          <div className={Styles.banner_img}>
            <Image src={props.data?.img?.data?.attributes?.url || "/BG (1).png"} alt={props.data?.img?.data?.attributes?.alternativeText || ""} fill />
          </div>
            <p>
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
              <span>This is just the beginning with many more milestones & funding to come.</span>
            )
          }</p>
        </div>
    </div>
  )
}

export default Banner