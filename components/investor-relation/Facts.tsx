import React from 'react'
import Styles from '../../styles/components/investor-relation/facts.module.scss'

type FactData = {
    title: string;
    desc: string;
  };
  
  const FactArr: FactData[] = [
    {
      title: "3M+",
      desc: "Meals homemade dishes",
    },
    {
      title: "2500+",
      desc: "Verified Home-Chefs",
    },
    {
      title: "1500+",
      desc: "Households trust Chefkart",
    },
    {
      title: "4.8/5",
      desc: " Average Chefkart rating",
    },
  ];
  type Props = {
    bgcolor: string;
    color: string;
  }
const Facts = (props: Props) => {
  return (
    <div className={Styles.facts_container} style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}>
      {FactArr.map((item, index) => {
        return (
          <div key={index}>
            <p className={Styles.fact_title}>{item.title}</p>
            <p className={Styles.fact_description}>{item.desc}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Facts