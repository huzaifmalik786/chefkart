import React from "react";
import Image from "next/image";

import Styles from "../../styles/components/careers/culturecard.module.scss";
import { CultureCardType } from "../../interfaces/interfaces";

type Props = {
  card: CultureCardType;
};

const CultureCard = (props: Props) => {
  return (
    <div
      className={Styles.culture_card}
      style={{ backgroundColor: props.card.color }}
    >
      <div className={Styles.card_text}>
        <h5>{props.card.num}</h5>
        <p>{props.card.title}</p>
      </div>
      <div className={Styles.card_img}>
        <Image src={props.card.img} alt="Synchronize" fill />
      </div>
    </div>
  );
};

export default CultureCard;
