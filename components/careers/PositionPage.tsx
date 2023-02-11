import Image from "next/image";
import React, { useState } from "react";
import Styles from "../../styles/components/careers/positionPage.module.scss";
import { useRouter } from "next/router";
import Modal from "./Modal";
import JoinOurTeam from "../Forms/JoinOurTeam";
import ThankYou from "../Forms/ThankYou";
import Reveal from "../Reveal";

const positionDetails = {
  position: "Software Engineer",
  sub_heading: "Backend, Engineering in Bangalore, India",
  type: "Full-time · Junior",
  about_the_role:
    "Marketing Data Platform team is growing rapidly and seeking a software engineer who will collaborate with product      managers, engineering teams, and 3rd party providers to ensure that ad measurement and products are operating seamlessly across the world. As part of our Marketing Data Platform team, this position is essential to ensuring that we have a platform that the team is focussed on providing a first class self-serve data platform for all of marketing performance measurement needs, which has data quality built in. If you are interested in making a direct impact on the company's bottom line, join the Ad Tech team. Uber is on track to spend hundreds of millions of dollars in marketing in 2021. A 10% improvement in return on investment on this spend saves the company hundreds of millions of dollars and directly speeds up the company's path to profitability. Help us build the software systems that will make this happen. The team is still in its early stages, so you can drive products from inception to adoption and further iterations.",

  what_candidate_need:
    "Work with product managers, architects and engineering managers to understand and define product requirements and roadmaps\nTechnically lead one or more teams to deliver features across Uber's entire technical stack\nAdapt to meet the needs of our massive growth and rapidly evolving systems.\nWrite maintainable and extensible code with high quality tests and documentation.\nUnderstand and use existing systems efficiently, contributing to them where necessary\nShip high quality products with an eye on scale, reliability and engineering excellence\nBuild and work with real-time services along with batch data pipelines that track and attribute ad spend to actions that Uber users take (e.g. take rides, eats orders, etc.).\nWork on systems that will use advanced machine learning techniques to optimize spend within different channels\nBuild real time systems that can handle millions of TPS in sub 10ms latency\nBuild systems that detect ad fraud and help us eliminate ad networks that are only here to rob us of our money.\nBuild systems that get us free traffic (SEO and content) instead of having us pay other ad networks for it.\nBuild systems that will help us target the right kind of potential users.This involves working with datasets that are world population scale (billions of rows).",

  qualifications:
    "Architecture: Knowledge of data structures and an eye for architecture. You can discuss the tradeoff between architectural choices, both on a theoretical level and on an applied level.\nStrong coding/debugging abilities: You have advanced knowledge of at least one programming language, and are happy to learn more. Our core languages are Python, Golang and Java.\nBig data: Experience with Distributed system such as Hadoop, Hive, Spark, Kafka, Vertica is preferred.\nData pipeline: Strong understanding in SQL, Database. Experience in building data pipeline is nice to have. Love getting your hands dirty with the data implementing custom ETLs to shape it into information.\nFast learner: We're looking for software engineers who thrive on learning new technologies and don't believe in one-size-fits-all solutions. You should be able to adapt easily to meet the needs of our massive growth and rapidly evolving business environment.\nA great teammate: You believe that you can achieve more on a team -- that the whole is greater than the sum of its parts. You rely on others' candid feedback for continuous improvement.\nDesign and business acumen: You understand requirements beyond the written word. Whether you're working on an API used by other developers, an internal tool consumed by our operation teams, or a feature used by millions of customers, your attention to details leads to a delightful user experience.",

  conclusion:
    "we reimagine the way the world moves for the better. The idea was born on a snowy night in Paris in 2008, and ever since then, our DNA of reimagination and reinvention carries on. We’ve grown into a global platform moving people and things in ever-expanding ways, taking on big problems to help drivers, riders, delivery partners, and eaters make movement happen at the push of a button for everyone, everywhere.We welcome people from all backgrounds who seek the opportunity to help build a future where everyone and everything can move independently. If you have the curiosity, passion, and collaborative spirit, work with us, and let’s move the world forward, together.Offices continue to be central to collaboration and Uber’s cultural identity. Unless formally approved to work fully remotely, Uber expects employees to spend at least half of their work time in their assigned office. For certain roles, such as those based at green-light hubs, employees are expected to be in-office for 100% of their time. Please speak with your recruiter to better understand in-office expectations for this role.",
};

type Props = {
  data: {
    Position: string;
    subheading: string;
    type: string;
    location: string;
    Content: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  }

}

const PositionPage = (props: Props) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [secondModal, setSecondModal] = useState<boolean>(false)
  function handleClose(){
    setOpenModal(false)
  }

  const handlemodalClosed = (closed:boolean)=>{
    setOpenModal(closed);
    setSecondModal(!closed)
  }
  return (
    <>
    {
      secondModal && <Modal openModal={secondModal} setOpenModal={setSecondModal}><ThankYou /></Modal>
    }

    {
      openModal && <Modal setOpenModal={setOpenModal} openModal={openModal}><JoinOurTeam setOpenModal={handlemodalClosed} openModal={openModal} /> </Modal>
    }
    <div className={Styles.positionPage}>
      <header>
        <div>
          <h1>{props.data?.Position || positionDetails.position}</h1>
          <p>{props.data?.subheading || positionDetails.sub_heading}</p>
          <div className={Styles.type}>
            <div className={Styles.icon}>
              <Image src="/Shape.png" alt="" fill />
            </div>
            <span>{props.data?.type || positionDetails.type}</span>
          </div>
        </div>
        <div>
          <button onClick={()=> setOpenModal(true)}>Apply now</button>
        </div>
      </header>
      <div className={Styles.main}>
        {/* <div className={Styles.section}>
          <h2>About the Role</h2>
          <p>{positionDetails.about_the_role}</p>
        </div>
        <div className={Styles.section}>
          <h2>What the Candidate Will Need / Bonus Points</h2>
          <ul>
            {positionDetails.what_candidate_need
              .split("\n")
              .map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
              
          </ul>
        </div> */}
        {/* <div className={Styles.section}>
          <h2>Basic Qualifications</h2>
          <ul>
            {positionDetails.qualifications.split("\n").map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
        </div> */}
        <div className={Styles.section}>
        {
          (props.data.Content).map((data, key)=>{
            return(
              <>
              <h2>{data.heading}</h2>
              {
                data.content.includes("\n-" || "\n -") ? (
                  <ul>
                  {data.content.split("\n").map((item, key) => {
                    return <Reveal key={key}><li key={key}>{item.trim().slice(1)}</li></Reveal>;
                  })}
          </ul>
                ) : (
                  <Reveal>
                    <p>{data.content}</p>
                  </Reveal>
                )
              }
              </>
            )
          })
        }
        </div>
        <p>{props.data.conclusion || positionDetails.conclusion}</p>
        <button onClick={()=> setOpenModal(true)}>Apply now</button>
      </div>
      
    </div>
    </>
  );
};

export default PositionPage;
