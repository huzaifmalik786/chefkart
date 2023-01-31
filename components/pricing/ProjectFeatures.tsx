import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/pricing/projectFeatures.module.scss'
import { table_content } from '../../interfaces/interfaces'

const feature_array:table_content[] = [
    {
        content: "Certified Home chefs",
        Popular: true,
        Premium: true,
    },
    {
        content: "Monthly Starchef Visits",
        Popular: true,
        Premium: true,
    },
    {
        content: "Homecooked & Nutritious meals",
        Popular: true,
        Premium: true,
    },
    {
        content: "Customizable Menu - Everyday",
        Popular: true,
        Premium: true,
    },
    {
        content: "Free Deep Kitchen Cleans",
        Popular: false,
        Premium: false,
    },
]

type Props = {
    data : {
        subheading: string;
        heading: string;
        feature_col_heading: string;
        popular_col_heading: string;
        premium_col_heading: string;
        features: table_content[];
        button: {
            button_text: string;
        }
    }
}
const ProjectFeatures = (props : Props) => {
    const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4'];
  return (
    <div className={Styles.project_feature_container}>
        <p className={Styles.sub_heading}>{props.data?.subheading || "Get the details you need to purchase"}</p>
        <h4 className={Styles.heading}>{props.data?.heading || "An overview of what’s included"}</h4>


        <table className={Styles.table}>
            <tbody>
                <tr>
                    <th>{props.data?.feature_col_heading || "Project Features"}</th>
                    <th className={Styles.popular}>{props.data?.popular_col_heading || "Popular"}</th>
                    <th className={Styles.premium}>{props.data?.premium_col_heading || "Premium"}</th>
                </tr>

                {
                   (props.data?.features || feature_array).map((i, key)=>{
                        return(
                            <tr key={key}>
                                <td style={key%2?{}:{backgroundColor: "#FAFAFA"}} className={Styles.feature_name}>{i.content}</td>
                                
                                <td style={key%2?{}:{backgroundColor: "#FAFAFA"}}>{i.Popular &&  <div className={Styles.checked}><Image fill src='/Vector (9).png' alt="" /></div>}</td>
                                
                                <td style={key%2?{backgroundColor: "#eeeeee"}:{}}>{i.Premium &&  <div className={Styles.checked}><Image fill src='/Vector (9).png' alt="" /></div>}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td></td>
                    <td ><button className={Styles.get_started_popular}>{props.data?.button?.button_text || "Get Started"}</button> </td>
                    <td className={Styles.premium_btn}><button className={Styles.get_started_premium}>{props.data?.button?.button_text || "Get Started"}</button></td>
                </tr>
            </tbody>
            
            
        </table>

    </div>
  )
}

export default ProjectFeatures