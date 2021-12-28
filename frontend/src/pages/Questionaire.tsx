import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "../components/atoms/Card";
import Button from "../components/atoms/Button";

/* 
    TODO :: add fetching of questions from backend-api
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
        setQuestionsAndAnswers(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  //questionsAndAnswers.map((item) => item["question"]);

  //questionsAndAnswers[0]["options"][0]["answer"]

  return (
    <Container>
      <Card>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>asdasasd</Col>
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
