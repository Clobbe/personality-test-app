import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "../components/atoms/Card";
import Button from "../components/atoms/Button";
import OptionButton from "../components/atoms/OptionButton";

/* 
    //TODO :: add fetching of questions from backend-api
    TODO :: add pagination between questions dependent on amount of questions
    TODO :: add a page stepper-/progress component
    TODO :: add form with RadioButtons to select question - use large buttons
    TODO :: add :hover + :selected effects on buttons
    */

const Questionaire = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setQuestionsAndAnswers(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  //questionsAndAnswers.map((item) => item["question"]);

  //questionsAndAnswers[0]["options"][0]["answer"]
  /* 
  const NextQuestionHandler = () => {
    const [i, setI] = useState<number>(0);

  } */

  const i = 2;

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <h4>Question {i}:</h4>
            {/* <h2>{questionsAndAnswers[0]["question"]}</h2> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Select an answer:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <OptionButton>option 1</OptionButton>
            <OptionButton>option 2</OptionButton>
          </Col>
          <Col>
            <OptionButton>option 3</OptionButton>
            <OptionButton>option 4</OptionButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Next</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Questionaire;
