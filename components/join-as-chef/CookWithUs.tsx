import React from "react";
import Styles from "../../styles/components/join-as-chef/cookwithus.module.scss";

import Image from "next/image";
import { image_type } from "../../interfaces/interfaces";
import Reveal from "../Reveal";

type CookWithUsData = {
	image: image_type;
	heading: string;
	description: string;
};

const WhyUs: CookWithUsData[] = [
	{
		image: {
			data: {
				attributes: {
					url: "/cook-with-us-1.png",
					alternativeText: "",
				},
			},
		},
		heading: "Make money consistently",
		description: `Weekly payments in your bank  account. `,
	},
	{
		image: {
			data: {
				attributes: {
					url: "/cook-with-us-2.png",
					alternativeText: "",
				},
			},
		},
		heading: "Be your own boss",
		description: `You decide when you want to work. As for the other stuff, We’ll help you with `,
	},
	{
		image: {
			data: {
				attributes: {
					url: "/cook-with-us-3.png",
					alternativeText: "",
				},
			},
		},
		heading: "Support at every nook",
		description: `We’ll provide you with the marketing  support so you can focus on what `,
	},
];

type Props = {
	data: {
		heading: string;
		cards: CookWithUsData[];
	};
};

const CookWithUs = (props: Props) => {
	return (
		<div className={Styles.us_wrapper}>
			<Reveal>
				<h2>{props.data.heading || "Why cook with us?"}</h2>
			</Reveal>
			<div className={Styles.cards_wrapper}>
				{(props.data.cards || WhyUs).map((item, index) => (
					<Reveal key={index}>
						<div className={Styles.card}>
							<div>
								<Image
									src={item.image?.data?.attributes?.url}
									alt={item.image?.data?.attributes?.alternativeText || "img"}
									fill
								/>
							</div>
							<h4>{item.heading}</h4>
							<p>{item.description}</p>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
};

export default CookWithUs;
