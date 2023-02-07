import React, { useState, useEffect } from "react";
import Styles from "../../styles/components/careers/vacancies.module.scss";
import Dropdown from "../Forms/Dropdown";
import JoinOurTeam from "../Forms/JoinOurTeam";
import { useRouter } from "next/router";


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

type Props = {
  data: {
    header_data: {
      heading: string;
      description: string;
      opening_heading: string;
      viewAll: string;
    }
    all_openings: {
      attributes: {
        Position: string;
        subheading: string;
        location: string;
        department: string;
        slug: string;

      }
    }[]
  }
}

const Vacancies = (props: Props) => {

  const [departments, setDepartments] = useState<Set<string>>(new Set());
  const [location, setLocation] = useState<Set<string>>(new Set());

  useEffect(() => {
    const departmentsSet = new Set<string>();
    props.data.all_openings.forEach(item => departmentsSet.add(item.attributes.department.toLowerCase()));
    setDepartments(departmentsSet);

    const locationSet = new Set<string>();
    props.data.all_openings.forEach(item => locationSet.add(item.attributes.location.toLowerCase()));
    setLocation(locationSet);
  }, [props.data]);


  const router = useRouter();
  console.log(props.data?.header_data)
  return (
    <div className={Styles.vacancy_container}>
      <div className={Styles.heading}>
        <h2>{props.data.header_data?.heading || "Open Position"}</h2>
        <p>
          {props.data?.header_data?.description || "Our values outline who we are, what we hope to accomplish, and most crucially,"}
        </p>
      </div>

      <div className={Styles.vacancy_body}>
        <div className={Styles.header}>
          <span className={Styles.body_heading}>{props.data.header_data.opening_heading || "Recent Openings"}</span>
          <div className={Styles.dropdown}>
            <Dropdown
            list={Array.from(departments)}
              heading="Select Department"
              arrow_width="1.04vw"
              arrow_height="1.04vw"
            />
          </div>
          <div className={`${Styles.dropdown} ${Styles.location}`}>
            <Dropdown
            list={Array.from(location)}
              heading="Location"
              arrow_width="1.04vw"
              arrow_height="1.04vw"
            />
          </div>
          <span className={Styles.viewAll}>{props.data.header_data.viewAll || "View all openings"} &#62;</span>
        </div>

        <div className={Styles.body_rows}>
          {(props.data.all_openings || vacancy).map((v, key) => {
            return (
              <div key={key} className={Styles.row_item}>
                <div className={Styles.name}>{v.attributes.Position || "Lorem ipsum dolor sit amet dolor sit amet"}</div>
                <div className={Styles.second_col}>
                  <div className={Styles.location}>
                    <span>{v.attributes.location || "Lorem ipsum"} </span>
                    <span>City location </span>
                  </div>
                  <button type="button" onClick={() => router.push(`/careers/${v.attributes.slug}`)}>
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={Styles.body_rows_mobile_only}>
          {
            (props.data.all_openings || vacancy).map((item, key)=>{
              return(
                <div key={key} className={Styles.item}>
                  <div className={Styles.left_section}>
                    <p className={Styles.heading}>{item.attributes.department}</p>
                    <p className={Styles.subheading}>{item.attributes.Position}</p>
                  </div>
                  <button type="button" onClick={() => router.push(`/careers/${item.attributes.slug}`)}>Apply</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
