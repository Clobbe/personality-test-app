import { VFC } from "react";
import { Col, Row } from "react-grid-system";
import { Options } from "../../types/questionsAndAnswers";
import OptionButton from "../atoms/OptionButton";

interface Props {
  options: Array<Options>;
  onClick(): void;
}

export const AnswerOptions: VFC<Props> = ({ options, onClick }) => {
  const row1 = options.slice(0, 2);
  const row2 = options.slice(2);
  return (
    <>
      <Row align="center">
        {row1.map((answer) => (
          <Col>
            <OptionButton onClick={onClick}>{answer.answer}</OptionButton>
          </Col>
        ))}
      </Row>
      <Row align="center">
        {row2.map((answer) => (
          <Col>
            <OptionButton onClick={onClick}>{answer.answer}</OptionButton>
          </Col>
        ))}
      </Row>
    </>
  );
};
