import React from 'react'
import FounderCarousel from '../FounderCarousel'
import Styles from '../../styles/components/careers/founder.module.scss'
import { ProfileCardType } from '../../interfaces/interfaces'

type Props={
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
  
    profile: ProfileCardType[]

  }
}
const Founders = (props: Props) => {
  console.log(props.data.profile)
  return (
    <div className={Styles.career_founder}>
        <div className={Styles.heading}>
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
              <span><span className={Styles.colored}>Chefkart</span> Co - founders</span>
            )
          }
              </h2>
        </div>
        <FounderCarousel data={props.data.profile} />
    </div>
  )
}

export default Founders