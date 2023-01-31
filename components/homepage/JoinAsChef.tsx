import { useRouter } from "next/navigation";
import React from "react";
import Styles from "../../styles/components/homepage/joinaschef.module.scss";

type Props={
  data: {
    heading: string;
    button: {
      button_text: string;
    }
  }
}
const JoinAsChef = (props: Props) => {
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h2>
          {
            props.data.heading || "Be your own boss, earn money doing what you love"
          }
          
        </h2>
      </div>
      <div className={Styles.btn}>
        <button type="button" onClick={() => router.push("/join-as-chef")}>
          {props.data.button.button_text || "Join As Chef"}
        </button>
      </div>
    </div>
  );
};

export default JoinAsChef;
