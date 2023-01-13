import Image from "next/image";
import React, { useEffect, useState } from "react";
import useFetchData from "../lib/api";
import Styles from "../styles/components/faq.module.scss";
import Accordion from './Accordion'
type QUESTIONS = {
  id: number;
  Question: string;
  Answer: string;
};

const questions: QUESTIONS[] = [
  {
    id: 0,
    Question: "Explain the hiring model",
    Answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 1,
    Question: "Is there a trial service available? What is the process?",
    Answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 2,
    Question: "Please explain the background verification process of chefs?",
    Answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 3,
    Question: "Can I have gender preferences while hiring a home chef?",
    Answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quisquam! Autem quo quia explicabo aut sint soluta repellendus officia cum?",
  },
  {
    id: 4,
    Question: "I want to pre-decide my convenient slot. Is that possible?",
    Answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ullam?",
  },
];



const FAQ = () => {
  const [active, setActive] = React.useState<Number>();
  
  return (
    <div className={Styles.faq_container}>
      <h2 className={Styles.faq_title}>Frequently Asked Questions</h2>

      <div className={Styles.questions}>
        {questions.map((q, key) => {
          return <Accordion title={q.Question} content={q.Answer} key={key} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
