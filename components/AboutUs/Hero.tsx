import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/about/hero.module.scss'

type Props = {
    data: {
        badge: string;
        description: string;
        heading: {
            text: string;
            highlight: string;
        }[]
        
        button: string;
        image_front: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        },
        image_back: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                }
            }
        }
    }
}
const Hero = (props: Props) => {
  return (
    <div className={Styles.about_hero}>
        <div className={Styles.description}>
            <div>
                <span className={Styles.badge}>{props.data.badge || "Our Story"}</span>
                <h2>
                {
            (props.data?.heading) ? (
              (props.data?.heading).map((item, key)=>{
                return(
                  <span key={key}>
                    {item.highlight ? <span className={Styles.colored}>{item.text} </span> : item.text }
                  </span>
                )
              })
            ) : (
              <span>We are on a mission to <span className={Styles.colored}>simplify the way India eats</span> </span>
            )
          }
        </h2>
                <p>{props.data?.description || "The best private chefs, cooking in your kitchen."}</p>
                <button>{props.data?.button || "ReQUEST A CALLBACK"}</button>
            </div>
        </div>
        <div className={Styles.images_section}>
            <div className={Styles.rightmost}>
                <Image src={props.data?.image_back?.data?.attributes?.url || '/Rectangle 190.png'} alt="food" fill />
                <div className={Styles.left_image_bg}>
                    <div className={Styles.left_image}>
                        <Image src={props.data?.image_front?.data?.attributes?.url || '/DSCF8347 copy.png'} alt="chef" fill />
                    </div>
                </div>

                <div className={Styles.big_ellipse}>
                    <Image src='/Ellipse 25.png' alt="" fill />
                </div>

                <div className={Styles.small_ellipse}> 
                    <Image src='/Ellipse 26.png' alt="" fill />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero