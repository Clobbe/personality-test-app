import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import Card from "../components/atoms/Card";
import Button from "../components/atoms/Button";
import OptionButton from "../components/atoms/OptionButton";

/* 
    //TODO :: add fetching of questions from backend-api
    //TODO :: add pagination between questions dependent on amount of questions
    TODO :: implement function to calculate score
    TODO :: add a page stepper-/progress component
    //TODO :: add form with RadioButtons to select question - use large buttons
    //TODO :: add :hover + :selected effects on buttons
    */

const Questionaire = () => {
  const questionsAndAnswers = [
    {
      question:
        "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      options: [
        {
          answer: "Don’t dare to interrupt them",
          value: 0,
        },
        {
          answer:
            "Think it’s more important to give them some of your time; work can wait",
          value: 1,
        },
        {
          answer: "Listen, but with only with half an ear",
          value: 2,
        },
        {
          answer:
            "Interrupt and explain that you are really busy at the moment ",
          value: 3,
        },
      ],
    },
    {
      question:
        "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      options: [
        {
          answer: "Bubble with inner anger, but keep quiet",
          value: 0,
        },
        {
          answer: "Look at your watch every two minutes ",
          value: 1,
        },
        {
          answer:
            "Explain to other equally impatient people in the room that the doctor is always running late",
          value: 2,
        },
        {
          answer:
            "Complain in a loud voice, while tapping your foot impatiently",
          value: 3,
        },
      ],
    },
    {
      question:
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You: ",
      options: [
        {
          answer: "Don’t dare contradict them",
          value: 0,
        },
        {
          answer: "Think that they are obviously right ",
          value: 1,
        },
        {
          answer: "Defend your own point of view, tooth and nail ",
          value: 2,
        },
        {
          answer: "Continuously interrupt your colleague",
          value: 3,
        },
      ],
    },
    {
      question: "You are taking part in a guided tour of a museum. You:",
      options: [
        {
          answer:
            "Are a bit too far towards the back so don’t really hear what the guide is saying ",
          value: 0,
        },
        {
          answer: "Follow the group without question",
          value: 1,
        },
        {
          answer: "Make sure that everyone is able to hear properly",
          value: 2,
        },
        {
          answer:
            "Are right up the front, adding your own comments in a loud voice ",
          value: 3,
        },
      ],
    },
    {
      question:
        "You crack a joke at work, but nobody seems to have noticed. You:",
      options: [
        {
          answer: "Think it’s for the best — it was a lame joke anyway",
          value: 0,
        },
        {
          answer: "Wait to share it with your friends after work",
          value: 1,
        },
        {
          answer: "Try again a bit later with one of your colleagues",
          value: 2,
        },
        {
          answer: "Keep telling it until they pay attention",
          value: 3,
        },
      ],
    },
  ];
  let score = 0;
  const questions = questionsAndAnswers.map((item) => item["question"]);
  const answers = questionsAndAnswers.map((item) => item["options"]);
  let optionsSelection = [false, false, false, false];
  const [pageIndex, updatePageIndex] = useState(0);

  const updateOptionsHandler = (optionValue: number) => {
    console.log(optionsSelection);
    optionsSelection[0] = true;
    console.log(optionsSelection);
    score = score + optionValue;
    console.log("optionVal: ", optionValue);
    console.log("score: ", score);
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
              selected={optionsSelection[0]}
              onClick={() =>
                updateOptionsHandler(answers[pageIndex][0]["value"])
              }
            >
              {answers[pageIndex][0]["answer"]}
            </OptionButton>
          </Col>
          <Col>
            <OptionButton
              selected={optionsSelection[1]}
              onClick={() =>
                updateOptionsHandler(answers[pageIndex][1]["value"])
              }
            >
              {answers[pageIndex][1]["answer"]}
            </OptionButton>
          </Col>
        </Row>
        <Row>
          <Col>
            {pageIndex === questionsAndAnswers.length - 1 ? (
              <Link to={"/result"} state={{ score: score }}>
                <Button>See your result</Button>
              </Link>
            ) : (
              <Button onClick={() => updatePageIndex(pageIndex + 1)}>
                Next
              </Button>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Questionaire;
