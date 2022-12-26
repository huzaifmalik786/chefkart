import React from "react";
import Styles from "../../styles/components/homepage/booktrial.module.scss";

const BookTrial = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p>What are you waiting for, when it’s</p>
        <h1>
          Good Food. Good
          <br />
          People. Good Life.{" "}
        </h1>
        <button>Book a Trial</button>
      </div>
    </div>
  );
};

export default BookTrial;
