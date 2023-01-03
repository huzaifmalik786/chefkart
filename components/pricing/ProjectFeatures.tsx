import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/pricing/projectFeatures.module.scss'

type feature = {
    feature: string;
    popular: boolean;
    premium: boolean;
}

const feature_array:feature[] = [
    {
        feature: "Certified Home chefs",
        popular: true,
        premium: true,
    },
    {
        feature: "Monthly Starchef Visits",
        popular: true,
        premium: true,
    },
    {
        feature: "Homecooked & Nutritious meals",
        popular: true,
        premium: true,
    },
    {
        feature: "Customizable Menu - Everyday",
        popular: true,
        premium: true,
    },
    {
        feature: "Free Deep Kitchen Cleans",
        popular: false,
        premium: false,
    },
]
const ProjectFeatures = () => {
    const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4'];
  return (
    <div className={Styles.project_feature_container}>
        <p className={Styles.sub_heading}>Get the details you need to purchase</p>
        <h4 className={Styles.heading}>An overview of what’s included</h4>


        <table className={Styles.table}>
            <tbody>
                <tr>
                    <th>Project Features</th>
                    <th className={Styles.popular}>Popular</th>
                    <th className={Styles.premium}>Premium</th>
                </tr>

                {
                    feature_array.map((i, key)=>{
                        return(
                            <tr key={key}>
                                <td style={key%2?{}:{backgroundColor: "#FAFAFA"}} className={Styles.feature_name}>{i.feature}</td>
                                
                                <td style={key%2?{}:{backgroundColor: "#FAFAFA"}}>{i.popular &&  <div className={Styles.checked}><Image fill src='/Vector (9).png' alt="" /></div>}</td>
                                
                                <td style={key%2?{backgroundColor: "#eeeeee"}:{}}>{i.premium &&  <div className={Styles.checked}><Image fill src='/Vector (9).png' alt="" /></div>}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td></td>
                    <td ><button className={Styles.get_started_popular}>Get Started</button> </td>
                    <td className={Styles.premium_btn}><button className={Styles.get_started_premium}>Get Started</button></td>
                </tr>
            </tbody>
            
            
        </table>

    </div>
  )
}

export default ProjectFeatures