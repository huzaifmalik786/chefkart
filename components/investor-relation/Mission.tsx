import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/components/investor-relation/mission.module.scss'
import Facts from './Facts'

type Props = {
  data: {
    subheading: string;
    heading : {
      text: string;
      highlight: boolean;
    }[]
    Link: {
      text: string;
      url: string;
    }
    Facts: {
      heading: string;
      description: string;
    }[]
  }
}
const Mission = (props: Props) => {
  return (
    <div className={Styles.mission_container}>
        <div className={Styles.left_content}>
            <p>{props.data?.subheading || "Our mission"}</p>
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
              <span>A homely restaurant experience - from our chefs in your kitchen</span>
            )
          }
              </h2>
            <Link href={props.data?.Link?.url}>{props.data?.Link?.text || "A letter from our CEO"}</Link>
        </div>
        <div className={Styles.right_content}>
            <Facts data={props.data?.Facts} bgcolor='#ECECEC' color='#2D4739' />
        </div>
        <Link className={Styles.mobile_only_link} href={props.data?.Link?.url}>{props.data?.Link?.text || "A letter from our CEO"}</Link>
    </div>
  )
}

export default Mission