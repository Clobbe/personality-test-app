import React, { useState, VFC } from "react";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { Card, Spacing } from "../components/atoms";
import {
  AnswerOptions,
  PrimaryButton,
  QuestionHeader
} from "../components/molecules";
import { useQuestionContext } from "../context/questionContext";

const Questionaire: VFC = () => {
  //TODO :: refactor score-keeping to use a context instead
  // -- export a function from the context instead...
  //TODO :: add function to context to store score in Firebase

  const [pageIndex, updatePageIndex] = useState(0);
  const [tally, setTally] = useState(0);
  const questionsAndAnswers = useQuestionContext().questions;
  const history = useHistory();

  //TODO :: refactor this func out to context
  const updateScoreHandler = (score: number) => {
    console.log(tally);
    const s = tally + score;

    setTally(s);
    if (pageIndex === questionsAndAnswers.length - 1) {
      history.push({
        pathname: "/result",
        state: {
          score: score
        }
      });
    } else {
      setTimeout(() => {
        updatePageIndex(pageIndex + 1);
      }, 200);
    }
  };

  return (
    <Card>
      <Row>
        <Col>
          <QuestionHeader
            index={pageIndex}
            question={questionsAndAnswers[pageIndex].question}
          />
          <AnswerOptions
            sendScore={updateScoreHandler}
            options={questionsAndAnswers[pageIndex].options}
          />
        </Col>
      </Row>
      <Spacing spacing={5} />
      <Row justify="end">
        <PrimaryButton onClick={() => {}}>Next question</PrimaryButton>
      </Row>
    </Card>
  );
};

export default Questionaire;
