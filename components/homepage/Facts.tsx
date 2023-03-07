import { type } from "os";
import React, { useEffect, useState } from "react";
import useFetchData from "../../lib/api";
import Styles from "../../styles/components/homepage/facts.module.scss";
import Reveal from "../Reveal";

type FactData = {
	heading: string;
	description: string;
};

const FactArr: FactData[] = [
	{
		heading: "3M+",
		description: "Meals homemade dishes cooked and served with love",
	},
	{
		heading: "2500+",
		description: "Verified & Trained Home-Chefs On-board.",
	},
	{
		heading: "1500+",
		description: "Households trust Chefkart with their daily cooking needs",
	},
	{
		heading: "4.8/5",
		description: " Average Chefkart rating from thousands of happy customers",
	},
];
type Props = {
	bgcolor: string;
	color: string;
	px: string;
	py: string;
	data: {
		heading: string;
		description: string;
	}[];
};

const Facts = (props: Props) => {
	return (
		<div
			className={Styles.facts_container}
			style={{
				backgroundColor: `${props.bgcolor}`,
				color: `${props.color}`,
				padding: `${props.py} ${props.px}`,
			}}
		>
			{(props.data || FactArr).map((item, index) => {
				return (
					<Reveal key={index}>
						<div className={Styles.fact}>
							<p className={Styles.fact_title}>{item.heading}</p>
							<div className={Styles.description}>
								<p className={Styles.fact_description}>{item.description}</p>
							</div>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
};

export default Facts;
