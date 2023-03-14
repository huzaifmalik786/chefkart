import React, { useEffect, useState,useRef } from "react";
import Image from "next/image";
import Styles from "../../styles/components/blogs/bloghero.module.scss";
import UseWindowDimensions from "../WindowSize";
import Link from "next/link";
import { image_type } from "../../interfaces/interfaces";

type Props = {
  data: {
    badge: string
    heading: string;
    description: {
      text: string;
      highlight: boolean;
    }[]
    button: {
      text: string;
      url: string;
    }
    slider: {
        text: string
    }[]
    video: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
    image: image_type;
  }
};

type styleType = {
  color: string;
  marginTop: string;
  position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  transition: string;
}

const BlogHero = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
const words = ['Anniversary', 'Kitty Parties', 'House Parties', 'Birthday Parties', 'Special Ocassions', 'Something Special'];
const items = props?.data?.slider.map((item, key)=>{
  return(
    {
      word: item.text
    }
  )
})

  const {width}= UseWindowDimensions();
  const [paused, setPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePause = () => {
    if(videoRef.current){
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPaused(false)
      } else {
        videoRef.current.pause();
        setPaused(true)
  
      }

    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items?.length);
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])


  const wordElements = (items)?.map((word, index) => {
    const style : styleType = {
      color: '#FF8811',
      marginTop: '',
      position: 'absolute',
      transition: 'margin-top 0.7s, width 0.5s ease-in-out'
    };
    if (index === currentIndex && index%6 ===0) {
      style.marginTop = '0px'
      style.position= 'relative'
    } else if(index === currentIndex && index%6 === 1){
      style.marginTop = '0px'
      style.color = '#FF6978'
       style.position= 'relative'
    } else if(index === currentIndex && index%6 === 2){
      style.marginTop = '0px'
      style.color = '#4F4789'
       style.position= 'relative'
    } else if(index === currentIndex && index%6 === 3){
      style.marginTop = '0px'
      style.color = '#214E34'
       style.position= 'relative'
    } else if(index === currentIndex && index%6 === 4){
      style.marginTop = '0px'
      style.color = '#571c5e'
       style.position= 'relative'
    } else if(index === currentIndex && index%6 === 5){
      style.marginTop = '0px'
      style.color = '#2D4739'
       style.position= 'relative'
    }
    else {
      if(width<=450){
        style.marginTop = `${index > currentIndex ? "7.47vw" : `-8.47vw`}`;
      }
      else{
        style.marginTop = `${index > currentIndex ? "3.47vw" : `-4.47vw`}`;
      }
    }
    //  else {
    //   style.marginTop = `${index > currentIndex ? '3.47vw' : `-4.47vw`}`
    // }

    return <div className={Styles.slider_word} key={index} style={style}>{word.word}</div>;
  });

  return (
    <div className={Styles.hero_wrapper}>
      <div className={Styles.hero_content}>
        <p className={Styles.label}>{props.data?.badge || "Blog" }</p>
        <div className={Styles.h2}>
          {props.data?.heading || "Book a Trained Chef for your"} <div className={Styles.slider}>{wordElements}</div>
        </div>
        <h4>
        {
            (props.data?.description) ? (
              (props.data?.description).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>Food that makes your guests go <span className={Styles.colored}> UMAAAHHH!!</span> Hire a verified chef for your special occasions.</span>
            )
          }
          
        </h4>
        <Link href={props.data?.button?.url || "#"}>
        <button>{props.data?.button?.text || "Read More"}</button>
        
        </Link>
      </div>
      {/* <div className={Styles.hero_img}>
        <Image src={"/blogs_hero.png"} className={Styles.img} alt="chef" fill />
      </div> */}
        {props.data?.video?(
      <div className={Styles.video_container}>
           <video
           ref={videoRef}
           src={props.data?.video?.data?.attributes?.url}
           loop
           className={Styles.video}
         />
         <div
         className={Styles.pause_button}
           onClick={togglePause}
         >
           {paused ? <Image src={'/Play Button Circled.svg'} alt="" fill /> : ""}
         </div>  
      </div>
        ):(
          <div className={Styles.hero_img}>
            <Image src={props.data?.image?.data?.attributes?.url || "/blogs_hero.png"} alt="chef" fill/>
          </div>
        )}
       
    </div>
  );
};

export default BlogHero;
