import React, { useState } from "react";

const FetchQuestionsAndAnswers = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  const request = async () => {
    const response = await fetch("http://localhost:8000/questions");
    const req = await response.json().then((response) => {
      if (response) {
        setQuestionsAndAnswers(response.data);
      } else {
        console.log("Error", "Couldn't fetch questions");
      }
    });
  };
  return questionsAndAnswers;
};

export default FetchQuestionsAndAnswers;
