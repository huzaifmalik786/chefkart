import React from "react";
import Styles from "../../styles/components/careers/vacancies.module.scss";
import Dropdown from "../Forms/Dropdown";
import JoinOurTeam from "../Forms/JoinOurTeam";

type vacancyType = {
  position: string;
  department: string;
  location: string;
};

const vacancy: vacancyType[] = [
  {
    position: "Lorem ipsum dolor sit amet",
    department: "Lorem ipsum",
    location: "lorem ipsum",
  },
  {
    position: "Lorem ipsum dolor sit amet",
    department: "Lorem ipsum",
    location: "lorem ipsum",
  },
  {
    position: "Lorem ipsum dolor sit amet",
    department: "Lorem ipsum",
    location: "lorem ipsum",
  },
];

const Vacancies = () => {
  return (
    <div className={Styles.vacancy_container}>
      <div className={Styles.heading}>
        <h2>Open Position</h2>
        <p>
          Our values outline who we are, what we hope to accomplish, and most
          crucially,{" "}
        </p>
      </div>

      <div className={Styles.vacancy_body}>
        <div className={Styles.header}>
          <span className={Styles.body_heading}>Recent Openings</span>
          <div className={Styles.dropdown}>
            <Dropdown heading="Select Department" arrow_width="1.04vw" arrow_height="1.04vw" />
          </div>
          <span className={Styles.viewAll}>View all openings &#62;</span>
        </div>

        <div className={Styles.body_rows}>
          {vacancy.map((v, key) => {
            return (
              <div key={key} className={Styles.row_item}>
                <div className={Styles.name}>Lorem ipsum dolor sit amet</div>
                <div className={Styles.second_col}>
                  <div className={Styles.location}>
                    <span>Lorem ipsum </span>
                    <span>City location </span>
                  </div>
                  <button>Apply</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
