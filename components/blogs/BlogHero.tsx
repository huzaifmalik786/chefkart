import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "../../styles/components/blogs/bloghero.module.scss";
import UseWindowDimensions from "../WindowSize";

type Props = {
  data: {
    badge: string
    heading: string;
    subheading: {
      text: string;
      highlight: boolean;
    }[]
    button: {
      button_text: string;
    }
  }
};

type styleType = {
  color: string;
  marginTop: string;
  position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  transition: string;
}
const words = ['Anniversary', 'Kitty Parties', 'House Parties', 'Birthday Parties', 'Special Ocassions', 'Something Special'];

const BlogHero = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width}= UseWindowDimensions();


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % words.length);
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])


  const wordElements = words.map((word, index) => {
    const style : styleType = {
      color: '#FF8811',
      marginTop: '',
      position: 'absolute',
      transition: 'margin-top 0.7s, width 0.5s ease-in-out'
    };
    if (index === currentIndex && index===0) {
      style.marginTop = '0px'
      style.position= 'relative'
    } else if(index === currentIndex && index === 1){
      style.marginTop = '0px'
      style.color = '#FF6978'
       style.position= 'relative'
    } else if(index === currentIndex && index === 2){
      style.marginTop = '0px'
      style.color = '#4F4789'
       style.position= 'relative'
    } else if(index === currentIndex && index === 3){
      style.marginTop = '0px'
      style.color = '#214E34'
       style.position= 'relative'
    } else if(index === currentIndex && index === 4){
      style.marginTop = '0px'
      style.color = '#571c5e'
       style.position= 'relative'
    } else if(index === currentIndex && index === 5){
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

    return <div className={Styles.slider_word} key={index} style={style}>{word}</div>;
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
            (props.data?.subheading) ? (
              (props.data?.subheading).map((item, key)=>{
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
        <button>{props.data.button.button_text || "Read More"}</button>
      </div>
      <div className={Styles.hero_img}>
        <Image src={"/blogs_hero.png"} className={Styles.img} alt="chef" fill />
      </div>
    </div>
  );
};

export default BlogHero;
