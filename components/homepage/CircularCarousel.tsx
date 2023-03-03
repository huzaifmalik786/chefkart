import Image from "next/image";
import Styles from "../../styles/components/homepage/circularCarousel.module.scss";
import React, { useState, useEffect } from "react";
import { image_type } from "../../interfaces/interfaces";

// const items = [
// 	{ id: 1, title: "Slide 1", src: "/food-1.png" },
// 	{ id: 2, title: "Slide 2", src: "/food-2.png" },
// 	{ id: 3, title: "Slide 3", src: "/food-3.png" },
// 	{ id: 4, title: "Slide 4", src: "/food-4.png" },
// 	{ id: 5, title: "Slide 5", src: "/food-5.png" },
// 	{ id: 6, title: "Slide 3", src: "/food-3.png" },
// ];

type Props = {
	data: {
		image: image_type
	}[]
	plate: image_type
}

export default function CircularCarousel(props: Props) {

	const items = props.data.map((i, key)=>{
		return(
			{
				id: key+1,
				title: i.image?.data?.attributes?.alternativeText || "",
				src: i.image?.data?.attributes?.url
			}
		)
	})
	
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(4);
	const [currentSlides, setCurrentSlides] = useState<any>([]);
	const [autoPlay, setAutoPlay] = useState(true);
	const [items2, setItems] = useState<any>([]);

	const handleAutoPlay = () => {
		setAutoPlay(!autoPlay);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleNext = () => {
		const nextSlides = [];
		let ci = currentIndex === items.length ? 0 : currentIndex;

		if (ci <= items.length - 4) {
			setCurrentSlides(items.slice(ci, ci + 4));
			setCurrentIndex(ci + 1);
			return;
		}

		for (let i = ci; i < items.length; i++) {
			nextSlides.push(items[i]);
		}
		const to = 4 - nextSlides.length;

		for (let i = 0; i < to; i++) {
			nextSlides.push(items[i]);
		}
		setCurrentSlides(nextSlides);
		setCurrentIndex(ci + 1);
	};

	useEffect(() => {
		setCurrentSlides(items.slice(0, 4));
		setCurrentIndex(1);
	}, []);

	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(handleNext, 2000);
			return () => clearInterval(interval);
		}
	}, [autoPlay, handleNext]);


// console.log(temp_array)

	return (
		<>
			<div>
				<div className={Styles.myswiper}>
					<div className={Styles.plate}>
					{props.plate?.data && <Image src={props.plate?.data?.attributes?.url} alt={props.plate?.data?.attributes?.alternativeText || ""} fill />}	

					</div>
					{currentSlides.map((item: any, index: any) => (
						<div
							key={item?.id}
							className={
								index === 2
									? `${Styles.active}`
									: index === 1
									? `${Styles.left} `
									: index == 0
									? `${Styles.left_out}`
									: `${Styles.right}`
							}
						>
							<Image
								src={item?.src}
								alt={item?.title}
								fill
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
