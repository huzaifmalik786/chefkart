import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/about/hero.module.scss'
const Hero = () => {
  return (
    <div className={Styles.about_hero}>
        <div className={Styles.description}>
            <div>
                <span className={Styles.badge}>Our Story</span>
                <h2>We are on a mission to <span>simplify the way India eats</span> </h2>
                <p>The best private chefs, cooking in your kitchen.</p>
                <button>ReQUEST A CALLBACK</button>
            </div>
        </div>
        <div className={Styles.images_section}>
            <div className={Styles.rightmost}>
                <Image src='/Rectangle 190.png' alt="food" fill />
                <div className={Styles.left_image_bg}>
                    <div className={Styles.left_image}>
                        <Image src='/DSCF8347 copy.png' alt="chef" fill />
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