import { type } from "os";
import React, { useEffect, useState } from "react";
import useFetchData from "../../lib/api";
import Styles from "../../styles/components/homepage/facts.module.scss";

type FactData = {
  id: number,
  attributes : {
    [key: string]: string;
  }

};

// const FactArr: FactData[] = [
//   {
//     title: "3M+",
//     desc: "Meals homemade dishes cooked and served with love",
//   },
//   {
//     title: "2500+",
//     desc: "Verified & Trained Home-Chefs On-board.",
//   },
//   {
//     title: "1500+",
//     desc: "Households trust Chefkart with their daily cooking needs",
//   },
//   {
//     title: "4.8/5",
//     desc: " Average Chefkart rating from thousands of happy customers",
//   },
// ];
type Props = {
  bgcolor: string;
  color: string;
}
let factData: FactData[] = []
const Facts = (props: Props) => {

  const { data, loading, error } = useFetchData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/facts`)
  const [factData, setFactData] = useState<FactData[]>([])

  useEffect(() => {
    if(data){
      setFactData(data.data);
      console.log(data)
  }
  }, [data])

  return (
    <div className={Styles.facts_container} style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}>
      {factData.map((item, index) => {
        return (
          <div key={index}>
            <p className={Styles.fact_title}>{item.attributes.Number}</p>
            <p className={Styles.fact_description}>{item.attributes.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Facts;
