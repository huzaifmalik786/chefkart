import Image from "next/image";
import React from "react";
import Styles from "../../styles/components/homepage/howchefkartworks.module.scss";
import useWindowDimensions from "../WindowSize";

type HowItWorksSteps = {
  img: string;
  num: number;
  text: string;
};

const Steps: HowItWorksSteps[] = [
  {
    img: "/how-it-works-1.svg",
    num: 1,
    text: "Download the app",
  },
  {
    img: "/how-it-works-2.svg",
    num: 2,
    text: "Book your free trial!",
  },
  {
    img: "/how-it-works-3.svg",
    num: 3,
    text: "You’ve been served",
  },
];

const HowChefkartWorks = () => {
  const {width}= useWindowDimensions();
  return (
    <div className={Styles.how_container}>
        <div className={Styles.how_left}>
        <h2>
          How Chefkart <br />
          works
        </h2>
        <p>
          Tell us what you need, and we’ll <br />
          get the best chefs around you to
          <br /> your place.
        </p>
      </div>
      <div className={Styles.how_right}>
        {Steps.map((step) => {
          return (
            <div className={Styles.step} key={step.num}>
              <div className={Styles.step_img}>
                <Image src={step.img} fill alt="how-it-works" />
              </div>
              <div className={Styles.content}>
                <div className={Styles.heading}>
                  <div className={Styles.step_num}>
                        <p>{step.num}</p>
                  </div>
                  <div className={Styles.step_text}>
                    <p>{step.text}</p>
                  </div>
                </div>
                <div className={Styles.icons}>
                  {step.num === 1 && (
                    <span>
                      <Image
                        src={"/apple-vector.svg"}
                          // fill
                          width={24}
                          height={29}
                          alt="apple-icon"
                      />
                      <Image
                        src={"/play-vector.svg"}
                        width={24}
                        height={29}
                        // fill
                        alt="google-play-icon"
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowChefkartWorks;
