import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import Card from "../components/atoms/Card";
import OptionButton from "../components/atoms/OptionButton";

const Questionaire = () => {
  const questionsAndAnswersFromBackend = [
    {
      question:
        "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      options: [
        {
          answer: "Don’t dare to interrupt them",
          value: 4,
        },
        {
          answer:
            "Think it’s more important to give them some of your time; work can wait",
          value: 3,
        },
        {
          answer: "Listen, but with only with half an ear",
          value: 2,
        },
        {
          answer:
            "Interrupt and explain that you are really busy at the moment ",
          value: 1,
        },
      ],
    },
    {
      question:
        "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      options: [
        {
          answer: "Bubble with inner anger, but keep quiet",
          value: 4,
        },
        {
          answer: "Look at your watch every two minutes ",
          value: 3,
        },
        {
          answer:
            "Explain to other equally impatient people in the room that the doctor is always running late",
          value: 2,
        },
        {
          answer:
            "Complain in a loud voice, while tapping your foot impatiently",
          value: 1,
        },
      ],
    },
    {
      question:
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You: ",
      options: [
        {
          answer: "Don’t dare contradict them",
          value: 4,
        },
        {
          answer: "Think that they are obviously right ",
          value: 3,
        },
        {
          answer: "Defend your own point of view, tooth and nail ",
          value: 2,
        },
        {
          answer: "Continuously interrupt your colleague",
          value: 1,
        },
      ],
    },
    {
      question: "You are taking part in a guided tour of a museum. You:",
      options: [
        {
          answer:
            "Are a bit too far towards the back so don’t really hear what the guide is saying ",
          value: 4,
        },
        {
          answer: "Follow the group without question",
          value: 3,
        },
        {
          answer: "Make sure that everyone is able to hear properly",
          value: 2,
        },
        {
          answer:
            "Are right up the front, adding your own comments in a loud voice ",
          value: 1,
        },
      ],
    },
    {
      question:
        "You crack a joke at work, but nobody seems to have noticed. You:",
      options: [
        {
          answer: "Think it’s for the best — it was a lame joke anyway",
          value: 4,
        },
        {
          answer: "Wait to share it with your friends after work",
          value: 3,
        },
        {
          answer: "Try again a bit later with one of your colleagues",
          value: 2,
        },
        {
          answer: "Keep telling it until they pay attention",
          value: 1,
        },
      ],
    },
  ];
  const questions = questionsAndAnswersFromBackend.map(
    (item) => item["question"]
  );
  const answers = questionsAndAnswersFromBackend.map((item) => item["options"]);
  const [pageIndex, updatePageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();
  const updateScoreHandler = (optionValue: number) => {
    let s = score + optionValue;
    setScore(s);
    console.log(score);
    if (pageIndex === questions.length - 1) {
      history.push({
        pathname: "/result",
        state: {
          score: score,
        },
      });
    } else {
      updatePageIndex(pageIndex + 1);
      console.log("pageIndex:", pageIndex);
    }
  };
  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <h4>Question {pageIndex + 1}:</h4>
            <h2>{questions[pageIndex]}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Select an answer:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <OptionButton
              onClick={() => updateScoreHandler(answers[pageIndex][0]["value"])}
            >
              {answers[pageIndex][0]["answer"]}
            </OptionButton>
          </Col>
          <Col>
            <OptionButton
              onClick={() => updateScoreHandler(answers[pageIndex][1]["value"])}
            >
              {answers[pageIndex][1]["answer"]}
            </OptionButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <OptionButton
              onClick={() => updateScoreHandler(answers[pageIndex][2]["value"])}
            >
              {answers[pageIndex][2]["answer"]}
            </OptionButton>
          </Col>
          <Col>
            <OptionButton
              onClick={() => updateScoreHandler(answers[pageIndex][3]["value"])}
            >
              {answers[pageIndex][3]["answer"]}
            </OptionButton>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Questionaire;
