import React, { useState,useRef,useEffect } from "react";
import Image from "next/image";
import Styles from "../styles/components/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { image_type } from "../interfaces/interfaces";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type HeaderItems = {
  text: string;
  url: string
};

type Props = {
  data : {

    header: {
      nav_links: HeaderItems[],
      button: {
        button_text: string;
      }
      avatar: image_type

    }
    sidebar: {
      links: HeaderItems[]
    }

  }
}
const Header = (props:Props) => {
  console.log(props.data)
gsap.registerPlugin(ScrollTrigger);
  const ref=useRef(null);
  
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();

  const headerItems: HeaderItems[] = [
    {
      text: "Chef On-Demand",
      url: "/chef-on-demand",
    },
    {
      text: "Monthly Subscriptions",
      url: "/pricing",
    },
    {
      text: "Join as Chef",
      url: "/join-as-chef",
    },
  ];

  useEffect(()=>{
    gsap.fromTo(ref.current,{
      top: -15,
      opacity: 0,
      zIndex:-1
    },{
      top:0,
      opacity: 1,
      // paused: true,
      zIndex:100,
      duration: 0.3,
      scrollTrigger: {
        start: 650,
        end: 9999,
        toggleActions: "play none none reverse"
      }
    })
  },[])



  return (
    <>
      <nav className={`${Styles.navbar}`}>
        <div className={Styles.nav_left}>
          <Link href="/">
            {router.pathname === "/" ? (
              <Image
                src={"/Logo.png"}
                alt="chefkart-logo"
                fill
              />
            ) : (
              <Image
                src={"/Logo-yellow.svg"}
                alt="chefkart-logo"
                fill
              />
            )}
          </Link>
        </div>
        <div className={Styles.nav_center}>
          <ul>
            {(props.data?.header?.nav_links ).map((item:HeaderItems, index:number) => {
              // console.log(props.data.header.nav_links)
              return (
                <Link href={item.url} key={index}>
                  <li>{item.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={Styles.nav_right}>
          <button onClick={() => router.push("/contact-us")}>{props.data?.header?.button.button_text || "contact us"}</button>
          <div onClick={() => setOpenSidebar(true)}>
            <Image
              src={props.data?.header?.avatar?.data?.attributes?.url || "/burger-icon.svg"}
              alt={props.data?.header?.avatar?.data?.attributes?.url || "menu-icon"}
              fill
            />
          </div>
        </div>
      </nav>
      {openSidebar && (
        <Sidebar links={props.data?.sidebar?.links} show={openSidebar} hide={() => setOpenSidebar(false)} />
      )}

{/* Animated Navbar */}
      <nav ref={ref} className={`${Styles.navbar} ${Styles.show}`}>
        <div className={Styles.nav_left}>
          <Link href="/">
            {router.pathname === "/" ? (
              <Image
                src={"/Logo-black.svg"}
                alt="chefkart-logo"
                // width={192}
                // height={56}
                fill
              />
            ) : (
              <Image
                src={"/Logo-black.svg"}
                alt="chefkart-logo"
                // width={192}
                // height={56}
                fill
              />
            )}
          </Link>
        </div>
        <div className={Styles.nav_center}>
          <ul>
            {(props.data?.header?.nav_links || headerItems).map((item:HeaderItems, index:number) => {
              return (
                <Link href={item.url} key={index}>
                  <li>{item.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={Styles.nav_right}>
          <button onClick={() => router.push("/contact-us")}>{props.data?.header?.button.button_text || "contact us"}</button>
          <div onClick={() => setOpenSidebar(true)}>
            <Image
              // src={props.data.avatar?.data?.attributes?.url || "/burger-icon-black.svg"}
              src="/burger-icon-black.svg"
              alt={props.data?.header?.avatar?.data?.attributes?.url || "menu-icon"}
              fill
            />
          </div>
        </div>
      </nav>
      {openSidebar && (
        <Sidebar links={props.data?.sidebar?.links} show={openSidebar}  hide={() => setOpenSidebar(false)} />
      )}
    </>
  );
};

export default Header;
