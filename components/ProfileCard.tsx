import React from "react";
import Image from "next/image";
import Styles from "../styles/components/profileCard.module.scss";
import { ProfileCardType } from "../interfaces/interfaces";
import Link from "next/link";

type Props = {
  card: ProfileCardType;
};

const ProfileCard = (props: Props) => {
  return (
    <div className={Styles.profile_item}>
      <div className={Styles.image}>
        <Image src={props.card.image} alt="founder_image" fill />
      </div>

      <div className={Styles.content}>
        <p className={Styles.name}>{props.card.name}</p>
        <p className={Styles.designation}>{props.card.designation}</p>
      </div>

      <div className={Styles.social}>
        <Link href={props.card.twitter_link}>
            <div className={Styles.social_icon}>
            <Image src="/twitter.png" alt="twitter" fill />
            </div>
        </Link>
        <Link href={props.card.linkedin_link}>
            <div className={Styles.social_icon}>
            <Image src="/Vector (10).png" alt="linkedin" fill />
            </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
