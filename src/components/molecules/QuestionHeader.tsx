import { VFC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../atoms";

interface Props {
  index: number;
  question: string;
}

export const QuestionHeader: VFC<Props> = ({ index, question }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Typography variant="h4">Question {index + 1}:</Typography>
          <Typography variant="h2">{question}</Typography>
          <Typography variant="body1-semi-bold">Select an answer:</Typography>
        </Col>
      </Row>
    </Container>
  );
};
