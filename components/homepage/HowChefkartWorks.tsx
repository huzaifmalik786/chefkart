import Image from "next/image";
import React from "react";
import { image_type } from "../../interfaces/interfaces";
import Styles from "../../styles/components/homepage/howchefkartworks.module.scss";
import UseWindowDimensions from "../WindowSize";
import Reveal from "../Reveal";

type HowItWorksSteps = {
	image: image_type;
	text: string;
};

const Steps: HowItWorksSteps[] = [
	{
		text: "Download the app",
		image: {
			data: {
				attributes: {
					url: "/how-it-works-1.svg",
					alternativeText: "",
				},
			},
		},
	},
	{
		text: "Book your free trial!",
		image: {
			data: {
				attributes: {
					url: "/how-it-works-2.svg",
					alternativeText: "",
				},
			},
		},
	},
	{
		text: "You’ve been served",
		image: {
			data: {
				attributes: {
					url: "/how-it-works-3.svg",
					alternativeText: "",
				},
			},
		},
	},
];

type Props = {
	data: {
		brief: {
			heading: string;
			description: string;
		};
		steps: {
			text: string;
			image: image_type;
		}[];
		download_icon: {
			icon: image_type;
		}[];
	};
};

const HowChefkartWorks = (props: Props) => {
	const { width } = UseWindowDimensions();
	return (
		<div className={Styles.how_container}>
			<Reveal>
				<div className={Styles.how_left}>
					<h2>{props.data?.brief.heading || "How Chefkart works"}</h2>
					<p>
						{props.data.brief.description ||
							"Tell us what you need, and we’ll get the best chefs around you to your place."}
					</p>
				</div>
			</Reveal>
			<div className={Styles.how_right}>
				{(props.data.steps || Steps).map((step, key) => {
					return (
						<Reveal key={key}>
							<div className={Styles.step}>
								<div className={Styles.step_img}>
									<Image
										src={step.image.data.attributes.url}
										fill
										alt={
											step.image.data.attributes.alternativeText ||
											"how-it-works"
										}
									/>
								</div>
								<div className={Styles.content}>
									<div className={Styles.heading}>
										<div className={Styles.step_num}>
											<p>{key + 1}</p>
										</div>
										<div className={Styles.step_text}>
											<p>{step.text}</p>
											{key === 0 && (
												<div className={Styles.icons}>
													<span>
														<Image
															src={
																props.data.download_icon[0].icon.data.attributes
																	.url || "/apple-vector.svg"
															}
															// fill
															width={24}
															height={29}
															alt="apple-icon"
														/>
														<Image
															src={
																props.data.download_icon[1].icon.data.attributes
																	.url || "/play-vector.svg"
															}
															width={24}
															height={29}
															// fill
															alt="google-play-icon"
														/>
													</span>
												</div>
											)}
										</div>
									</div>
								</div>
								{/* <div className={Styles.content}>
                <div className={Styles.heading}>
                  <div className={Styles.step_num}>
                        <p>{step.num}</p>
                  </div>
                  <div className={Styles.step_text}>
                    <p>{step.text}</p>
                  </div>
                </div>
                <div className={Styles.icons}>
                  {step.num === 1 && (
                    <span>
                      <Image
                        src={"/apple-vector.svg"}
                          // fill
                          width={24}
                          height={29}
                          alt="apple-icon"
                      />
                      <Image
                        src={"/play-vector.svg"}
                        width={24}
                        height={29}
                        // fill
                        alt="google-play-icon"
                      />
                    </span>
                  )}
                </div>
              </div> */}
							</div>
						</Reveal>
					);
				})}
			</div>
		</div>
	);
};

export default HowChefkartWorks;
