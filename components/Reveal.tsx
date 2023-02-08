import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
    children: React.ReactNode;
}
const Reveal:React.FC<Props>=({children})=>{
    const ref= useRef(null);
    useEffect(()=>{
        gsap.defaults({ ease: "power3" })
        gsap.set(ref.current, { y: 100,opacity:0 })
        ScrollTrigger.batch(ref.current, {
            onEnter: batch =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: { each: 0.15 },
                overwrite: true,
                duration:0.9,
              }),
            // onEnterBack: batch =>
            //   gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true,duration:0.9 }),
            // onLeaveBack: batch =>
            //   gsap.set(batch, { opacity: 0, y: 50,  stagger: 0.15,overwrite: true,duration:0.9 }),
          })
    },[])
    return(
        <div ref={ref}>{children}</div>
    )

}

export default Reveal;