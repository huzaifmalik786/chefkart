import React from 'react'
import Styles from '../../styles/components/about/founder.module.scss'
import { ProfileCardType } from '../../interfaces/interfaces';
import FounderCarousel from '../FounderCarousel';

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]

    array: ProfileCardType[]
  }
}

const Founder = (props: Props) => {
  return (
    <div className={Styles.founder}>
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
              <span>The People Behind <span className={Styles.colored}>Chefkart</span></span>
            )
          }
          </h2>

        <div className={Styles.carousel}>
          <FounderCarousel data={props.data.array} />
        </div>
    </div>
  )
}

export default Founder