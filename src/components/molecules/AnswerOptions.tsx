import { VFC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Options } from "../../types/questionsAndAnswers";
import { OptionButton } from "../molecules";

interface Props {
  options: Array<Options>;
  onClick(): void;
}

export const AnswerOptions: VFC<Props> = ({ options, onClick }) => {
  const row1 = options.slice(0, 2);
  const row2 = options.slice(2);
  return (
    <Container>
      <Row align="center">
        {row1.map((answer) => (
          <Col key={answer.answer}>
            <OptionButton onClick={onClick}>{answer.answer}</OptionButton>
          </Col>
        ))}
      </Row>
      <Row align="center">
        {row2.map((answer) => (
          <Col key={answer.answer}>
            <OptionButton onClick={onClick}>{answer.answer}</OptionButton>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
