import React from 'react'
import Styles from "../../styles/components/homepage/facts.module.scss";

const Facts = () => {
  return (
    <div className={Styles.facts_container}>
        <div>
            <p className={Styles.fact_title}>3M+</p>
            <p className={Styles.fact_description}>Meals homemade dishes cooked and served with love </p>
        </div>
        <div>
            <p className={Styles.fact_title}>2500+</p>
            <p className={Styles.fact_description}>Verified & Trained Home-Chefs On-board. </p>
        </div>
        <div>
            <p className={Styles.fact_title}>1500+</p>
            <p className={Styles.fact_description}>Households trust Chefkart with their daily cooking needs</p>
        </div>
        <div>
            <p className={Styles.fact_title}>4.8/5</p>
            <p className={Styles.fact_description}>Average Chefkart rating from thousands of happy customers</p>
        </div>
    </div>
  )
}

export default Facts