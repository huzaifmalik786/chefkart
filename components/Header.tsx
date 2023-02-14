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
      logo: {
        white_logo: image_type;
        black_logo: image_type;
        yellow_logo: image_type;
      };
      white_burger_icon: image_type;
      black_burger_icon: image_type

    }
    sidebar: {
      links: HeaderItems[]
    }

  }
}
const Header = (props:Props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref=useRef(null);
  
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openAnimatedSidebar, setOpenAnimatedSidebar] = useState<boolean>(false);
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
      zIndex:100,
      duration: 0.3,
      scrollTrigger: {
        start: 650,
        end: 9999,
        toggleActions: "play none none reverse"
      }
    })
  },[])
console.log(props.data.header)


  return (
    <>
      <nav className={`${Styles.navbar}`}>
        <div className={Styles.nav_left}>
          <Link href="/">
            {router.pathname === "/" ? (
              <Image
                src={props.data.header.logo.white_logo.data.attributes.url || "/Logo.png"}
                alt="chefkart-logo"
                fill
              />
            ) : (
              <Image
                src={props.data.header.logo.yellow_logo.data.attributes.url || "/Logo-yellow.svg"}
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
              src={props.data?.header?.white_burger_icon?.data?.attributes?.url || "/burger-icon.svg"}
              alt={props.data?.header?.white_burger_icon?.data?.attributes?.url || "menu-icon"}
              fill
            />
          </div>
        </div>
      </nav>
      {openSidebar && (
        <Sidebar links={props.data?.sidebar?.links} navlinks={props.data?.header?.nav_links} show={openSidebar} hide={() => setOpenSidebar(false)} />
      )}

  {/* Animated Navbar */}
      <nav ref={ref} className={`${Styles.navbar} ${Styles.show}`}>
        <div className={Styles.nav_left}>
          <Link href="/">
            {router.pathname === "/" ? (
              <Image
                src={props.data.header.logo.black_logo.data.attributes.url || "/Logo-black.svg"}
                alt="chefkart-logo"
                // width={192}
                // height={56}
                fill
              />
            ) : (
              <Image
                src={props.data.header.logo.black_logo.data.attributes.url || "/Logo-black.svg"}
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
          <div onClick={() => setOpenAnimatedSidebar(true)}>
            <Image
              // src={props.data.avatar?.data?.attributes?.url || "/burger-icon-black.svg"}
              src={props.data?.header?.black_burger_icon?.data?.attributes?.url || "/burger-icon-black.svg"}
              alt={props.data?.header?.black_burger_icon?.data?.attributes?.url || "menu-icon"}
              fill
            />
          </div>
        </div>
      </nav>
      {openAnimatedSidebar && (
        <Sidebar links={props.data?.sidebar?.links} navlinks={props.data?.header?.nav_links} show={openAnimatedSidebar} hide={() => setOpenAnimatedSidebar(false)} />
      )}
    </>
  );
};

export default Header;
