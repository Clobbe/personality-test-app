import { VFC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router-dom";
import Card from "../components/atoms/Card";
import ScoreLine from "../components/molecules/ScoreLine";

type LocationState = {
  score: number;
};

const Results: VFC = () => {
  const location = useLocation();
  const questionScore = (location.state as LocationState).score;
  //?? :: add animation to display the result?
  //TODO :: refactor do pull score from context instead of as req-params...

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            Great! <br />
            You seems to lean more towards being a
            {questionScore < 300 ? " extroverted" : " introverted"} kind of
            person
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col>
            <ScoreLine score={questionScore} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Results;
