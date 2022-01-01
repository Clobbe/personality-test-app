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
          weight: 100,
        },
        {
          answer:
            "Think it’s more important to give them some of your time; work can wait",
          weight: 75,
        },
        {
          answer: "Listen, but with only with half an ear",
          weight: 50,
        },
        {
          answer:
            "Interrupt and explain that you are really busy at the moment ",
          weight: 10,
        },
      ],
    },
    {
      question:
        "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      options: [
        {
          answer: "Bubble with inner anger, but keep quiet",
          weight: 100,
        },
        {
          answer: "Look at your watch every two minutes ",
          weight: 75,
        },
        {
          answer:
            "Explain to other equally impatient people in the room that the doctor is always running late",
          weight: 50,
        },
        {
          answer:
            "Complain in a loud voice, while tapping your foot impatiently",
          weight: 0,
        },
      ],
    },
    {
      question:
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You: ",
      options: [
        {
          answer: "Don’t dare contradict them",
          weight: 100,
        },
        {
          answer: "Think that they are obviously right ",
          weight: 75,
        },
        {
          answer: "Defend your own point of view, tooth and nail ",
          weight: 50,
        },
        {
          answer: "Continuously interrupt your colleague",
          weight: 10,
        },
      ],
    },
    {
      question: "You are taking part in a guided tour of a museum. You:",
      options: [
        {
          answer:
            "Are a bit too far towards the back so don’t really hear what the guide is saying ",
          weight: 100,
        },
        {
          answer: "Follow the group without question",
          weight: 75,
        },
        {
          answer: "Make sure that everyone is able to hear properly",
          weight: 50,
        },
        {
          answer:
            "Are right up the front, adding your own comments in a loud voice ",
          weight: 0,
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

  const updateScoreHandler = (weight: number) => {
    const s = score + weight;
    setScore(s);
    if (pageIndex === questions.length - 1) {
      history.push({
        pathname: "/result",
        state: {
          score: score,
        },
      });
    } else {
      updatePageIndex(pageIndex + 1);
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
              onClick={() =>
                updateScoreHandler(answers[pageIndex][0]["weight"])
              }
            >
              {answers[pageIndex][0]["answer"]}
            </OptionButton>
          </Col>
          <Col>
            <OptionButton
              onClick={() =>
                updateScoreHandler(answers[pageIndex][1]["weight"])
              }
            >
              {answers[pageIndex][1]["answer"]}
            </OptionButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <OptionButton
              onClick={() =>
                updateScoreHandler(answers[pageIndex][2]["weight"])
              }
            >
              {answers[pageIndex][2]["answer"]}
            </OptionButton>
          </Col>
          <Col>
            <OptionButton
              onClick={() =>
                updateScoreHandler(answers[pageIndex][3]["weight"])
              }
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
