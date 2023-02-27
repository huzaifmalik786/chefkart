import React from "react";
import Image from "next/image";
import Styles from "../../styles/components/homepage/foreveryonetab.module.scss";
import useFetchData from "../../lib/api";
import { image_type } from "../../interfaces/interfaces";
import Reveal from "../Reveal";

type Props = {
  tab: number;
  tab_data: {
      heading: string,
      description: string
      image: image_type
    }[]
};

const ForEveryOneTab = (props: Props) => {

  return (
    <div>
    {
      props.tab_data.map((i, key)=>{
        return(
          <div key={key}>
          {
            props.tab === key && (
              <div className={Styles.tab}>
            <Reveal  key={key}>
              <div className={Styles.tab_img}>
                <Image
                  src={i?.image?.data?.attributes?.url || '/for-moms.png'}
                  alt="for-moms-img"
                  // width={612}
                  // height={572}
                  fill
                />
              </div>
              </Reveal>
              <Reveal>
              <div className={Styles.tab_text}>
                <h3>
                  {
                    i?.heading || "No more tedious chores and worrying what to make"
                  }
                  
                  <br />
                </h3>
                <p>
                  {
                    i?.description || "Leave your cooking worries to our chefs - just say the word and our trained chefs"
                  }
                  
                </p>
              </div>
              </Reveal>
    </div>
            )
          }
          </div>
        )
      })
    }
    </div>
  )
};

export default ForEveryOneTab;
