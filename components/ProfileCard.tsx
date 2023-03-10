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
        <Image src={props.card?.image?.data?.attributes?.url} alt="founder_image" fill />
      </div>

      <div className={Styles.content}>
        <p className={Styles.name}>{props.card.name}</p>
        <p className={Styles.designation}>{props.card?.designation}</p>
      </div>
      <div className={Styles.social}>
      {
        (props.card?.social_media).map((item, key)=>{
          return(
            <Link href={item.url} key={key}>
            <div className={Styles.social_icon}>
            <Image src={item?.icon?.data?.attributes?.url} alt={item?.icon?.data?.attributes?.url || ""} fill />
            </div>
        </Link>
          )
        })
      }
      </div>
    </div>
  );
};

export default ProfileCard;
