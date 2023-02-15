import React, { useState, useEffect } from "react";
import Styles from "../../styles/components/careers/vacancies.module.scss";
import Dropdown from "../Forms/Dropdown";
import JoinOurTeam from "../Forms/JoinOurTeam";
import { useRouter } from "next/router";
import UseWindowDimensions from "../WindowSize";


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

type openingType = {
  attributes: {
    Position: string;
    subheading: string;
    location: string;
    department: string;
    slug: string;

  }
}
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
    }[];
    button: string;
  }
}

const Vacancies = (props: Props) => {
  const {width} = UseWindowDimensions();

  const [departments, setDepartments] = useState<Set<string>>(new Set());
  const [location, setLocation] = useState<Set<string>>(new Set());

  const [departmentFilter, setDepartmentFilter] = useState<string>("")
  const [locationFilter, setLocationFilter] = useState<string>("")
  const [filterData, setFilteredData] = useState<openingType[]>([])

  

  useEffect(() => {
    const departmentsSet = new Set<string>();
    props.data?.all_openings?.forEach(item => departmentsSet.add(item.attributes.department.toLowerCase()));
    setDepartments(departmentsSet);

    const locationSet = new Set<string>();
    props.data?.all_openings?.forEach(item => locationSet.add(item.attributes.location.toLowerCase()));
    setLocation(locationSet);
  }, [props.data]);

  useEffect(()=>{
    if(departmentFilter === "" && locationFilter === ""){
      setFilteredData(props.data.all_openings)
    }
    else if(departmentFilter !== "" && locationFilter === ""){
        let filteredData = props.data.all_openings.filter((item)=>{
          return item.attributes.department.toLowerCase() === departmentFilter
        })
    
        setFilteredData(filteredData)

    }
    else if(departmentFilter === "" && locationFilter !== ""){
        let filteredData = props.data.all_openings.filter((item)=>{
          return item.attributes.location.toLowerCase() === locationFilter
        })
    
        setFilteredData(filteredData)
    }
    else if(departmentFilter !== "" && locationFilter !== ""){
      let filteredData = props.data.all_openings.filter((item)=>{
        return item.attributes.location.toLowerCase()  === locationFilter && item.attributes.department.toLowerCase() === departmentFilter
      })
  
      setFilteredData(filteredData)
    }
  }, [departmentFilter, props.data.all_openings, locationFilter])
  console.log(departmentFilter)
  const router = useRouter();
  return (
    <div className={Styles.vacancy_container}>
      <div className={Styles.heading}>
        <h2>{props.data?.header_data?.heading || "Open Position"}</h2>
        <p>
          {props.data?.header_data?.description || "Our values outline who we are, what we hope to accomplish, and most crucially,"}
        </p>
      </div>

      <div className={Styles.vacancy_body}>
        <div className={Styles.header}>
          <span className={Styles.body_heading}>{props.data?.header_data?.opening_heading || "Recent Openings"}</span>
          <div className={Styles.dropdown}>
            <Dropdown
            list={Array.from(departments)}
              heading="Select Department"
              arrow_size={width > 450 ? '1.04vw' : '3.6vw'}
              setValue = {setDepartmentFilter}

              
            />
          </div>
          <div className={`${Styles.dropdown} ${Styles.location}`}>
            <Dropdown
            list={Array.from(location)}
              heading="Location"
              arrow_size={width > 450 ? '1.04vw' : '3.6vw'}
              setValue = {setLocationFilter}
            />
          </div>
          <span className={Styles.viewAll}>{props.data?.header_data?.viewAll || "View all openings"} &#62;</span>
        </div>

        <div className={Styles.body_rows}>
          {(filterData || vacancy).map((v, key) => {
            return (
              <div key={key} className={Styles.row_item}>
                <div className={Styles.name}>{v?.attributes?.Position || "Lorem ipsum dolor sit amet dolor sit amet"}</div>
                <div className={Styles.second_col}>
                  <div className={Styles.location}>
                    <span>{v?.attributes?.location || "Lorem ipsum"} </span>
                    <span>City location </span>
                  </div>
                  <button type="button" onClick={() => router.push(`/careers/${v?.attributes?.slug}`)}>
                  {props.data.button || "Apply"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={Styles.body_rows_mobile_only}>
          {
            (filterData ||  vacancy).map((item, key)=>{
              return(
                <div key={key} className={Styles.item}>
                  <div className={Styles.left_section}>
                    <p className={Styles.heading}>{item?.attributes?.department || "lorem ipsum"}</p>
                    <p className={Styles.subheading}>{item?.attributes?.Position || "Lorem ipsum dolor sit amet dolor sit amet"}</p>
                  </div>
                  <button type="button" onClick={() => router.push(`/careers/${item.attributes.slug}`)}>{props.data.button || "Apply"}</button>
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
