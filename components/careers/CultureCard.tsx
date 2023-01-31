import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/culturecard.module.scss";
import { CultureCardType } from "../../interfaces/interfaces";

type Props = {
  card: CultureCardType;
  bg_color: string;
  index: number;
};
const CultureCard = (props: Props) => {
  return (
    <div
      className={Styles.culture_card}
      style={{ backgroundColor: props.bg_color }}
    >
      <div className={Styles.card_text}>
        <h5>{"0" + props.index}</h5>
        <p>{props.card.text}</p>
      </div>
      <div className={Styles.card_img}>
        <Image src={props.card.image.data.attributes.url} alt="Synchronize" fill />
      </div>
    </div>
  );
};

export default CultureCard;
