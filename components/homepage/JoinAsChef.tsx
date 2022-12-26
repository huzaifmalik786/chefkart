import { useRouter } from "next/navigation";
import React from "react";
import Styles from "../../styles/components/homepage/joinaschef.module.scss";

const JoinAsChef = () => {
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h2>
          Be your own boss, earn <br /> money doing what you love
        </h2>
      </div>
      <div className={Styles.btn}>
        <button type="button" onClick={() => router.push("/join-as-chef")}>
          Join As Chef
        </button>
      </div>
    </div>
  );
};

export default JoinAsChef;
