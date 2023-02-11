import React from "react";
import Styles from "../../styles/components/join-as-chef/simplifyway.module.scss";

type Props = {
  data: {
    heading: {
      text: string;
      highlight: boolean;
    }[]
    description: string;
  }
};

const SimplifyWay = (props: Props) => {
  return (
    <div className={Styles.content_wrapper}>
      <div className={Styles.heading_div}>
        <h2>
        {props.data?.heading ? (
                  props.data.heading.map((item, key) => {
                    return (
                      <span key={key}>
                        {item.highlight ? (
                          <span className={Styles.colored}>
                            {/* <br /> */}
                            {item.text}{" "}
                          </span>
                        ) : (
                          item.text
                        )}
                      </span>
                    );
                  })
                ) : (
                  <span>
                    Join us on a mission to
                    <span className={Styles.colored}> simplify the way {"\n"}India eats</span>
                    
                  </span>
                )}
        </h2>
      </div>
      <div className={Styles.text_div}>
        <p>
          {props.data.description || "Chefkart connects talented cooks with local customers. We believe in providing the chefs in our community — the opportunity to make a meaningful income by doing what they love!"}
        </p>
      </div>
    </div>
  );
};

export default SimplifyWay;
