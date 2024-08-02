/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Question.css';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "How does React work?",
      answer: "React creates a virtual DOM in memory and synchronizes it with the real DOM."
    },
    {
      question: "What are components in React?",
      answer: "Components are independent, reusable pieces of code in a React application."
    },
    {
      question: "How do you create a component in React?",
      answer: "A component can be created using a JavaScript function or a class."
    },
    
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questionsAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className="icon">
              {activeIndex === index ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}    

              
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
