import { type } from 'os';
import React from 'react'
import Styles from "../../styles/components/careers/noopenpositionbanner.module.scss";

type Props={
  data: {
    heading: string;
    description: string;
  }
}
function NoOpenPositionBanner(props: Props) {
  return (
    <div className={Styles.banner}>
      <div>      
          <h1>{props.data?.heading || "No open positions..."}</h1>
          <p>{props.data?.description}</p>
        </div>
    </div>
  )
}

export default NoOpenPositionBanner