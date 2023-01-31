import React from 'react'
import Styles from '../../styles/components/investor-relation/facts.module.scss'

type FactData = {
    heading: string;
    description: string;
  };
  
  const FactArr: FactData[] = [
    {
      heading: "3M+",
      description: "Meals homemade dishes",
    },
    {
      heading: "2500+",
      description: "Verified Home-Chefs",
    },
    {
      heading: "1500+",
      description: "Households trust Chefkart",
    },
    {
      heading: "4.8/5",
      description: " Average Chefkart rating",
    },
  ];
  type Props = {
    bgcolor: string;
    color: string;
    data: FactData[]
  }
const Facts = (props: Props) => {
  return (
    <div className={Styles.facts_container} style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}>
      {(props.data || FactArr).map((item, index) => {
        return (
          <div key={index}>
            <p className={Styles.fact_title}>{item.heading}</p>
            <p className={Styles.fact_description}>{item.description}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Facts