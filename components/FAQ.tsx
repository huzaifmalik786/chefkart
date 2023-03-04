import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QUESTIONS } from "../interfaces/interfaces";
import useFetchData from "../lib/api";
import Styles from "../styles/components/faq.module.scss";
import Accordion from './Accordion'


const questions: QUESTIONS[] = [
  {
    id: 0,
    heading: "Explain the hiring model",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 1,
    heading: "Is there a trial service available? What is the process?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 2,
    heading: "Please explain the background verification process of chefs?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 3,
    heading: "Can I have gender preferences while hiring a home chef?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 4,
    heading: "I want to pre-decide my convenient slot. Is that possible?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?",
  },
];

type Props = {
  data: {
    heading : string;
    Question_answer: QUESTIONS[]
  }
}

const FAQ = (props: Props) => {
  const [active, setActive] = React.useState<Number>();
  
  return (
    <div className={Styles.faq_container}>
      <h2 className={Styles.faq_title}>{props.data?.heading || "Frequently Asked Questions"}</h2>

      <div className={Styles.questions}>
        {(props.data?.Question_answer || questions).map((q, key) => {
          return <Accordion title={q.heading} content={q.description} key={key} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
