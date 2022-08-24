import { VFC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Options } from "../../types/questionsAndAnswers";
import { OptionButton } from "../molecules";

interface Props {
  options: Array<Options>;
  sendScore: (score: number) => void;
}

export const AnswerOptions: VFC<Props> = ({ options, sendScore }) => {
  const row1 = options.slice(0, 2);
  const row2 = options.slice(2);
  return (
    <Container>
      <Row align="center" justify="center">
        {row1.map((option) => (
          <Col key={option.answer}>
            <OptionButton onClick={() => sendScore(option.score)}>
              {option.answer}
            </OptionButton>
          </Col>
        ))}
      </Row>
      <Row align="center" justify="center">
        {row2.map((answer) => (
          <Col key={answer.answer}>
            <OptionButton onClick={() => sendScore(answer.score)}>
              {answer.answer}
            </OptionButton>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
